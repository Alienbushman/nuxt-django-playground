FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

ENV NUXT_HOST=0.0.0.0
ENV NODE_ENV=development

HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/ || exit 1

# For Nuxt 3, it's recommended to use the following command instead
CMD ["npm", "run", "dev", "--", "-o"]