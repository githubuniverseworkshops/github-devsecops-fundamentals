"""A user resource for the GitHub User App."""
from flask import jsonify, request
from flask_restful import Resource


class User(Resource):
    """
    A user object
    """

    def get(self):
        return jsonify({"message": "Hello, World!"})

    def post(self):
        data = request.get_json()
        return jsonify({"message": "Hello, World!"})
