from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework_simplejwt.tokens import RefreshToken


class Welcome(APIView):

    def post(self, request, *args, **kwargs):

        return Response(f'welcome {request.user}\n {request.auth}')


class Welcome(APIView):
    permission_classes = [IsAuthenticated]
    authentication_classes = [JWTAuthentication, TokenAuthentication]

    def post(self, request, *args, **kwargs):

        return Response(f'welcome {request.user}\n {request.auth}')
