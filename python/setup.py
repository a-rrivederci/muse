from setuptools import setup

setup(
    name="muse",
    version="0.0.1",
    description="muse audio reader",
    py_modules=["muse"],
    install_requires=["twisted","pillow","pytesseract","pytesseract","gtts","wand"]
)