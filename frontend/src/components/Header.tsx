import Logo from "./Logo";
import "./Header.css";
import Popup from "./Popup";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Logo />
      </div>
      <div className="header__right">
        <button>Магазин</button>
        <Popup>
          <ul>
            <li>
              <button>Профиль</button>
            </li>
            <li>
              <button>Покупки</button>
            </li>
            <li>
              <button>Выход</button>
            </li>
          </ul>
        </Popup>
        <button>Вход</button>
      </div>
    </header>
  );
}

export default Header;
