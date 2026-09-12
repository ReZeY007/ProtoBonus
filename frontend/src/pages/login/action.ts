import type { ActionFunctionArgs } from "react-router";
import axios, { AxiosError } from "axios";
import { login, type LoginData } from "../../api/auth";
import type { User } from "../../store/authStore";

export async function loginAction({ request }: ActionFunctionArgs) {
  const data: LoginData = await request.json();

  try {
    const response: User = await login(data);
    return { success: true, user: response };
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response)
        return {
          success: false,
          status: axiosError.response.status,
          data: axiosError.response.data,
        };
    }
  }
}
