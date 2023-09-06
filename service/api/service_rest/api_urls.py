from django.urls import path
from .views import api_list_technician, api_delete_technician

urlpatterns = [
    path("technicians/", api_list_technician, name="api_technician_list"),
    path("technicians/<int:pk>/", api_delete_technician, name="api_delete_technician"),
]
