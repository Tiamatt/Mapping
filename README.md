# Mapping app
This [web application](https://Tiamatt.github.io/Mapping/)  is a lightweight visualization of randomly generated coordinates. You can specify number of coordinates you want to see on the map. Each coordinate marker has its own color based on the hemisphere it belongs to:
* Northeast - green
* Northwest - blue
* Southeast - red
* Southwest - yellow
This project is a part of assessment for MapAnything

## DEMO
Live DEMO [here](https://Tiamatt.github.io/Mapping/) <br>
<br>
![MappingScreenshot](/src/assets/images/app-screenshot.png?raw=true "Mapping screenshot")


## Features
* Fully responsive design
* Shared components
* OOP approach

## Built With
* Angular 6 (TypeScript)
* Angular CLI v6.2.3
* Angular Mapbox (v2.1.1)
* Angular Toaster Notifications (v1.0.4)
* Bootstrap v4.1.3
* Google fonts



## Getting Started
Note, this project requires Node.js installation.</br>
Follow the steps:
```bash
# step 1. Go to Node.js official website and install it
# check Node.js version (v8.12.0 or upper)
$ node –v
# check npm version (v6.4.1 or upper)
$ npm -v
# step 2. install Angular CLI
$ npm install -g @angular/cli
# check Angular CLI version (v6.2.3 or upper)
$ ng -v
# step 3. import project from github 
$ git clone https://github.com/Tiamatt/Mapping
$ cd Mapping
# step 4. install the project's dependencies (node_modules folder)
$ npm install
# step 5. run application
$ ng serve
# navigate to `http://localhost:4200/`
# app will automatically reload if you change any of the source files.