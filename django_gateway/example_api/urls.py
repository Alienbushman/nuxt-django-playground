from django.conf import settings
from django.urls import path

from example_api.views import UserTextView

urlpatterns = [
	path('models/', UserTextView.as_view()),
]

if settings.DEBUG:
    from django.conf.urls.static import static
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)