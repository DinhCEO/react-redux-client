class AuthService {

    /**
     *
     * @param {axios} axios
     * @param {Config} config
     */
    constructor(axios, config) {
        this.axios = axios;
        this.apiUrl = config.getApiUrl();
        this.config = config;
    }

    /**
     *
     * @param username
     * @param password
     * @returns {Promise}
     */
    signIn(username, password) {
        let request = {
            method: 'POST',
            url: `${this.apiUrl['ApiUrl']}/login`,
            data: {
                username: username,
                password: password,
            }
        };

        return this.axios(request).then(res => res.data);
    }

    /**
     *
     * @returns {Promise}
     */
    getProfile() {
        let request = {
            method: 'GET',
            url: `${this.apiUrl['ApiUrl']}/profile`,
        };
        return this.axios(request).then(AuthService.resolveData);
    }

    /**
     *
     * @param token
     * @returns {*}
     */
    storeToken(token) {
        return this.config.storeToken(token);
    }

    /**
     *
     * @returns {*}
     */
    getToken() {
        return this.config.getToken();
    }

    /**
     *
     * @returns {*}
     */
    clearToken() {
        return this.config.clearToken();
    }

    /**
     *
     * @param role
     * @returns {*}
     */
    storeRole(role) {
        return this.config.storeRole(role);
    }

    /**
     *
     * @returns {*}
     */
    getRole() {
        return this.config.getRole();
    }

    /**
     *
     * @returns {*}
     */
    clearRole() {
        return this.config.clearRole();
    }

    /**
     *
     * @param response
     */
    static resolveData(response) {
        return response.data;
    }

}

export default AuthService;
