import requests
from bs4 import BeautifulSoup


headers = {
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
    'Accept-Encoding': 'gzip, deflate, br',
    'Accept-Language': 'ru-RU,ru;q=0.8,en-US;q=0.5,en;q=0.3',
    'Connection': 'keep-alive',
    'Content-Length': '514',
    'Content-Type': 'application/x-www-form-urlencoded',
    'Host': 'qmdj.blago888.com',
    'Origin': 'https://qmdj.blago888.com',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'same-origin',
    'Sec-Fetch-User': '?1',
    'TE': 'trailers',
    'Upgrade-Insecure-Requests': '1',
    'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:109.0) Gecko/20100101 Firefox/116.0'
}


data = {
    'judate': '2023-11-14',
    'jutime': '08:58',
    'jlongatude': '37.5128064',
    'jtz': 'Europe/Moscow',
    'jutype': '0',
    'jminyear': '00',
    'jtsyanmenanddishu': 'not_show',
    'jbz': 'not_show',
    'jgender': 'female',
    'jbz_name': '',
    'jhs': 'extended',
    'jlang': 'rus',
    'jdayinstart': 'default',
    'jdaystem': 'second_card',
    'predict': '0',
    'jurdate': '2023-11-14',
    'jurtime': '08:58',
    'jfontsize': '24',
    'jtabletype': 'text',
    'jouterstems': 'show',
    'jouterstems_and_branches': 'not_show',
    'jdishen': 'not_show',
    'jstartype': 'rot',
    'jinterp': 'not_show',
    'jbgcolor': '#ffffff',
    'jsti': '93.124.31.97'
}


def parse(data):
    response = requests.post('https://qmdj.blago888.com/cgi-bin/qm.fcgi', headers=headers, data=data)
    soup = BeautifulSoup(response.text, "html.parser")
    table = soup.p.font.font.font.b

    string_data = str(table).replace('<b>', '').replace('</b>', '')
    
    splited1 = string_data.split('<font color="#0000ff">┏━━━━━━┳━━━━━━┳━━━━━━┓</font>')
    raw_header = splited1[0].replace('<br/>', '').replace('>\u2002<', '><"> ><').strip().split('><')
    header = [i.replace('</font', '').replace('<font color="', '').split('">') for i in raw_header]
    if header[0][0] == 'В свободной версии доступен  диапазон ± 14 дней от текущей даты и  минутные расклады текущего дня.':
        return False, False, False

    header = [{'color': i[0], 'text': i[1].replace('>', '')} for i in header]
    
    splited2 = splited1[1].split('┣━━━━━━╋━━━━━━╋━━━━━━┫')
    row1 = get_row_mas(splited2[0])
    row2 = get_row_mas(splited2[1])
    row3 = get_row_mas(splited2[2].replace('┗━━━━━━┻━━━━━━┻━━━━━━┛', ''))

    rows = [row1, row2, row3]

    text_data = soup.table.text
    text_data = text_data.split('\n')
    text_data = [i.replace('Наш сайт расположен здесь:   https://qmdj.blago888.com', '').strip() for i in text_data if i]
    for i in range(len(text_data)):
        if 'Тип расклада' in text_data[i]:
            data = text_data[i].split('Тип')
            text_data[i] = data[0].strip()
            text_data.insert(i+1, ('Тип' + data[1]).strip())
            break
    return header, rows, text_data


def get_row_mas(row_data):
    raw_row = row_data.replace('\n', '').strip()
    raw_row = [i.removesuffix('<font color="#0000ff">┃</font>').removeprefix('<font color="#0000ff">┃</font>') for i in raw_row.split('<br/>')]
    if '' in raw_row:
        raw_row.remove('')
    if '<font color="#0000ff">' in raw_row:
        raw_row.remove('<font color="#0000ff">')
    if '</font>' in raw_row:
        raw_row.remove('</font>')
    raw_row = [i.split('┃') for i in raw_row]
    row = [[], [], []]
    for mas in raw_row:
        for i, val in enumerate(mas):
            row[i].append(val)
    for index1 in range(len(row)):
        for index2 in range(len(row[index1])):
            row[index1][index2] = row[index1][index2].replace('font color="', '').replace('">', ' ').replace('</font', '').replace('<font color="', '').split('><')
            row[index1][index2][0] = row[index1][index2][0].replace('<', '')
            if '' in row[index1][index2]:
                row[index1][index2].remove('')
            row[index1][index2] = [i.split(' ') for i in row[index1][index2]]
            row[index1][index2] = [{'color': i[0], 'text': i[1].replace('>', '')} for i in row[index1][index2]]
    return row


if __name__ == '__main__':
    print(parse(data))

