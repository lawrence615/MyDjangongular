from django.conf.urls import url
from rest_framework import routers
from .views import FacilityViewSet

router = routers.DefaultRouter()
router.register(r'facilities', FacilityViewSet)

urlpatterns = router.urls
