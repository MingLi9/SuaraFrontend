FROM node:16-alpine as build

WORKDIR /app

COPY . /app/

RUN npm install
RUN npm install react-scripts@3.0.1 -g
RUN npm run build

FROM nginx:1.21.5-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]