import os
from flask import Flask, current_app, send_file

from .api import api_bp
from .client import client_bp

app = Flask(__name__, static_folder = '../dist/static')
app.register_blueprint(api_bp)

from flask_cors import CORS

CORS(app)

from .config import Config
app.logger.info('>>> {}'.format(Config.FLASK_ENV))

from .security import *

@app.route('/')
def index_client():
    dist_dir = current_app.config['DIST_DIR']
    entry = os.path.join(dist_dir, 'index.html')
    return send_file(entry)
