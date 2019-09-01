# use official nodejs runtime as parent image 
FROM node:8.16.1-jessie

# set working directory to /app
WORKDIR /app

# copy all needed file in /app
COPY . .

# install all pakages
RUN npm install --production

# make port 1000 exposed to outside
EXPOSE 1000

# define environment variable
ENV NAME = pm_env

# Run index.js when the container launches
CMD ["node", "index.js"]
