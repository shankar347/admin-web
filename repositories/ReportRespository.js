import Repository, { apiUrl } from './Repository';

import { jsonToQuery } from '../helper/auth';

class RoomRepository {
    constructor(callback) {
        this.callback = callback;
    }
   
    async getOverall(payload) {
        let url = `${apiUrl}/reports/overAll`;
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
 

}

export default new RoomRepository();

