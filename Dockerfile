FROM node:alpine

RUN echo '🐳 => Building Order Price...'

# Create app directory
WORKDIR /usr/src/app

# set our node environment, either development or production
# defaults to production, compose overrides this to development on build and run
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json /usr/src/app

RUN npm cache verify && \
npm install -g --only=production

ENV PATH /opt/node_modules/.bin:$PATH

# Bundle app source
COPY . /usr/src/app

ARG PORT=1800
ENV PORT $PORT
EXPOSE $PORT

CMD [ "npm", "start" ]
RUN echo '🐳 => Order Price container built! ✅'
