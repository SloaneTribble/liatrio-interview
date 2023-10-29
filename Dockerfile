# Use an official Node.js runtime as the base image
FROM node:14

# Copy all files from current directory to container
COPY . ./

# Install project dependencies
RUN npm install

# Expose the port that our Express app, app.js, is listening on 
EXPOSE 80

# Start Express app when the container runs
CMD ["node", "endpoint/app.js"]
