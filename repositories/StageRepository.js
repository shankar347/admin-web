import Repository, { apiUrl } from "./Repository";

class StageRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getStage(params) {
    let url = `${apiUrl}/stage/`;
    const reponse = await Repository.get(url, { params })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getStageById(id) {
    let url = `${apiUrl}/stage/${id}`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getStageFlow(id) {
    let url = `${apiUrl}/stage/flows/${id}`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async saveStage(formdata) {
    let url = `${apiUrl}/stage/`;
    const reponse = await Repository.post(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async editStage(id, formdata) {
    let url = `${apiUrl}/stage/${id}`;
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
    let url = `${apiUrl}/stage/status`;
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
    let url = `${apiUrl}/stage`;
    const reponse = await Repository.delete(url, { params })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }
}

export default new StageRepository();
