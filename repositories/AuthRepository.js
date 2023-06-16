import Repository, { apiUrl } from './Repository';

class AuthRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async adminLogin(payload) {
        let url = '';
        if (payload.type === "SA") {
            url = `${apiUrl}/login`;
        } else {
            url = `${apiUrl}/operatorLogin`;
        }
        const reponse = await Repository.post(url, payload)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    } 

    async getAdmin() {
        let url = `${apiUrl}/`;
        const reponse = await Repository.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async changePassword( formdata) {
        let url = `${apiUrl}/changePassword`
        const reponse = await Repository.put(url, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }
}

export default new AuthRepository();

