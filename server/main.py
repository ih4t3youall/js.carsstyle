from flask import Flask,send_file
from flask_cors import CORS
from os import listdir
from os.path import isfile, join
from flask import Response
from flask import request
import json

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})
images_path='/home/hate/Pictures/the last of us/'

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/api/get_image')
def get_image():
    image_name = request.args.get('imageName')
    if image_name is None:
        return "404"

    searched_image = search_image(image_name)
    if searched_image is None:
        return 'image not found'
    else:
        filename = images_path+searched_image
    return send_file(filename, mimetype='image/gif')

@app.route('/api/images_to_load')
def images_to_load():
    only_files = get_images_from_disk()
    print('files loaded',only_files)
    return Response(json.dumps(only_files),  mimetype='application/json')

def get_images_from_disk():
    return  [f for f in listdir(images_path) if isfile(join(images_path, f))]

def search_image(name):
    images = get_images_from_disk()
    image_name = next(filter(lambda x: x == name,images),None)
    print('image found:',image_name)
    return image_name

if __name__ == '__main__':
    app.run()

