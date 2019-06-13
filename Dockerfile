FROM python:slim
COPY ./ /fashion
WORKDIR /fashion
RUN apt-get update && \
	apt-get install -y cmake libboost-all-dev libgtk-3-dev nginx && \
	pip install -r requirements.txt && \
	mv ./nginx/sites-available/default /etc/nginx/sites-available/default && \
	service nginx start
EXPOSE 80
CMD ["gunicorn", "-w", "4", "-b", ":5000", "app:app"]