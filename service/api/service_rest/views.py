# from django.shortcuts import render
from django.http import JsonResponse
import json
from django.views.decorators.http import require_http_methods
from common.json import ModelEncoder
from .models import AutomobileVO, Technician, Appointment


# Create your views here.

class AutomobileVOEncoder(ModelEncoder):
    model = AutomobileVO
    properties = ["vin", "import_href"]


class TechnicianListEncoder(ModelEncoder):
    model = Technician
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id",
    ]


class AppointmentListEncoder(ModelEncoder):
    model = Appointment
    properties = [
        "id",
        "date_time",
        "reason",
        "status",
        "vin",
        "customer",
        "technician",
    ]
    encoders = {
        "technician": TechnicianListEncoder(),
    }

    # def get_extra_data(self, o):
    #     return {"name": o.technician.name}


# List and create technicians
@require_http_methods(["GET", "POST"])
def api_list_technician(request):
    if request.method == "GET":
        technician = Technician.objects.all()

        return JsonResponse(
            {"technicians": technician},
            encoder=TechnicianListEncoder,
        )

    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.create(**content)
            return JsonResponse(
                technician,
                encoder=TechnicianListEncoder,
                safe=False,
            )
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Could not add Technician"},
                status=400,
            )


# Delete a technician
@require_http_methods(["GET", "DELETE"])
def api_delete_technician(request, pk):
    if request.method == "GET":
        technician = Technician.objects.get(id=pk)
        return JsonResponse(
            technician,
            encoder=TechnicianListEncoder,
            safe=False,
        )
    else:
        count, _ = Technician.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


# List appointments
@require_http_methods(["GET", "POST"])
def api_list_appointments(request):
    if request.method == "GET":
        appointment = Appointment.objects.all()
        return JsonResponse(
            {"appointments": appointment},
            encoder=AppointmentListEncoder,
        )
    else:
        content = json.loads(request.body)
        try:
            technician = Technician.objects.get(employee_id=content["technician"])
            content["technician"] = technician
        except Technician.DoesNotExist:
            return JsonResponse(
                {"message": "Unable to create appointment"},
                status=400,
            )

        appointment = Appointment.objects.create(**content)
        return JsonResponse(
            appointment,
            encoder=AppointmentListEncoder,
            safe=False,
        )


# Delete an appointment
@require_http_methods(["GET", "DELETE"])
def api_delete_appointment(request, pk):
    if request.method == "GET":
        appointment = Appointment.objects.get(id=pk)
        return JsonResponse(
            appointment,
            encoder=AppointmentListEncoder,
            safe=False,
        )
    else:
        count, _ = Appointment.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})


# set appointment status to canceled
@require_http_methods(["PUT"])
def api_cancel_appointment(request, pk):
    if request.method == "PUT":
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.status = "canceled"
            appointment.save()

            return JsonResponse(
                appointment,
                encoder=AppointmentListEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Cancel error. Appointment does not exist"},
                status=400,
            )


# Set appointment status to finished
@require_http_methods(["PUT"])
def api_finish_appointment(request, pk):
    if request.method == "PUT":
        try:
            appointment = Appointment.objects.get(id=pk)
            appointment.status = "finished"
            appointment.save()

            return JsonResponse(
                appointment,
                encoder=AppointmentListEncoder,
                safe=False,
            )
        except Appointment.DoesNotExist:
            return JsonResponse(
                {"message": "Finish error. Appointment does not exist"},
                status=400
            )
