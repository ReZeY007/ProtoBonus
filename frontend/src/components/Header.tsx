import Logo from "./Logo";
import "./Header.css";
import PopupButton from "./PopupButton";
import { useAuthStore } from "../store/authStore";

function Header() {
  const user = useAuthStore((s) => s.user);

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
                  <a href="/profile">Профиль</a>
                </li>
                <li>
                  <a href="purchases">Покупки</a>
                </li>
                <li>
                  <button>Выход</button>
                </li>
              </ul>
            </PopupButton>
          </>
        )}
        {!user && <a href="/login">Вход</a>}
      </div>
    </header>
  );
}

export default Header;
