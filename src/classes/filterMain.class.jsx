/** @jsx createElement */
import { JsXml } from "../libs/javascriptXml.js";
import $ from "jquery";

export class FilterMain extends JsXml {
  constructor(reference, buttomActive) {
    super();
    this._reference = reference;
    this._buttomActive = buttomActive;
  }

  onClickButtomFilterMain(context, e) {
    let buttomNow = $(e.path[0]);
    this._buttomActive = buttomNow[0].innerText;
    $(`.mdc-button`).removeClass("active-filter-main-btn");
    $(buttomNow.parent()).addClass("active-filter-main-btn");
  }

  render() {
    const createElement = super.createElement;

    const FilterMainHTML = (prop) => (
      <div class="contenedor">
        <button class="mdc-button mdc-button--raised">
          <span
            class="mdc-button__label"
            onClick={() => this.onClickButtomFilterMain(this, event)}
          >
            Comida
          </span>
        </button>
        <button class="mdc-button mdc-button--raised">
          <span
            class="mdc-button__label"
            onClick={() => this.onClickButtomFilterMain(this, event)}
          >
            Bar
          </span>
        </button>
      </div>
    );

    $("." + this._reference).empty();
    $("." + this._reference).append(<FilterMainHTML />);
  }
}
