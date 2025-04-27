FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

COPY requirements.txt .
RUN pip install --upgrade pip \
    && pip install gunicorn \
    && pip install -r requirements.txt

COPY . .

# Run as a non-root user inside containers
RUN addgroup --system appgroup && adduser --system --ingroup appgroup appuser

USER appuser

EXPOSE 8000

CMD ["gunicorn", "django_gateway.wsgi:application", "--bind", "0.0.0.0:8000"]
