from django.shortcuts import render

from example_api.models import UserText
from example_api.serializers import UserTextSerializer
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

from drf_yasg.utils import swagger_auto_schema


# Create your views here.
class UserTextView(APIView):
	# queryset = ModelUsed.objects.all()
	serializer_class = UserTextSerializer

	def get(self, request):

		model_name = request.query_params.get('model_name', None)

		if model_name:
			models_used = UserText.objects.filter(model_name=model_name)
		else:
			models_used = UserText.objects.all()

		if models_used:
			model_serializer = self.serializer_class(models_used, many=True)
			return Response(model_serializer.data, status=status.HTTP_200_OK)
		else:
			return Response({'message': 'No text found'}, status=status.HTTP_200_OK)

	@swagger_auto_schema(request_body=UserTextSerializer)
	def post(self, request):

		example_text = request.data.get('example_text', None)

		post_data = {
			'example_text': example_text
		}

		serializer = self.serializer_class(data=post_data)
		if serializer.is_valid(raise_exception=True):
			model_used = serializer.save()

			if model_used:
				return Response({'message': 'Successfully saved new text'}, status=status.HTTP_201_CREATED)
		return Response({'message': 'Something went wrong'}, status=status.HTTP_400_BAD_REQUEST)
