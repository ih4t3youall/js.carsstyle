from flask import Flask,send_file
from flask_cors import CORS
from os import listdir
from os.path import isfile, join
from flask import Response
import json

app = Flask(__name__)

cors = CORS(app, resources={r"/api/*": {"origins": "*"}})


@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/api/get_image')
def get_image():
    filename = 'images/ellie_blood_guitar.jpg'
    return send_file(filename, mimetype='image/gif')

@app.route('/api/images_to_load')
def images_to_load():
    mypath = '/home/hate/Pictures/the last of us'
    only_files = [f for f in listdir(mypath) if isfile(join(mypath, f))]
    print(only_files)
    return Response(json.dumps(only_files),  mimetype='application/json')
    



if __name__ == '__main__':
    app.run()

