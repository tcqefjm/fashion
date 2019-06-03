from numpy import frombuffer
import cv2

STANDARD_WIDTH = 300

def resize_standard(img):
	img = frombuffer(img, 'uint8')
	img = cv2.imdecode(img, cv2.IMREAD_COLOR)
	width = STANDARD_WIDTH
	height = img.shape[0] * STANDARD_WIDTH // img.shape[1]
	output = cv2.resize(img, (width, height), interpolation = cv2.INTER_CUBIC)
	return cv2.imencode('.jpeg', output)[1].tostring()
