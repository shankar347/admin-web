import Repository, { apiUrl } from './Repository';
import { jsonToQuery } from '../helper/auth';

class MaterialRepository {
    constructor(callback) {
        this.callback = callback;
    }


    async getProduct(payload) {
        let url = `${apiUrl}/Product/`;
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

    async getInactiveProduct(payload) {
        let url = `${apiUrl}/Product/`;
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
    
    async saveProduct(formdata) {
        let url = `${apiUrl}/Product/`;
        const reponse = await Repository.post(url, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async editProduct(categoryId, formdata) {
        let url = `${apiUrl}/Product/update/${categoryId}`;
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
        let url = `${apiUrl}/Product/updateStatus`;
        const reponse = await Repository.put(url, data)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

}

export default new MaterialRepository();

