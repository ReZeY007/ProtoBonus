import LabeledInput from "../components/formElements/LabeledInput";

function Login() {
  return (
    <div>
      <LabeledInput label="Логин" placeholder="Логин" width={"150px"} />
      <LabeledInput label="Пароль" placeholder="Пароль" width={"150px"} />
      <button>Войти</button>
    </div>
  );
}

export default Login;
