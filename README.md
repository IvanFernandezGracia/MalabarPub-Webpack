# Webpack Starter

Este es el proyecto inicial para crear aplicaciones utilizando webpack.

### Notas:
Recuerden reconstruir los módulos de Node
```
npm install
```

Y para construir el build, recueren:
```
npm run build
```
FOLDERS: 

class: Cada componente reutilizabe se crea a partir de una Clase. Se guardan estados y se rendferiza dentro del archivo JS
interface: clases simples que solo contienen atributo para verificar que lleguen todos los datos de la base de datos
css: styles generador a partir de SASS
data: Base de datos de prueba en base a JSON y Firebase
libs: otros archivos js, principalemnte librerias
models: data modelos de datos, como interfaces en formato JSON
sass: estilos separados por componentes de la carpeta componente
service: peticines http, firebase, ajax, etc
index.html: navbar, container tipo paginas SPA y footer
index.js: controlador de paginas , se limita solo a links de navmenu e inyecta componentes