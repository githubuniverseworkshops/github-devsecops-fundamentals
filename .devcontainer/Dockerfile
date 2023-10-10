FROM --platform=linux/amd64 mcr.microsoft.com/devcontainers/python:3

WORKDIR /workspace

COPY requirements*.txt .

RUN python -m pip install --no-cache-dir --upgrade --requirement requirements.ci.txt