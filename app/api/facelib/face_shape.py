import numpy as np
import os
import json

FACE_NAME=[0, 1, 2, 3, 4, 5]

FACE_TYPE=len(FACE_NAME)
SUB_FACE_TYPE_MAN = 3
SUB_FACE_TYPE_WOMAN=5

if os.path.exists('./app/api/facelib/model/standard_face_points_man.json'):
    with open('./app/api/facelib/model/standard_face_points_man.json') as file:
        L=json.load(file)
        STANDARD_FACE_POINTS_MAN=[]
        for one_shape_list in L:
            D=[]
            for p in one_shape_list:
                p=np.matrix(p)
                D.append(p)
            STANDARD_FACE_POINTS_MAN.append(D)
else:
    print('model/standard_face_points_man.json not found')

if os.path.exists('./app/api/facelib/model/standard_face_points_woman.json'):
    with open('./app/api/facelib/model/standard_face_points_woman.json') as file:
        L=json.load(file)
        STANDARD_FACE_POINTS_WOMAN=[]
        for one_shape_list in L:
            D=[]
            for p in one_shape_list:
                p=np.matrix(p)
                D.append(p)
            STANDARD_FACE_POINTS_WOMAN.append(D)
else:
    print('model/standard_face_points_woman.json not found')

def face_shape(gender, points_array):
    d = []
    if gender == 0:
        for i in range(FACE_TYPE):
            for j in range(SUB_FACE_TYPE_MAN):
                temp=np.mean(np.square(STANDARD_FACE_POINTS_MAN[i][j]-points_array))
                d.append(temp)
        m=0
        for i in range(FACE_TYPE*SUB_FACE_TYPE_MAN):
            if(d[i]<d[m]):
                m=i
        return FACE_NAME[m//SUB_FACE_TYPE_MAN]
    else:
        for i in range(FACE_TYPE):
            for j in range(SUB_FACE_TYPE_WOMAN):
                temp=np.mean(np.square(STANDARD_FACE_POINTS_WOMAN[i][j]-points_array) )
                d.append(temp)
        m=0
        for i in range(FACE_TYPE*SUB_FACE_TYPE_WOMAN):
            if(d[i]<d[m]):
                m=i
        return FACE_NAME[m//SUB_FACE_TYPE_WOMAN]
