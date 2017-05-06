from flask import Flask, request, session, g, redirect, url_for, abort, render_template, flash


app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/committees')
def committees():
    return render_template('committees.html')

@app.route('/documents')
def documents():
    return render_template('documents.html')

@app.route('/contact')
def contact():
    return render_template('contact.html')