/** @jsx createElement */
import { JsXml } from "../libs/javascriptXml.js";
import $ from "jquery";
import burgerPhoto from '../assets/eFWRUuR.jpg';

export class Item extends JsXml {
  constructor(reference, texto) {
    super();
    this._reference = reference;
    this._text = texto;
  }

  render() {
    const createElement = super.createElement;


    const ItemlHTML = (prop) => (
      <div class="food-card">
        <div class="food-card_img">
          <img src={burgerPhoto} alt="" />
        </div>
        <div class="food-card_content">

          <div class="food-card_title-section">
            <a href="#!" class="food-card_title">
              Double Cheese Potato Burger
            </a>
          </div>
          <div class="food-card_bottom-section">
            <div class="space-between">
              <div class="descripcion-corta">
                <span class="fa fa-fire"></span> 200gr de carne de vacuno, queso cheddar y tocino
              </div>
            </div>
            <hr/>
            <div class="space-between">
              <div class="food-card_price">
                <span>5.99$</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

    $("." + this._reference).empty();
    $("." + this._reference).append(<ItemlHTML text="Item" />);
  }
}
