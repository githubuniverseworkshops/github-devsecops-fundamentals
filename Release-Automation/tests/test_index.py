"""Unit tests for the landing page"""


def test_index(client):
    response = client.get("/")

    assert b"Fast Track: Python" in response.data
