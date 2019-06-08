import tensorflow as tf
from .inception_resnet_v1 import inference

model_path='./app/api/facelib/model'

def face_age_gender(aligned_images):
    with tf.Graph().as_default():
        sess = tf.Session()
        images_pl = tf.placeholder(tf.float32, shape=[None, 160, 160, 3], name='input_image')
        images = tf.map_fn(lambda frame: tf.reverse_v2(frame, [-1]), images_pl) #BGR TO RGB
        images_norm = tf.map_fn(lambda frame: tf.image.per_image_standardization(frame), images)
        train_mode = tf.placeholder(tf.bool)
        age_logits, gender_logits, _ = inference(images_norm, keep_probability=0.8,
                                                                    phase_train=train_mode,
                                                                    weight_decay=1e-5)
        gender = tf.argmax(tf.nn.softmax(gender_logits), 1)
        age_ = tf.cast(tf.constant([i for i in range(0, 101)]), tf.float32)
        age = tf.reduce_sum(tf.multiply(tf.nn.softmax(age_logits), age_), axis=1)
        init_op = tf.group(tf.global_variables_initializer(),
                           tf.local_variables_initializer())
        sess.run(init_op)
        saver = tf.train.Saver()
        ckpt = tf.train.get_checkpoint_state(model_path)
        if ckpt and ckpt.model_checkpoint_path:
            saver.restore(sess, ckpt.model_checkpoint_path)
        else:
            pass
        age_temp, gender=sess.run([age, gender], feed_dict={images_pl: aligned_images, train_mode: False})
        if age_temp[0]<12:
            age=0   #yound
        elif age_temp[0]<50:
            age=1
        else:
            age=2   #old
        return age, gender[0]   #1 for male and 0 for female
