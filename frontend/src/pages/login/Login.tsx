import { useEffect, useState } from "react";
import { useActionData, useNavigate, useSubmit } from "react-router";
import LabeledInput from "../../components/formElements/LabeledInput";
import { type LoginData } from "../../api/auth";
import type { loginAction } from "./action";
import { useAuthStore } from "../../store/authStore";

function Login() {
  const actionData = useActionData<typeof loginAction>();
  const submit = useSubmit();
  const navigate = useNavigate();
  const user = useAuthStore();

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
    if (actionData?.user) {
      user.setUser(actionData.user);
      navigate("/");
    } else if (!actionData?.success) {
      setHasError(true);
    }
  }, [actionData, navigate]);

  return (
    <div>
      <LabeledInput
        name="login"
        label="Логин"
        placeholder="Логин"
        width={"150px"}
        value={loginData.login}
        onChange={handleInputChange}
        error={hasError}
      />
      <LabeledInput
        error={hasError}
        name="password"
        type="password"
        label="Пароль"
        placeholder="Пароль"
        width={"150px"}
        value={loginData.password}
        onChange={handleInputChange}
      />
      <button onClick={handleSubmitClick}>Войти</button>
    </div>
  );
}

export default Login;
