from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated


class Welcome(APIView):
    permission_classes = [IsAuthenticated]

    def post(request, *args, **kwargs):
        return Response('welcome Oybek')
