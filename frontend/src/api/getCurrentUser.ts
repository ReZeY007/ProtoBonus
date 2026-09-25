import { authorizedClient } from "./instances";

export async function getCurrentUser() {
  const response = await authorizedClient.get("/current-user");
  return response.data;
}
