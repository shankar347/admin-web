import Repository, { apiUrl } from './Repository';

import { jsonToQuery } from '../helper/auth';

class RoomRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getRoom(payload) {
        let url = `${apiUrl}/room/`;
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
    async getRoomById(id) {
        let url = `${apiUrl}/room/${id}`;
        const reponse = await Repository.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }
    async getInactiveRoom(payload) {
        let url = `${apiUrl}/room/`;
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

    async saveRoom(formdata) {
        let url = `${apiUrl}/room/`;
        const reponse = await Repository.post(url, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async editRoom(categoryId, formdata) {
        let url = `${apiUrl}/room/update/${categoryId}`;
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
        let url = `${apiUrl}/room/updateStatus`;
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

export default new RoomRepository();

