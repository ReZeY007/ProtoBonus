import { useEffect, useState } from "react";
import { useActionData, useSubmit } from "react-router";
import LabeledInput from "../../components/formElements/LabeledInput";
import { type LoginData } from "../../api/auth";
import type { loginAction } from "./action";
import "./Login.css";

function Login() {
  const actionData = useActionData<typeof loginAction>();
  const submit = useSubmit();

  const [hasError, setHasError] = useState(false);
  const [loginData, setLoginData] = useState<LoginData>({
    login: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const handleSubmitClick = () => {
    submit(
      { ...loginData },
      {
        method: "POST",
        action: "/login",
        encType: "application/json",
      },
    );
  };

  useEffect(() => {
    if (actionData && !actionData?.success) {
      setHasError(true);
    }
  }, [actionData]);

  return (
    <div className="login-page">
      <div className="panel login-form">
        <h1 className="login-form__title">Вход</h1>
        <LabeledInput
          name="login"
          label="Логин"
          placeholder="Логин"
          width={"100%"}
          value={loginData.login}
          onChange={handleInputChange}
          danger={hasError}
        />
        <LabeledInput
          name="password"
          type="password"
          label="Пароль"
          placeholder="Пароль"
          width={"100%"}
          value={loginData.password}
          onChange={handleInputChange}
          danger={hasError}
        />
        <button
          className="accent login-form__confirm-button"
          onClick={handleSubmitClick}
        >
          Войти
        </button>
      </div>
    </div>
  );
}

export default Login;
