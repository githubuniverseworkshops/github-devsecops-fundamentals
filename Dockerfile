FROM python:3.12.0-alpine

# Path: /app
WORKDIR /app

# Path: /app/requirements.txt
COPY requirements.txt .
COPY mkdocs.yml .
COPY docs/ ./docs

# Path: /app/requirements.txt
RUN pip install -r requirements.txt

EXPOSE 8080

CMD ["mkdocs", "serve", "--dev-addr=127.0.0.1:8080"]
