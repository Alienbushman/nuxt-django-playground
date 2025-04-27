# nuxt-django-playground
A place to play around with nuxt and django


# Setup

To run for production run 
```bash
docker compose up
```
To recreate the container
```bash
docker-compose down
docker-compose build
docker-compose up
```

Running a dev container
```bash
docker-compose -f docker-compose_dev.yml up
```

Recreating the dev container
```bash
docker-compose -f docker-compose_dev.yml down
docker-compose -f docker-compose_dev.yml build
docker-compose -f docker-compose_dev.yml up
```