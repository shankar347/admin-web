import Repository, { apiUrl } from "./Repository";

class AuthRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async login(payload) {
    let url = `${apiUrl}/auth/login`;
    const reponse = await Repository.post(url, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async Register(payload) {
    let url = `${apiUrl}/auth/register`;
    const reponse = await Repository.post(url, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }


  async changePassword(payload) {
    let url = `${apiUrl}/auth/changePassword`;
    const reponse = await Repository.post(url, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }



  async createAdmin(payload) {
    let url = `${apiUrl}/auth/`;
    const reponse = await Repository.post(url, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async updateAdmin(id, payload) {
    let url = `${apiUrl}/auth/${id}`;
    const reponse = await Repository.put(url, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async updateStatusAdmin(payload) {
    let url = `${apiUrl}/auth/status`;
    const reponse = await Repository.post(url, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

}

export default new AuthRepository();
