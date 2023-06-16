import Repository, { apiUrl } from './Repository';
import { jsonToQuery } from '../helper/auth';

class AuthRepository {
    constructor(callback) {
        this.callback = callback;
    }


    async getOperator(payload) {
        let url = `${apiUrl}/operator/`;
        url += jsonToQuery(payload);
        url += `&status=Y`;
        const reponse = await Repository.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async getInactiveOperatordetails(payload) {
        let url = `${apiUrl}/operator/`;
        url += jsonToQuery(payload);
        url += `&status=N`;
        const reponse = await Repository.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }
    
   
    
    async saveOperator(formdata) {
        let url = `${apiUrl}/operator/`;
        const reponse = await Repository.post(url, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async editOperator(id, formdata) {
        let url = `${apiUrl}/operator/update/${id}`;
        const reponse = await Repository.put(url, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async updateStatus(data) {
        let url = `${apiUrl}/operator/updateStatus`;
        const reponse = await Repository.put(url, data)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async changePosition(data) {
        let url = `${apiUrl}/operator/updatePosition`;
        const reponse = await Repository.put(url, data)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async changePassword( formdata) {
        let url = `${apiUrl}/operator/changePassword`
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

