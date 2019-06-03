from flask import make_response
from flask_restplus import Resource, abort

from . import api_rest, User, images
from werkzeug.datastructures import FileStorage
from flask_restplus.reqparse import RequestParser
from flask_login import current_user


@api_rest.route('/user/register')
class Register(Resource):
    register_parser = RequestParser()
    register_parser.add_argument('user', type = str, required = True)
    register_parser.add_argument('pass', type = str, required = True)
    register_parser.add_argument('image', type = FileStorage, required = True, location = 'files')

    @api_rest.expect(register_parser)
    def post(self):
        args = self.register_parser.parse_args()
        status = User(args['user']).register(args['pass'], args['image'])
        return {'status': status}


@api_rest.route('/user/login')
class Login(Resource):
    login_parser = RequestParser()
    login_parser.add_argument('user', type = str, required = True)
    login_parser.add_argument('pass', type = str, required = True)

    @api_rest.expect(login_parser)
    def post(self):
        args = self.login_parser.parse_args()
        status = User(args['user']).login(args['pass'])
        return {'status': status}


@api_rest.route('/user/personal')
class Personal(Resource):
    def get(self):
        if current_user.is_authenticated:
            user_id = current_user.get_id()
            #image = User(user_id).what()
        else:
            index_list = images.find({}, {'index': 1}).limit(50)
            return [{'src': '/api/images/' + i['index']} for i in index_list]
        personal = []
        for i in range(50):
            personal.append({"src": "/api/images/" + str(i)})
        return personal


@api_rest.route('/images/<string:image_id>')
class Images(Resource):
    def get(self, image_id):
        image = images.find_one({'index': image_id}, {'image': 1})
        if image:
            response = make_response(image['image'])
            response.headers.set('Content-Type', 'image/jpeg')
            return response
        abort(404)


@api_rest.route('/faceswap/<string:image_id>')
class FaceSwap(Resource):
    def get(self, image_id):
        if current_user.is_authenticated:
            user_id = current_user.get_id()
            image = User(user_id).swap(image_id)
            response = make_response(image)
            response.headers.set('Content-Type', 'image/jpeg')
            return response
        abort(401)
