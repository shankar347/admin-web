import Repository, { apiUrl } from './Repository';

import { jsonToQuery } from '../helper/auth';

class RoomRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getreports(formdata) {
        let url = `${apiUrl}/reports/getreports`;
        const reponse = await Repository.post(url, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async getRoomreports(formdata) {
        let url = `${apiUrl}/reports/getRoomreports`;
        const reponse = await Repository.post(url, formdata)
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

