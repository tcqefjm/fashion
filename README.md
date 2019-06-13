# fashion
## Install
* First clone this repository

	```
	$ git clone https://github.com/tcqefjm/fashion
	```

* Install cmake, boost(for compiling), and nginx...

	```
	$ apt-get install cmake libboost-all-dev libgtk-3-dev nginx
	```

* Install Python dependencies

	```
	$ pip install -r requirements.txt
	```

* Install JS dependencies(You can skip this part)

	```
	$ yarn install
	```

* Start the server

	```
	$ ./run.sh
	```

* Alternately, simply deploy the Docker image

	```
	$ docker load -i fashion.tar
	$ docker run -d --name fashion_server fashion
	```

* To build your own image(but first put the models in /app/api/facelib/model):

	```
	$ docker build -t fashion .
	```

## Database
* Current address

	```
	127.0.0.1:27017
	```