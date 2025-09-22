export const auth = {
    async login(email, password) {
        try {
            const response = await fetch('https://api-node-test-6c4b0a5d4c87.herokuapp.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('Credenciais inválidas. Verifique seu e-mail e senha.');
                }
                if (response.status === 400) {
                    throw new Error('Requisição inválida. Verifique os dados enviados.');
                }
                throw new Error('Erro ao fazer login. Tente novamente mais tarde.');
            }

            const data = await response.json();
            localStorage.setItem('usuario', JSON.stringify(data.usuario));
            localStorage.setItem('token', data.token);
            return data.user;
        } catch (error) {
            throw new Error (error.message);
        }
    },

    logout() {
        localStorage.removeItem('usuario');
        localStorage.removeItem('token');
    },

    getUsuario() {
        const usuario = localStorage.getItem('usuario');
        return usuario ? JSON.parse(usuario) : null;
    },

    getToken() {
        return localStorage.getItem('token');
    },

    isAuthenticated() {
        return !!this.getToken();
    }
};