from rest_framework import serializers

from example_api.models import UserText


class UserTextSerializer(serializers.ModelSerializer):
	class Meta:
		model = UserText
		fields = '__all__'
