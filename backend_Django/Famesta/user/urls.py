from django.urls import path
from django.conf.urls import url
from . import views
from rest_framework_simplejwt import views as jwt_views

app_name = 'user'

urlpatterns = [
   url('^api/login/$',views.Login.as_view() , name="api_login"),
   url('^api/token/refresh/$',jwt_views.TokenRefreshView.as_view(), name='refresh_token'),
   url('^hello/$',views.HelloView.as_view(),name='hello'),
   url('^hello_vipin/$',views.hello,name='hello_vipin'),
   # path('password-reset/',views.password_reset,name="password_reset"),
   # path('password_reset_done/',views.password_reset_done,name="password_reset_done"),
   # path('resend_otp/',views.resend_otp,name="resend_otp"),
]
'''
{
    "refresh": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTU4NzgzMTIwNiwianRpIjoiMTU0MDczOGI1MTQzNDczMWI5MGMwZjZmZWJiNWVjMzYiLCJ1c2VyX2lkIjoxfQ.FjzP971u_gBAybNzzS9U1qDo9HJd1gDCctj_k3zJFck",
    "access": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNTg3NzQ1MTA2LCJqdGkiOiJiY2FkMTYyNzY2YzM0OTNmOWE1ZTFiNDkwMjdmMGQzZCIsInVzZXJfaWQiOjF9.SqZ96DxzUzBI38cXWma3RnCm8XekQKrjRxv0q5dLTpg"
}
'''
