from rest_framework import serializers

from articals.models import Article


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'content', 'description', 'image')

class ArticleUpdateSerializer(serializers.ModelSerializer):
	class Meta:
		model = Article
		fields = [
			'title',
			'content',
			'description',
		]