FROM mcr.microsoft.com/devcontainers/python:3

LABEL org.opencontainers.image.authors="igwejk@github.com"
LABEL org.opencontainers.image.source="https://github.com/githubuniverseworkshops/github-devsecops-fundamentals"

COPY requirements.txt /tmp/pip-tmp/
RUN pip3 --disable-pip-version-check --no-cache-dir install --requirement /tmp/pip-tmp/requirements.txt && rm -rf /tmp/pip-tmp
