import { useSubmit, Link } from "react-router";
import Logo from "./Logo";
import PopupButton from "./PopupButton";
import { useAuthStore } from "../store/authStore";
import "./Header.css";

function Header() {
  const user = useAuthStore((s) => s.user);
  const submit = useSubmit();

  const handleLogout = () => {
    submit(
      {},
      {
        action: "/logout",
        method: "POST",
      },
    );
  };

  return (
    <header className="header">
      <div className="header__left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
      </div>
      <nav className="nav-bar">
        {user && (
          <>
            <Link className="nav-bar__button" to="/shop">
              Магазин
            </Link>
            <PopupButton
              className="nav-bar__button"
              buttonContent={user?.name + " " + user?.surname[0]}
            >
              <ul className="nav-bar__user">
                <li>
                  <Link className="nav-bar__user__button" to="/profile">
                    Профиль
                  </Link>
                </li>
                <li>
                  <Link className="nav-bar__user__button" to="/purchases">
                    Покупки
                  </Link>
                </li>
                <li>
                  <a className="nav-bar__user__button" onClick={handleLogout}>
                    Выход
                  </a>
                </li>
              </ul>
            </PopupButton>
          </>
        )}
        {!user && (
          <Link className="nav-bar__button" to="/login">
            Вход
          </Link>
        )}
      </nav>
    </header>
  );
}

export default Header;
