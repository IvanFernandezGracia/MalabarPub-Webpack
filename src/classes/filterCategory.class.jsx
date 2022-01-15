/** @jsx createElement */
import { JsXml } from "../libs/javascriptXml.js";
import $ from "jquery";
import filterimg from '../assets/img/logo/logo1.png';

export class FilterCategory extends JsXml {
  constructor(reference) {
    super();
    this._reference = reference;
  }

  render() {
    const createElement = super.createElement;

    const FilterCategoryHTML = (prop) => (
      <div class="wrapper">
        <div class="status-wrapper">
          <div class="status-card">
            <div class="profile-pic">
              <img src={filterimg} alt="" />
            </div>
            <p class="username">Pizza</p>
          </div>
          <div class="status-card">
            <div class="profile-pic">
              <img src={filterimg} alt="" />
            </div>
            <p class="username">Sushi</p>
          </div>
          <div class="status-card">
            <div class="profile-pic">
              <img src={filterimg} alt="" />
            </div>
            <p class="username">Burger</p>
          </div>
          <div class="status-card">
            <div class="profile-pic">
                <img src={filterimg} alt="" />
            </div>
            <p class="username">Pizza</p>
          </div>
          <div class="status-card">
            <div class="profile-pic">
              <img src={filterimg} alt="" />
            </div>
            <p class="username">Sushi</p>
          </div>
          <div class="status-card">
            <div class="profile-pic">
              <img src={filterimg} alt="" />
            </div>
            <p class="username">Burger</p>
          </div>
        </div>
      </div>
    );
    $("." + this._reference).empty();
    $("." + this._reference).append(<FilterCategoryHTML />);
  }
}
