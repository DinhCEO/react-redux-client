class Config {
    getApiUrl() {
        return {
            ApiUrl: process.env.API_PATH
        }
    }
    clearToken() {
        return localStorage.removeItem('token');
    }
    storeToken(token) {
        return localStorage.setItem('token', token);
    }
    getToken() {
        return (localStorage.getItem('token') || '');
    }

    clearRole() {
        return localStorage.removeItem('role');
    }

    storeRole(role) {
        return localStorage.setItem('role', role);
    }

    getRole() {
        return (localStorage.getItem('role') || '');
    }

}

export default Config;