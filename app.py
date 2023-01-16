from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index():        
    return render_template('index.html')

@app.route('/smile')
def smile():
    return render_template("smile.html")

@app.route('/dots')
def dots():
    return render_template("dots.html")

@app.route('/404')
def error():
    return render_template('404.html')

@app.route('/clock')
def clock():
    return render_template('clock.html')

if __name__ == '__main__':
    app.run(debug=True, host='192.168.31.179', port=5050)
    app.run(debug=True, host='0.0.0.0', port=5050)