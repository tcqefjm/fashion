from dlib import get_frontal_face_detector
from dlib import shape_predictor
from imutils.face_utils import FaceAligner
import numpy as np
import cv2
from .face_age_gender_pretreatment import face_age_gender_pretreatment
from .face_age_gender import face_age_gender
from .face_shape_pretreatment import get_normalized_points_array, get_rotated_points_array
from .face_shape import face_shape

PREDICTOR_PATH = "./app/api/facelib/model/shape_predictor_68_face_landmarks.dat"
standard_face_path='./app/api/facelib/model/standard_face.jpg'
detector = get_frontal_face_detector()
predictor = shape_predictor(PREDICTOR_PATH)

def face_info(img):
    image = np.frombuffer(img, 'uint8')
    image = cv2.imdecode(image, cv2.IMREAD_COLOR)

    fa = FaceAligner(predictor, desiredFaceWidth=160)

    rect = detector(image, 1)
    shape = predictor(image, rect[0])
    landmark = np.matrix([[p.x, p.y] for p in shape.parts()])

    standard_rect = detector(cv2.imread(standard_face_path), 1)
    standard_shape = predictor(cv2.imread(standard_face_path), standard_rect[0])
    standard_landmark = np.matrix([[p.x, p.y] for p in standard_shape.parts()])

    aligned_images = face_age_gender_pretreatment(image, rect, fa)
    age, gender = face_age_gender(aligned_images)

    standard_face_points_array = get_normalized_points_array(standard_landmark)
    img_array=get_rotated_points_array(landmark, standard_face_points_array)
    shape=face_shape(gender, img_array)
    return age, gender, shape

# age   0:0-12   1:13-50   2:>50
# gender   0:female   1:male
# shape   [0, 1, 2, 3, 4, 5]:['鹅蛋','方脸','心形','圆脸','长脸','钻石']
