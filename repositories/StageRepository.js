import Repository, { apiUrl } from './Repository';

import { jsonToQuery } from '../helper/auth';

class StageRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getStage(payload) {
        let url = `${apiUrl}/stage/`;
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
    async getStageById(id) {
        let url = `${apiUrl}/stage/${id}`;
        const reponse = await Repository.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }
    async getInactiveStage(payload) {
        let url = `${apiUrl}/stage/`;
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

    async saveStage(formdata) {
        let url = `${apiUrl}/stage/`;
        const reponse = await Repository.post(url, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async editStage(categoryId, formdata) {
        let url = `${apiUrl}/stage/update/${categoryId}`;
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
        let url = `${apiUrl}/stage/updateStatus`;
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

export default new StageRepository();

