/** @jsx createElement */
import { JsXml } from "../libs/javascriptXml.js";
import $ from "jquery";

export class Carousel extends JsXml {
  constructor(reference) {
    super();
    this._reference = reference;
  }

  render() {
    const createElement = super.createElement;

    const CaruoselHTML = (prop) => (
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="src/assets/img/carousel/c1.jpg"
                class="d-block w-100"
                alt="c1"
              />
            </div>
            <div class="carousel-item">
              <img
                src="src/assets/img/carousel/c2.jpg"
                class="d-block w-100"
                alt="c2"
              />
            </div>
            <div class="carousel-item">
              <img
                src="src/assets/img/carousel/c3.jpg"
                class="d-block w-100"
                alt="c3"
              />
            </div>
          </div>
        </div>
    );
    $("." + this._reference).empty()
    $("." + this._reference).append(<CaruoselHTML />);
  }
}
