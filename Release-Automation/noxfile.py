import nox


@nox.session
def format(session):
    session.install("poetry")
    session.run("poetry", "install")
    session.run(
        "poetry",
        "run",
        "black",
        "release_automation",
        "--check",
        "--extend-exclude",
        "__pycache__",
    )


@nox.session
def lint(session):
    session.install("poetry")
    session.run("poetry", "install")
    session.run(
        "poetry",
        "run",
        "pylint",
        "release_automation",
        "--recursive",
        "y",
        "--rcfile",
        "pyproject.toml",
        "--ignore",
        "__pycache__",
    )


@nox.session
def test(session):
    session.install("poetry")
    session.run("poetry", "install")
    session.run(
        "poetry",
        "run",
        "coverage",
        "run",
        "-m",
        "pytest",
        "--junit-xml",
        "reports/pytest.xml",
    )
    session.run("poetry", "run", "coverage", "report", "-m")
    session.run("poetry", "run", "coverage-badge", "-f", "-o", "coverage/badge.svg")
