import Repository, { apiUrl } from './Repository';
import { getCurrentUser } from '../helper/auth';
import { jsonToQuery } from '../helper/auth';

let user = getCurrentUser();
class AdminMenuRepository {
    constructor(callback) {
        this.callback = callback;
    }

    async adminMenu() {
        const reponse = await Repository.get(`${apiUrl}/adminMenu`)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async getActiveMenuCount() {
        let url = `${apiUrl}/adminMenu/count`;
        url += `?status=Y`;
        if (user && user.type != 'SA') url += `&posted_id=${user.id}`;
        const reponse = await Repository.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }
    async getInactiveMenuCount() {
        let url = `${apiUrl}/adminMenu/count`;
        url += `?status=N`;
        if (user && user.type != 'SA') url += `&posted_id=${user.id}`;
        const reponse = await Repository.get(url)
            .then(response => {
                return response.data;
            })
            .catch(error => {
                return error.response.data;
            });
        return reponse;
    }

    async mapdata(payload){
     
        let url = `${apiUrl}/adminMenu/map-count`;
       
        url += jsonToQuery(payload);
        const reponse = await Repository.get(url)
        .then(response => {
            return response.data;
        })
        .catch(error => {
            return error.response.data;
        });
    return reponse;
    }

    //http://192.168.1.220:4567/api/v1/adminMenu/get/count?id=6475c66da5a4b1ece1da303b

}



export default new AdminMenuRepository();

