#COPY node_modules ${APP_ROOT}
#COPY static ${APP_ROOT}
#COPY .nuxt ${APP_ROOT}
#COPY package.json ${APP_ROOT}
#COPY nuxt.config.js ${APP_ROOT}

FROM node:15.1.0
ENV APP_ROOT /web
ENV NODE_ENV production

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN npm ci

EXPOSE 3000

CMD ["npm", "run", "start"]