#!/bin/bash
poetry config virtualenvs.in-project true
poetry install
pip install --user --upgrade nox
