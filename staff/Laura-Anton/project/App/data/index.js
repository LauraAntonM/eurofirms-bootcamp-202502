export const data = {

    setToken(token) {
        sessionStorage.token = token
    },

    getToken() {
        return sessionStorage.token
    },

    removeToken() {
        delete sessionStorage.token
    },

    getUserId() {
        return sessionStorage.userId
    },

    setUserId(id) {
        sessionStorage.userId = id
    }

}