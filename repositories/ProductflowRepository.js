
import Repository, { apiUrl } from './Repository';



class ProductflowRepository {
    constructor(callback) {
        this.callback = callback;
    }

async editproductflow(categoryId, formdata) {
    let url = `${apiUrl}/productflow/update/${categoryId}`;
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

export default new ProductflowRepository();