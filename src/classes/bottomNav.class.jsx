/** @jsx createElement */
import { JsXml } from "../libs/javascriptXml.js";
import $ from "jquery";
import { Home } from "../containers/home.class.jsx";
import { Carta } from "../containers/carta.class.jsx";

export class BottomNav extends JsXml {
  _nameButtom = ["Home", "Carta", "Comprar"];
  _iconButtom = ["home", "restaurant_menu", "shopping_cart"];

  constructor(pages) {
    super();
    this._pages = pages;
  }

  onClickButtomNav(context, e) {
    let buttomNow = $(e.path[1]);
    context.updateCircleNav(buttomNow);
    $(".navbar-brand").toggleClass("animate");

    for (let page of this._pages) {
      page ? $("." + page._reference).css("display", "none") : false;
    }

    for (let indexName in this._nameButtom) {
      if (buttomNow[0].children[1].innerText === this._nameButtom[indexName]) {
        if (this._pages[indexName] === undefined) {
          try{
          renderPageList[indexName]().then((value) => {
            this._pages[indexName] = value;
            this._pages[indexName].render();
          });
          console.log(`Creado Page ${this._nameButtom[indexName]}`)
        }
          catch(err){
            console.log(err)
          }
        } else {
          $("." + this._pages[indexName]._reference).css("display", "block");
          console.log(`Visibility Page ${this._nameButtom[indexName]}`)
        }
      }
    }
  }

  updateCircleNav(buttomNow) {
    $("nav>.nav__link--active").removeClass("nav__link--active");
    $(buttomNow).addClass("nav__link--active");

    let centerButtomActiveX =
      $(buttomNow).position().left +
      $(buttomNow).width() / 2 -
      $(".nav-indicator").width() / 2;

    $(".nav-indicator").animate(
      {
        left: `${centerButtomActiveX}px`,
      },
      "fast",
      () => {
        let centerButtomActiveY =
          $(buttomNow).position().top +
          $(buttomNow).height() / 2 -
          $(".nav-indicator").height() / 2;
        $(".nav-indicator").animate(
          {
            top: `${centerButtomActiveY}px`,
          },
          "fast"
        );
      }
    );
  }

  render() {
    const createElement = super.createElement;

    const getButtomContent = (nameButtom, nameIcon) => {
      let content = [];
      for (let i = 0; i < nameButtom.length; i++) {
        const name = nameButtom[i];
        const icon = nameIcon[i];
        content.push(
          <a href="#" class="nav__link">
            <i
              class="material-icons nav__icon"
              onClick={() => this.onClickButtomNav(this, event)}
            >
              {icon}
            </i>
            <span class="nav__text">{name}</span>
          </a>
        );
      }
      return content;
    };

    const BottomNavHTML = (prop) => (
      <nav class="nav">
        <span class="nav-indicator"></span>
        {getButtomContent(this._nameButtom, this._iconButtom)}
      </nav>
    );

    document
      .getElementById("bottomNav")
      .appendChild(<BottomNavHTML name="foo" />);

    $($(".nav").children()[1]).addClass("nav__link--active");
  }
}

const renderHome = () => {
  return new Promise((resolve, reject) => {
    let home = new Home("home-page");
    if (home) {
      resolve(home);
    } else {
      reject(`No se a creado ${home}`);
    }
  });
};

const renderCarta = () => {
  return new Promise((resolve, reject) => {
    let carta = new Carta("carta-page");
    if (carta) {
      resolve(carta);
    } else {
      reject(`No se a creado ${carta}`);
    }
  });
};

const renderPageList = [renderHome,renderCarta];
