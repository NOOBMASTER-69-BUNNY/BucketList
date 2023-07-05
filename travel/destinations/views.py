from django.shortcuts import render, redirect
from rest_framework.response import Response
from rest_framework.views import APIView
import pymongo
import json
from bson import ObjectId
# Create your views here.


class MongoJSONEncoder(json.JSONEncoder):
    def default(self, obj):
        if isinstance(obj, ObjectId):
            return str(obj)
        return super().default(obj)

class GeneralView:
    def get_mongo_connection(self, name):
        MONGO_URL            = "mongodb://localhost:27017"
        self.MONGO_CLIENT    = pymongo.MongoClient(MONGO_URL)
        MONGO_DB             = self.MONGO_CLIENT["travel"]
        COLLECTION           = MONGO_DB[name]
        
        return COLLECTION
    

class PlacesToVisitView(APIView, GeneralView):
    
    def get(self,request):
        try:
            try:
                page_number = int(request.GET.get('page'))
            except:
                page_number = 0
            if page_number<0:
                raise
            skip_number     = (page_number+1)*20
            COLLECTION      = self.get_mongo_connection("city_list")
            skip_limit      = COLLECTION.count_documents({})
            if skip_number < skip_limit:
                data            = list(COLLECTION.find({}).skip(skip_number).limit(20))
                data            = json.dumps(data, cls=MongoJSONEncoder)
                json_data       = json.loads(data)    
            else:
                raise
            self.MONGO_CLIENT.close()
            return Response(json_data)
        except:
            return render(request,"404.html", status=404)
        

class SuggestionAPI(APIView, GeneralView):
    def get(self, request):
        COLLECTION = self.get_mongo_connection("city_list")
        data = list(COLLECTION.aggregate([{"$sort":{"search_count":-1}},{"$limit":12}]))
        data = json.dumps(data, cls=MongoJSONEncoder)
        json_data = json.loads(data)
        return Response(json_data)
        
        
class ArticlesAPI(APIView, GeneralView):
    def get(self, request):
        COLLECTION = self.get_mongo_connection("articles")
        data = list(COLLECTION.aggregate([{"$sort":{"open_count":-1}},{"$limit":10}]))    
        data = json.dumps(data, cls=MongoJSONEncoder)
        json_data = json.loads(data)
        return Response(json_data)