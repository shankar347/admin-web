import Repository, { apiUrl } from "./Repository";

class UnitRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getUnit(params) {
    let url = `${apiUrl}/phase`;
    const reponse = await Repository.get(url, { params })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getUnitById(id) {
    let url = `${apiUrl}/phase/details/${id}`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async saveUnit(formdata) {
    let url = `${apiUrl}/phase/`;
    const reponse = await Repository.post(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async editUnit(id, formdata) {
    let url = `${apiUrl}/phase/${id}`;
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
    let url = `${apiUrl}/phase/status`;
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
    let url = `${apiUrl}/phase`;
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

export default new UnitRepository();
