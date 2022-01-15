/** @jsx createElement */
import { JsXml } from "../libs/javascriptXml.js";
import $ from "jquery";
import logo from '../assets/img/logo/logo1.png';

export class Header extends JsXml {
  constructor() {
    super();
  }

  render() {
    const createElement = super.createElement;

    const HeaderHTML = (prop) => (
      <nav class="navbar fixed-top navbar-dark bg-dark">
        <div class="container-fluid">
          <div class="container-logo"></div>
          <a class="navbar-brand" href="#">
            <img
              src={logo}
              alt=""
              width="100%"
              height="100%"
            />
          </a>
        </div>
      </nav>
    );

    $("header").append(<HeaderHTML />);
  }
}
