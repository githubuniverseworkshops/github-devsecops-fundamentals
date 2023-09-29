FROM python:3.11-slim-buster

ENV POETRY_VERSION=1.5.1
RUN pip install --no-cache-dir "poetry==$POETRY_VERSION"

# Create app directory
WORKDIR /usr/src/app/github_devsecops_fundamentals

# Copy app source code
COPY . .

# Install app dependencies
RUN poetry install --no-root --no-ansi --without dev

# Expose the mkdocs port
EXPOSE 8000

# Run the app
CMD ["poetry", "run", "mkdocs", "serve"]
