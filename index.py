#Flask es la clase principal que usamos para crear 
from flask import Flask, render_template 

#En esta línea, creamos una instancia de la aplicación Flask. 
app = Flask(__name__)

#Esta es una decoración de función que establece una ruta para la función 
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/conga')
def conga():
    return render_template('conga.html')

#Esta línea verifica si el script se está ejecutando directamente
if __name__ == '__main__':
    app.run()
