import { getCurrentUser } from "../../api/getCurrentUser";
import { useAuthStore } from "../../store/authStore";

export async function rootLoader() {
  try {
    const user = await getCurrentUser();
    useAuthStore.getState().setUser(user);
    return;
  } catch (error) {
    useAuthStore.getState().setUser(null);
    return;
  }
}
