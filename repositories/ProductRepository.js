import Repository, { apiUrl } from "./Repository";

class MaterialRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getProduct(params) {
    let url = `${apiUrl}/production/`;
    const reponse = await Repository.get(url, { params })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getCurrentFlow(id) {
    let url = `${apiUrl}/production/currentFlow/${id}`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

    async getProFlow(id) {
    let url = `${apiUrl}/production/proFlow/${id}`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async saveProduct(formdata) {
    let url = `${apiUrl}/production/`;
    const reponse = await Repository.post(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async editProduct(id, formdata) {
    let url = `${apiUrl}/production/${id}`;
    const reponse = await Repository.put(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async updateStatus(data) {
    let url = `${apiUrl}/production/status`;
    const reponse = await Repository.post(url, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async delete(params) {
    let url = `${apiUrl}/production`;
    const reponse = await Repository.delete(url, { params })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }
  
  async saveflow(data) {
    let url = `${apiUrl}/production/saveflow`;
    const reponse = await Repository.post(url,data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

    async getsavedflow() {
    let url = `${apiUrl}/production/fetchsaveflow`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }
}


export default new MaterialRepository();
