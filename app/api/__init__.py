from flask import Blueprint
from flask_restplus import Api, abort

api_bp = Blueprint('api_bp', __name__, url_prefix='/api')
api_rest = Api(api_bp)

from .facelib.face_exists import *
from .facelib.resize_standard import *
from .facelib.face_swap import *
from .facelib.face_info import *
from pymongo import MongoClient
from flask_login import UserMixin, login_user
from werkzeug.security import generate_password_hash, check_password_hash
from concurrent.futures import ThreadPoolExecutor

db = MongoClient('127.0.0.1', 27017)
# db = MongoClient('192.168.1.106', 27017)
# db.model.authenticate('ppy', 'ppy233')

profile = db.user.profile
images = db.model.image

executor = ThreadPoolExecutor()

def CreateUser(userid, password, img):
    pw_hash = generate_password_hash(password)
    img = resize_standard(img)
    age, gender, shape = face_info(img)
    # print(age, gender, shape)
    profile.insert_one({'user': userid, 'pass': pw_hash, 'image': img, 'age': str(age), 'gender': str(gender), 'shape': str(shape)})

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
                executor.submit(CreateUser, self.userid, password, img)
                return 'Success'
        return 'NoImage'

    def login(self, password):
        hit = profile.find_one({'user': self.userid}, {'pass': 1})
        if hit and check_password_hash(hit['pass'], password):
            login_user(self)
            return 'Success'
        else:
            return 'Failure'

    def personal(self):
        face_info = profile.find_one({'user': self.userid}, {'user': 0, 'pass': 0, 'image': 0})
        try:
            age, gender, shape = face_info['age'], face_info['gender'], face_info['shape']
            index_list = images.find({'age': age, 'gender': gender, 'shape': shape}, {'index': 1}).limit(20)
        except:
            index_list = images.find({}, {'index': 1}).limit(20)
        return [{'key': i['index']} for i in index_list]

    def swap(self, index):
        user_face = profile.find_one({'user': self.userid}, {'image': 1})['image']
        model_hair = images.find_one({'index': index}, {'image': 1})
        if model_hair:
            return face_swap(model_hair['image'], user_face)
        abort(404)

# Import resources to ensure view is registered
from .resources import *
