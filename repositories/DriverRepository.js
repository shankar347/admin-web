import Repository, { apiUrl } from "./Repository";

class DriverRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async createRoute(payload) {
    let url = `${apiUrl}/driver/addroutebyadmin`;
    const reponse = await Repository.post(url, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async updateStop(payload) {
    let url = `${apiUrl}/driver/updatestop`;
    const reponse = await Repository.put(url, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async completeRoute(routeId) {
    let url = `${apiUrl}/driver/completeroute`;
    const reponse = await Repository.put(url, routeId)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getuserAllroutes(id) {
    let url = `${apiUrl}/driver/getuserallroutes/${id}`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getuserTodayAllroutes(id) {
    let url = `${apiUrl}/driver/getusertodayroutes/${id}`;
    const reponse = await Repository.get(url)
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

  async deleteDriver(id) {
    let url = `${apiUrl}/admin/deletedriver/${id}`;
    const reponse = await Repository.delete(url)
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
    const reponse = await Repository.post(url, data)
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

  async getProfile(id) {
    let url = `${apiUrl}/driver/profile/${id}`;
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

export default new DriverRepository();
