import axios, { AxiosError } from "axios";
import { redirect, type ActionFunctionArgs } from "react-router";
import { login, logout, type LoginData } from "../../api/auth";
import { useAuthStore } from "../../store/authStore";

export async function loginAction({ request }: ActionFunctionArgs) {
  const data: LoginData = await request.json();

  try {
    await login(data);
    return redirect("/");
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response)
        return {
          success: false,
          status: axiosError.response.status,
          data: axiosError.response.data,
        };
      return {
        success: false,
      };
    }
  }
}

export default async function logoutAction() {
  try {
    await logout();
    useAuthStore.getState().setUser(null);
    return redirect("/");
  } catch (error) {
    return redirect("/error/logout");
  }
}
