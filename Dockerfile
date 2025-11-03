FROM nginx:alpine
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./panel-admin.html /usr/share/nginx/html/panel-admin.html
EXPOSE 80