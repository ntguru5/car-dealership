from common.json import ModelEncoder
from .models import Customer, Salesperson, Sale, AutomobileVO


class CustomerEncoder(ModelEncoder):
    model = Customer
    properties = [
        "first_name",
        "last_name",
        "address",
        "phone_number",
        "id",
    ]


class SalespersonEncoder(ModelEncoder):
    model = Salesperson
    properties = [
        "first_name",
        "last_name",
        "employee_id",
        "id",
    ]


class AutomobileVoEncoder(ModelEncoder):
    model = AutomobileVO
    properties = [
        "vin",
        "sold",
    ]


class SaleEncoder(ModelEncoder):
    model = Sale
    properties = [
        "price",
        "salesperson",
        "customer",
        "automobile",
        "id",
    ]
    encoders = {
        "salesperson": SalespersonEncoder(),
        "customer": CustomerEncoder(),
        "automobile": AutomobileVoEncoder(),
    }
