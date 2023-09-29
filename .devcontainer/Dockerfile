FROM --platform=linux/amd64 mcr.microsoft.com/devcontainers/universal:2

LABEL org.opencontainers.image.authors="igwejk@github.com"
LABEL org.opencontainers.image.source="https://github.com/githubuniverseworkshops/github-devsecops-fundamentals"

COPY .devcontainer/first-run-notice.txt /tmp/scripts/
RUN mkdir -p "/usr/local/etc/vscode-dev-containers/"    \
    && mv -f /tmp/scripts/first-run-notice.txt /usr/local/etc/vscode-dev-containers/

ENV REQUIREMENTS_TXT=/tmp/pip-tmp/requirements.txt
COPY requirements.txt ${REQUIREMENTS_TXT}
