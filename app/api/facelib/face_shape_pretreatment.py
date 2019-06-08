import numpy as np
from .face_swap import transformation_from_points

def get_face_edge_points(points_array):
    return points_array[0:17, :]

def get_normalized_points_array(image_array):
    points_array= get_face_edge_points(image_array)
    cen = np.mean(points_array,axis=0)
    var= np.mean(np.multiply(points_array-cen,points_array-cen))
    return (points_array-cen)/np.sqrt(var)

def get_rotated_points_array(image_array, standard_face_points_array):
    p=get_normalized_points_array(image_array)
    M=transformation_from_points(standard_face_points_array,p)
    p=np.matmul(p,M[:2,:2])
    return p
