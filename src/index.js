// Configuration
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/brands";
import "../node_modules/@material/button/dist/mdc.button.min.css"
import "./styles.css";
import { ajax } from "./libs/ajax/ajax-utils.js";
import $ from "jquery";
import jsonItems from "./data/items.json";
import jsonCategory from "./data/category.json";
import { ItemInterface } from "./interface/item.interface";
// import { JsXml } from "./libs/javascriptXml.jsx";

/// Component
import { BottomNav } from "./classes/bottomNav.class.jsx";
import { Header } from "./classes/header.class.jsx";

$(function () {
  let home;
  let carta;
  let compras;
  let pages= [home , carta , compras]

  let header;
  renderHeader().then((value) => {
    header = value;
    header.render();
    if ($(".navbar").length){
      console.log("Se creo Header")
    }else{
      console.log("NO se creo Header")
    }
  });

  let nav;
  renderNav(pages).then((value) => {
    nav = value;
    nav.render();
    if ($(".nav").length){
      console.log("Se creo Botones Navegacion")
    }else{
      console.log("NO se creo Botones Navegacion")
    }
  });

  setTimeout(() => {
    // console.log(pages[0]._components[1]._text);
    // pages[0]._components[1]._text="WEAS"
    // console.log(pages[0]._components[1]._text)
    // pages[0]._components[1].render()

    // // pages[0].render();

    // console.log("pages",pages)
    // console.log(pages[1]._components[2])
  }, 2000);
});

// Promises
const renderNav = (pages) => {
  return new Promise((resolve, reject) => {
    let navegacion = new BottomNav(pages);
    if (navegacion) {
      resolve(navegacion);
    } else {
      reject(`No se a creado ${navegacion}`);
    }
  });
};
const renderHeader = () => {
  return new Promise((resolve, reject) => {
    let header = new Header();
    if (header) {
      resolve(header);
    } else {
      reject(`No se a creado ${header}`);
    }
  });
};


