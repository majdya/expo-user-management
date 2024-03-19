# Use React-Native comunity 
FROM reactnativecommunity/react-native-android

# Set the working directory inside the container 
WORKDIR /app

# Copy package.json and package-lock.json to the working directory 
COPY package*.json ./

# Install dependencies 
RUN npm install

# Copy the entire project to the working directory 
COPY . .

# Expose the default React Native development port
EXPOSE 8081
