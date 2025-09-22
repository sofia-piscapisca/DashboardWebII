import { api } from "./api";

export async function pegarLoginPegarUsuario({email, password}) {
    const { data } = await api.post("/login", { email, password });
    const token = data.accessToken; 
    const partialUser = data.user || {};

    localStorage.setItem("token", token);

    let user = partialUser; 
    if (user.id == null) { 
        const { data: users } = await api.get(
            `/user?email=${encodeURIComponent(email)}`
        );
        user = users?.[0] || partialUser;
    }
    localStorage.setItem("user", JSON.stringify(user));
    return { token, user };
}

export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
}
