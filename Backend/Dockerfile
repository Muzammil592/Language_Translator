# Step 1: Base image set karein
FROM node:18-alpine

# Step 2: Container ke andar working directory banayein
WORKDIR /app

# Step 3: Package files copy karein aur layers cache karne ke liye install karein
COPY package*.json ./
RUN npm install

# Step 4: Baqi saara source code container mein copy karein
COPY . .

# Step 5: Backend port expose karein
EXPOSE 5000

# Step 6: Server run karne ki command
CMD ["node", "server.js"]