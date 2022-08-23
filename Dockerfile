# pull official base image
#  FROM node:stretch-slim AS build-step
FROM node:12 AS build-step
ARG GITHUB_TOKEN
# set working directory
WORKDIR /app
# add `/app/node_modules/.bin` to $PATH
COPY . .
# install app dependencies
# add app
RUN echo "Git token $GITHUB_TOKEN"
RUN echo "//npm.pkg.github.com/:_authToken=$GITHUB_TOKEN" >> .npmrc
RUN echo "@anydone:registry=https://npm.pkg.github.com/" >> .npmrc

RUN rm -rf package-lock.json
RUN npm install
RUN npm run build:dev
RUN ls -alht build
# start app
# server environment
FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/configfile.template
COPY --from=build-step /app/build /usr/share/nginx/html
RUN ls -alht /usr/share/nginx/html
ENV PORT 8080
ENV HOST 0.0.0.0
EXPOSE 8080
CMD sh -c "envsubst '\$PORT' < /etc/nginx/conf.d/configfile.template > /etc/nginx/conf.d/default.conf && nginx -g 'daemon off;'"
