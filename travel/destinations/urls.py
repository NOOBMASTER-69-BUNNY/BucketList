from django.urls import path
from .views import PlacesToVisitView, SuggestionAPI, ArticlesAPI

urlpatterns = [
    path('', PlacesToVisitView.as_view(), name='destination-list'),
    path('suggestions/', SuggestionAPI.as_view(), name='destination-suggestion'),
    path('articles/', ArticlesAPI.as_view(), name='articles'),
]
