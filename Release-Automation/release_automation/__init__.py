"""
Defines a Flask app and routes for a REST API.
"""
import os

from flask import Flask
from flask_restful import Api

from .config import Config
from .db import db
from .user import User


def create_app():
    """
    Create and configure an instance of the Flask application.

    Returns:
        The Flask application.
    """
    app = Flask(
        __name__,
        instance_relative_config=True,
        static_folder="static",
        static_url_path="/static",
    )

    app.config.from_object(Config)

    db.init_app(app)

    with app.app_context():
        db.create_all()

    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    api = Api(app)
    api.add_resource(User, "/user")

    return app
