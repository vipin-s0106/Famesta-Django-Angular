import datetime
from django.core.cache import cache
from django.conf import settings


class ActiveUserMiddleware:

    def __init__(self, get_response):
        self.get_response = get_response

        # one-time configuration and initialization

    def __call__(self, request):

        '''
        Code to be executed for each request before
        the view (and later middleware) are called
        '''

        response = self.get_response(request)
        '''
        Code to be for each request/response after the 
        view is called
        '''

        return response

    def process_view(self, request, view_func, *view_args, **view_kargs):
        '''
        called just before Django calls the view
        Return either none or HttpResponse
        '''
        pass

    def process_exception(self, request, exception):
        '''
        called for the response if exception is raised by view.
        Return either none or HttpResponse
        '''
        pass

    def process_template_response(self, request, response):
        '''
        request - HttoRequest object.
        response - TemplateResponse object
        return templateresponse
        use this for changing template or context if it is needed.
        '''

        '''
        I have to right here the actual logic of storing the logged user session timestamp to cache
        because during request my JWT token was not authenticated so inside the request.user.username it was blank
        that's why need to write the logic inside the response view when JWT authenticated
        '''
        current_user = request.user
        # print(request.user.is_authenticated)
        # print(request.user.username)
        if request.user.is_authenticated:
            now = datetime.datetime.now()
            cache.set('seen_%s' % (current_user.username), now,
                      settings.USER_LASTSEEN_TIMEOUT)

        return response

    # def process_request(self, request):
    #     current_user = request.user
    #     if request.user.is_authenticated:
    #         now = datetime.datetime.now()
    #         cache.set('seen_%s' % (current_user.username), now,
    #                   settings.USER_LASTSEEN_TIMEOUT)
