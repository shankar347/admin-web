import Repository, { apiUrl } from './Repository';

import { jsonToQuery } from '../helper/auth';

class UnitRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getUnit(payload) {
        let url = `${apiUrl}/unit/`;
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
    async getUnitById(id) {
        let url = `${apiUrl}/unit/${id}`;
        const reponse = await Repository.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }
    async getInactiveUnit(payload) {
        let url = `${apiUrl}/unit/`;
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

    async saveUnit(formdata) {
        let url = `${apiUrl}/unit/`;
        const reponse = await Repository.post(url, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async editUnit(categoryId, formdata) {
        let url = `${apiUrl}/unit/update/${categoryId}`;
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
        let url = `${apiUrl}/unit/updateStatus`;
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

export default new UnitRepository();

