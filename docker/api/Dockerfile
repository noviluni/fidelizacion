FROM python:alpine

RUN pip3 install hug -U
RUN pip3 install gunicorn

COPY ./api_src /app
WORKDIR /app
EXPOSE 8000
CMD gunicorn --reload --bind=0.0.0.0:8000 api:__hug_wsgi__

