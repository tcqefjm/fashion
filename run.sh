sudo systemctl start nginx
gunicorn -w 4 -b :5000 app:app
