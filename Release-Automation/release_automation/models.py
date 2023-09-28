"""
Defines the data models for the application.
"""

from release_automation.db import db


# pylint: disable=too-few-public-methods
class User(db.Model):
    """
    Represents a user in the application.
    """

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)

    def __repr__(self):
        return f"<User {self.username}>"
