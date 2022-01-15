/** @jsx createElement */
import { JsXml } from "../libs/javascriptXml.js";
import $ from "jquery";
import { Item } from "../classes/items.class.jsx";

export class ItemList extends JsXml {
  constructor(reference, components,categoryActive) {
    super();
    this._components = components;
    this._reference = reference;
    this._categoryActive = categoryActive;

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
    const ListItemHTML = (prop) => (
      <section class={this._reference}>
        {getComponentContent(this._components)}
      </section>
    );
    $(`.${this._reference}`).replaceWith(<ListItemHTML />);
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
        itemCreate(1),
        itemCreate(2),
        itemCreate(3)
      ]);
      await Promise.resolve(this.addComponents(listElement));
      await Promise.resolve(this.renderStructure());
      console.log("Se renderizaro estructura de ListItem");
      await Promise.resolve(this.renderComponents());
      return true;
    } catch (err) {
      console.log(err);
      // return false;
    }
  }
}

// Promises Carta Component Create
const itemCreate = (id) => {
  let item = new Item(`item-${id}`);
  return new Promise((resolve, reject) => {
    if (item) {
      resolve(item);
    } else {
      reject(`No se a creado elemento ${item}`);
    }
  });
};

