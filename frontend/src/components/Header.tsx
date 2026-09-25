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
        <Logo />
      </div>
      <div className="header__right">
        {user && (
          <>
            <a href="/shop">Магазин</a>
            <PopupButton buttonContent={user?.name + " " + user?.surname[0]}>
              <ul>
                <li>
                  <Link to="/profile">Профиль</Link>
                </li>
                <li>
                  <Link to="/purchases">Покупки</Link>
                </li>
                <li>
                  <a onClick={handleLogout}>Выход</a>
                </li>
              </ul>
            </PopupButton>
          </>
        )}
        {!user && <Link to="/login">Вход</Link>}
      </div>
    </header>
  );
}

export default Header;
