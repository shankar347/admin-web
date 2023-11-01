import Repository, { apiUrl } from './Repository';
import axios from 'axios';

import { jsonToQuery } from '../helper/auth';

let customHeaders = {
    Accept: 'application/json'
};

let local = typeof window !== 'undefined' ? localStorage : null;
if (local && local.usertoken) {
    customHeaders['x-auth-token'] = `${local.usertoken}`;
}

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

    // async getRoomreports(formdata) {
    //     let url = `${apiUrl}/reports/getRoomreports`;
    //     const reponse = await Repository.post(url, formdata)
    //         .then(response => {
    //             return response.data;
    //         })
    //         .catch(error => {
    //             return error.response.data;
    //         });
    //     return reponse;
    // }


    async getRoomreports(payload) {
        let url = `${apiUrl}/reports/getRoomreports`;
        const reponse = await axios({
            method: "POST",
            url: url,
            // responseType: 'blob',
            data: payload,
            headers: customHeaders,

        }).then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
        return reponse;

    }

    async downloadRoomreports(payload) {
        let url = `${apiUrl}/reports/getRoomreports`;
        const reponse = await axios({
            method: "POST",
            url: url,
            responseType: 'blob',
            data: payload,
            headers: customHeaders,

        }).then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
        return reponse;

    }


}

export default new RoomRepository();

