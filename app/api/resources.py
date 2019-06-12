from flask import make_response
from flask_restplus import Resource, abort

from . import api_rest, User, images
from werkzeug.datastructures import FileStorage
from flask_restplus.reqparse import RequestParser
from flask_login import current_user, logout_user


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

cursor = None

@api_rest.route('/user/personal')
class Personal(Resource):
    def get(self):
        global cursor
        if current_user.is_authenticated:
            user_id = current_user.get_id()
            return User(user_id).personal()
        else:
            if cursor:
                index_list = images.find({'_id': {'$gt': cursor}}, {'index': 1}).limit(20)
            else:
                index_list = images.find({}, {'index': 1}).limit(20)
            if index_list.count() < 20:
                cursor = None
            else:
                cursor = index_list[19]['_id']
            return [{'key': i['index']} for i in index_list]


@api_rest.route('/user/info')
class UserInfo(Resource):
    def get(self):
        if current_user.is_authenticated:
            return {'isLogin': True, 'user': current_user.get_id()}
        else:
            return {'isLogin': False}


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


@api_rest.route('/user/logout')
class Logout(Resource):
    def get(self):
        logout_user()
        return {'status': 'Success'}
