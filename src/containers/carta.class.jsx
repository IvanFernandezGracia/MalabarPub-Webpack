/** @jsx createElement */
import { JsXml } from "../libs/javascriptXml.js";
import $ from "jquery";
import { FilterMain } from "../classes/filterMain.class.jsx";
import { FilterCategory } from "../classes/filterCategory.class.jsx";
import { ItemList } from "../containers/itemList.class.jsx";

export class Carta extends JsXml {
  constructor(reference, components) {
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
      <section class={this._reference}>
        {getComponentContent(this._components)}
      </section>
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
      this._components = [];
      const listElement = await Promise.all([
        filterMainCreate(),
        filterCategoryCreate(),
        itemListCreate(),
      ]);
      await Promise.resolve(this.addComponents(listElement));
      await Promise.resolve(this.renderStructure());
      console.log("Se renderizaro estructura de CARTA");
      await Promise.resolve(this.renderComponents());
      return true;
    } catch (err) {
      console.log(err);
      // return false;
    }
  }
}

// Promises Carta Component Create
const filterMainCreate = () => {
  let filterMain = new FilterMain("filter-main", "COMIDA");
  return new Promise((resolve, reject) => {
    if (filterMain) {
      resolve(filterMain);
    } else {
      reject(`No se a creado elemento ${filterMain}`);
    }
  });
};

const filterCategoryCreate = () => {
  let filterCategory = new FilterCategory("filter-category");
  return new Promise((resolve, reject) => {
    if (filterCategory) {
      resolve(filterCategory);
    } else {
      reject(`No se a creado elemento ${filterMain}`);
    }
  });
};

const itemListCreate = () => {
  let itemList = new ItemList("item-list","Pizza");
  return new Promise((resolve, reject) => {
    if (itemList) {
      resolve(itemList);
    } else {
      reject(`No se a creado elemento ${itemList}`);
    }
  });
};
