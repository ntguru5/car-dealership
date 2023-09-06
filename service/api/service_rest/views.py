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
        "date_time",
        "reason",
        "vin",
        "customer",
        "technician",
    ]
    encoders = {
        "technician": TechnicianListEncoder(),
    }

    def get_extra_data(self, o):
        return {"status": o.status.name}


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
# @require_http_methods(["GET", "POST"])
# def api_list_appointments(request):
#     if request.method == "GET":
#         appointment = Appointment.objects.all()
#         return JsonResponse(

#         )
