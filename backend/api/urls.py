from django.urls import *
from api.views import *

urlpatterns = [
    path('welcome/', Welcome.as_view())
]
