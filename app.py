from flask import Flask, render_template, request, url_for, redirect, jsonify
import json
from flask_mysqldb import MySQL
from flask_cors import CORS
app = Flask(__name__)
CORS(app)
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'Registration'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)
data=''
@app.route('/', methods=['GET','POST'])
def RegisterFirst():
    if request.method == 'POST':
        data  = request.data
        result  = json.loads(data)
        Name = result['username']
        Email = result['email']
        password = result['password']
        cur = mysql.connection.cursor()
        cur.execute('''Insert into user_registration values(NULL,%s,%s,%s)''',(Name,Email,password))
        mysql.connection.commit()
        cur.close()
        return jsonify('hello')

"""
@app.route('/', methods=['GET','POST'])
def Register():
    if request.method == 'POST':
        # Fetch Form Data
        userdetails = request.form
        Name = userdetails['Name']
        Email = userdetails['Email']
        Phone = userdetails['Phone']
        cur = mysql.connection.cursor()
        cur.execute('''Insert into user_registration values(NULL,%s,%s,%s)''',(Name,Email,Phone))
        mysql.connection.commit()
        cur.close()
        return redirect('/home')
    
    return render_template('Register.html')


@app.route('/home')
def home():
    cur = mysql.connection.cursor()
    resultValues = cur.execute(" Select * from user_registration ")
    if resultValues > 0:
        userDetails = cur.fetchall()
        return render_template('home.html',userDetails=userDetails)
"""

if __name__ == '__main__':
    app.run(debug=True)