/** @jsx createElement */
import { JsXml } from "../libs/javascriptXml.js";
import $ from "jquery";

export class Maps extends JsXml {
  constructor(reference) {
    super();
    this._reference = reference;
  }

  render() {
    const createElement = super.createElement;

    const MapslHTML = (prop) => (
      <div class="contenedor">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1528.163537725983!2d-70.73296560365736!3d-34.17151699062336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x966343406b531c41%3A0x6dfc5d9a07f49bd3!2sPub%20Malabar!5e0!3m2!1ses!2scl!4v1635966842237!5m2!1ses!2scl"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    );
    $("." + this._reference).empty()
    $("." + this._reference).append(<MapslHTML />);
  }
}
