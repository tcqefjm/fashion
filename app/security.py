from flask_login import LoginManager
from app import app
from .api import User

login_manager = LoginManager()
login_manager.init_app(app)

@login_manager.user_loader
def load_user(userid):
    return User(userid)
