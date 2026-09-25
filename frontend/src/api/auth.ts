import type { AxiosResponse } from "axios";
import { unauthourizedClient } from "./instances";

export interface LoginData {
  login: string;
  password: string;
}

export async function login(loginData: LoginData) {
  const response: AxiosResponse = await unauthourizedClient.get("/login");
  return response.data;
}

export async function logout() {
  const response: AxiosResponse = await unauthourizedClient.post("/logout");
  return response.data;
}
