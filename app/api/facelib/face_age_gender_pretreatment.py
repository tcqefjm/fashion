from numpy import array

def face_age_gender_pretreatment(img, rects, fa):
    aligned_images = []
    rect_nums=len(rects)
    if (rect_nums == 0):
        aligned_images.append(img)
    else:
        for i in range(rect_nums):
            aligned_image = fa.align(img, img, rects[i])
            aligned_images.append(aligned_image)
    return array(aligned_images)
