from flask import Blueprint
from flask_restplus import Api, abort

api_bp = Blueprint('api_bp', __name__, url_prefix='/api')
api_rest = Api(api_bp)

from .facelib.face_exists import *
from .facelib.resize_standard import *
from .facelib.face_swap import *
from pymongo import MongoClient
from flask_login import UserMixin, login_user
from werkzeug.security import generate_password_hash, check_password_hash

db = MongoClient('127.0.0.1', 27017)
profile = db.user.profile
images = db.model.image

class User(UserMixin):
    def __init__(self, userid):
        self.userid = userid

    def get_id(self):
        return self.userid

    def register(self, password, image):
        if profile.find_one({'user': self.userid}, {'user': 1}):
            return 'UserExist'
        if image.mimetype.startswith('image/'):
            img = image.read()
            if face_exists(img):
                pw_hash = generate_password_hash(password)
                img = resize_standard(img)
                profile.insert_one({'user': self.userid, 'pass': pw_hash, 'image': img})
                return 'Success'
        return 'NoImage'

    def login(self, password):
        hit = profile.find_one({'user': self.userid}, {'image': 0})
        if hit and check_password_hash(hit['pass'], password):
            login_user(self)
            return 'Success'
        else:
            return 'Failure'
    
    def swap(self, index):
        user_face = profile.find_one({'user': self.userid}, {'image': 1})['image']
        model_hair = images.find_one({'index': index}, {'image': 1})
        if model_hair:
            return face_swap(model_hair['image'], user_face)
        abort(404)

# Import resources to ensure view is registered
from .resources import *
