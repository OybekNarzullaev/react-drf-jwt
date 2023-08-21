from django.urls import path
from users.views import *

urlpatterns = [
    path('register/', CustomUserCreate.as_view()),
    path('logout/blacklist/', BlacklistTokenUpdateView.as_view()),
]
