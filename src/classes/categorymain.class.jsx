/** @jsx createElement */
import { JsXml } from "../libs/javascriptXml.js";
import $ from "jquery";
import comida from '../assets/icon/main-category/comida.png';
import bar from '../assets/icon/main-category/martini.png';

export class CategoryMain extends JsXml {
  constructor(reference) {
    super();
    this._reference = reference;
  }

  render() {
    const createElement = super.createElement;
    const CategoryMainHTML = (prop) => (
      <div class="contenedor">
        <div class="row justify-content-center">
          <div class="col-6">
            <div class="status-card">
              <div class="profile-pic">
                <div class="bg-icon-category-main">
                  <img src={comida} alt="" />
                </div>
              </div>
              <p class="username">Comida</p>
            </div>
          </div>
          <div class="col-6">
            <div class="status-card">
              <div class="profile-pic">
                <div class="bg-icon-category-main">
                  <img src={bar} alt="" />
                </div>
              </div>
              <p class="username">Bar</p>
            </div>
          </div>
        </div>
      </div>
    );
    $("." + this._reference).empty()
    $("." + this._reference).append(<CategoryMainHTML />);
  }
}
