from django.http import JsonResponse

def signup_view(request):
    if request.method == 'POST':
        response_data = {
            'body':request.body
        }
        
        return JsonResponse(response_data)
    
    response_data = {
        'error': 'Invalid request method.'
    }
    return JsonResponse(response_data, status=400)
    
def signin_view(request):
    print(request.body)