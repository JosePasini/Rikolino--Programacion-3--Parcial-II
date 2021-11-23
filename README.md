# Programacion III - Parcial II

# Integrantes: Franco Baldasso, Mariano Martín, Martín Ramirez,  José Pasini.


1. Descargar el proyecto o clonarlo con el comando: git clone https://github.com/JosePasini/Rikolino--Programacion-3--Parcial-II

2. Abrir XAMPP y prender MySQL.

  ![image](https://user-images.githubusercontent.com/65823769/143047961-e2402ab8-297d-40d0-abff-83a3f68fd248.png)


3. Abrir algún gestor de base de datos (en mi caso SqlYOG) y crear una base de datos (en mi caso rikolino_bd_prueba)

  ![image](https://user-images.githubusercontent.com/65823769/143048132-e77afd14-f0f1-434c-a8e6-adcc8633691f.png)


4. Abrir la carpeta de todo el código en Visual Studio Code

5. En la carpeta raíz (src) crear el archivo ".sequelizerc" y agregar esto:

	const path = require('path')

	module.exports = {
    		config: 
        	path.resolve('./src/database/config', 'config.js'),
        	'models-path': path.resolve('./src/database/models'),
        	'seeders-path': path.resolve('./src/database/seeders'),
        	'migrations-path': path.resolve('./src/database/migrations'),
	}

  ![image](https://user-images.githubusercontent.com/65823769/143048301-85bfdcc3-6dd3-4a78-8011-b2ea45ed1095.png)

En la carpeta raíz agregar un archivo llamado ".env" y agregar esto:

	DB_USERNAME=root
	DB_PASSWORD=
	DB_HOST=localhost
	DB_DATABASE=rikolino_bd_prueba
	DB_PORT=3306
	DB_DIALECT=mysql

 
![image](https://user-images.githubusercontent.com/65823769/143052449-32cba3be-2b75-4a84-8985-98a50e6a4323.png)	

Entrar a la carpeta: "Node Rikolino/src/database/config/config.js" y cambiar las configuraciones en base a tus configuraciones.

  ![image](https://user-images.githubusercontent.com/65823769/143048636-d8d49e84-b5d3-4ce4-baf3-6225dc8d9e26.png)
  
Abrir la terminal y parado en la carpeta "src" agregar el comando: "npm install"

  ![image](https://user-images.githubusercontent.com/65823769/143048950-7053e4c5-afac-4815-8244-f3fbd0a827df.png)
  
Una vez instaladas las dependencias agregar dentro de database el comando "npx sequelize db:migrate"

  ![image](https://user-images.githubusercontent.com/65823769/143049093-e4e053e2-2ea5-4e4f-b50b-8fce5af436b1.png)

Revisar en el gestor de base de datos si se crearon las tablas correspondientes:

  ![image](https://user-images.githubusercontent.com/65823769/143049246-10807784-f617-4eec-8faa-3152f1bf9bc6.png)

Diagrama UML realizado en WorkBench:

  ![22222](https://user-images.githubusercontent.com/65823769/143049321-332ee0dc-b055-449f-a5f7-8a51704dc5f7.jpeg)  



