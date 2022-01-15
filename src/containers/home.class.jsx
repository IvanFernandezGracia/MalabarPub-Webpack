/** @jsx createElement */
import { JsXml } from "../libs/javascriptXml.js";
import $ from "jquery";
import { Carousel } from "../classes/carousel.class.jsx";
import { CategoryMain } from "../classes/categorymain.class.jsx";
import { SocialButtoms } from "../classes/socialbuttoms.class.jsx";
import { Maps } from "../classes/maps.class.jsx";
import { LineSection } from "../classes/linesection.class.jsx";

export class Home extends JsXml {
  constructor(reference,components) {
    super();
    this._components = components;
    this._reference = reference;
  }

  addComponent(component) {
    this._components.push(component);
  }

  addComponents(components) {
    this._components = [...components];
  }


  renderStructure() {
    const createElement = super.createElement;
    const getComponentContent = (components) => {
      let content = [];
      for (let i = 0; i < components.length; i++) {
        const reference = components[i]._reference;
        content.push(
          <section class={reference}>
            <div class="contenedor-load">
              <div class="progress circular"></div>
            </div>
          </section>
        );
      }
      return content;
    };
    const HomeHTML = (prop) => (
      <section class={this._reference}>{getComponentContent(this._components)}</section>
    );
    $("main").append(<HomeHTML />);
  }

  renderComponents() {
    for (let i = 0; i < this._components.length; i++) {
      Promise.resolve(this._components[i].render());
    }
  }

  async render() {
    try {
      this._components=[];
      const listElement = await Promise.all([
        carouselElementCreate(),
        lineCartaCreate(),
        categoryMainElementCreate(),
        lineSocialButtomsCreate(),
        SocialButtomsCreate(),
        lineMapsCreate(),
        MapsCreate()
      ]);
      await Promise.resolve(this.addComponents(listElement));
      await Promise.resolve(this.renderStructure());
      console.log("Se renderizaro estructura de HOME")
      await Promise.resolve(this.renderComponents());
      return true;
    } catch (err) {
      console.log(err);
      // return false;
    }
  }
}

// Promises Home Component Create
const carouselElementCreate = () => {
  return new Promise((resolve, reject) => {
    let carouselElement = new Carousel("carousel-home");
    if (carouselElement) {
      resolve(carouselElement);
    } else {
      reject(`No se a creado elemento ${carouselElement}`);
    }
  });
};
const lineCartaCreate = () => {
  let lineCarta = new LineSection("line-carta", "Carta");
  return new Promise((resolve, reject) => {
    if (lineCarta) {
      resolve(lineCarta);
    } else {
      reject(`No se a creado elemento ${lineCarta}`);
    }
  });
};
const categoryMainElementCreate = () => {
  return new Promise((resolve, reject) => {
    let categoryMainElement = new CategoryMain("category-main");
    if (categoryMainElement) {
      resolve(categoryMainElement);
    } else {
      reject(`No se a creado elemento ${categoryMainElement}`);
    }
  });
};
const lineSocialButtomsCreate = () => {
  let lineSocialButtoms = new LineSection("line-rrhh", "Siguenos!");
  return new Promise((resolve, reject) => {
    if (lineSocialButtoms) {
      resolve(lineSocialButtoms);
    } else {
      reject(`No se a creado elemento ${lineSocialButtoms}`);
    }
  });
};
const SocialButtomsCreate = () => {
  let socialButtoms =new SocialButtoms("social-buttoms");
  return new Promise((resolve, reject) => {
    if (socialButtoms) {
      resolve(socialButtoms);
    } else {
      reject(`No se a creado elemento ${socialButtoms}`);
    }
  });
};
const lineMapsCreate = () => {
  let lineMaps = new LineSection("line-maps", "Ubicacion");
  return new Promise((resolve, reject) => {
    if (lineMaps) {
      resolve(lineMaps);
    } else {
      reject(`No se a creado elemento ${lineMaps}`);
    }
  });
};
const MapsCreate = () => {
  let maps =new Maps("ubicacion-mapa");
  return new Promise((resolve, reject) => {
    if (maps) {
      resolve(maps);
    } else {
      reject(`No se a creado elemento ${maps}`);
    }
  });
};
