import Repository, { apiUrl } from './Repository';

import { jsonToQuery } from '../helper/auth';

class RoomRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async getHarvest(formdata) {
        let url = `${apiUrl}/reports/getHarvest`;
        const reponse = await Repository.post(url, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }
    async getPinning(formdata) {
        let url = `${apiUrl}/reports/getPinning`;
        const reponse = await Repository.post(url, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async getVenting(formdata) {
        let url = `${apiUrl}/reports/getVenting`;
        const reponse = await Repository.post(url, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }
    async getCaseRun(formdata) {
        let url = `${apiUrl}/reports/getCaseRun`;
        const reponse = await Repository.post(url, formdata)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
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

