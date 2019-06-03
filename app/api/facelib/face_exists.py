from numpy import frombuffer
import cv2
from dlib import get_frontal_face_detector

def face_exists(img):
	img = frombuffer(img, 'uint8')
	img = cv2.imdecode(img, cv2.IMREAD_COLOR)
	detector = get_frontal_face_detector()
	return len(detector(img, 1)) == 1
