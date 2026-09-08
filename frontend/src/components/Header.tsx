import Logo from "./Logo";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Logo />
      </div>
      <div className="header__right">
        <button>Магазин</button>
        <button>Выход</button>
        <button>Вход</button>
      </div>
    </header>
  );
}

export default Header;
