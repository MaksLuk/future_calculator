from flask import Flask, request
from flask import render_template, send_from_directory
from parser import parse


app = Flask(__name__,
            template_folder='templates',
            static_url_path='',
            static_folder='static')


@app.route('/')
def index():
    return send_from_directory('static', 'index.html')


@app.route('/result', methods=['POST'])
def result():
    data = request.form.to_dict(flat=False)
    for i in data:
        data[i] = data[i][0]
    title, rows, text_data = parse(data)

    if not title:
        return '''<h1 align="center">Доступен диапазон в 14 дней от текущей даты и  минутные расклады текущего дня.</h1>'''
        
    return render_template(
        "result.html",
        title = title,
        table = rows,
        text_data = text_data
    )


if __name__ == '__main__':
    app.run(host='0.0.0.0')
