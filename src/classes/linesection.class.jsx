/** @jsx createElement */
import { JsXml } from "../libs/javascriptXml.js";
import $ from "jquery";

export class LineSection extends JsXml {
  constructor(reference, texto) {
    super();
    this._reference = reference;
    this._text = texto;
  }

  render() {
    const createElement = super.createElement;

    const LineSectionlHTML = (prop) => (
      <p class="my-element decorative-line">{prop.text}</p>
    );
    
    $("." + this._reference).empty();
    $("." + this._reference).append(
      <LineSectionlHTML text={this._text} />
    );
  }
}
