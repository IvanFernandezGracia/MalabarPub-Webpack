/** @jsx createElement */
import { JsXml } from "../libs/javascriptXml.js";
import $ from "jquery";

export class SocialButtoms extends JsXml {
  constructor(reference) {
    super();
    this._reference = reference;
  }

  render() {
    const createElement = super.createElement;

    const SocialButtomsHTML = (prop) => (
      <div class="contenedor">
        <div class="">
          <ul>
            <li>
              <span class="social-icon social-facebook">
                <i class="fab fa-facebook"></i>
              </span>
            </li>
            <li>
              <span class="social-icon social-instagram">
                <i class="fab fa-instagram"></i>
              </span>
            </li>
            <li>
              <span class="social-icon social-whatsapp">
                <i class="fab fa-whatsapp"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    );
    $("." + this._reference).empty()
    $("." + this._reference).append(<SocialButtomsHTML />);
  }
}
