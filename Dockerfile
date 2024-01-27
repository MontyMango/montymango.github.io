FROM nginx:latest

COPY ./index.html /usr/share/nginx/html
COPY ./webpages/ /usr/share/nginx/html/webpages
COPY ./JavaScript/ /usr/share/nginx/html/JavaScript
COPY ./css/ /usr/share/nginx/html/css
COPY ./assets/ /usr/share/nginx/html/assets

# THEN DO:
# docker build -t montymango_portfolio .
# docker run -d --name mm_portfolio -p 8080:80 montymango_portfolio
