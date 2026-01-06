import Repository, { apiUrl } from "./Repository";

class SuperadminRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async AddSuperadmin(payload) {
    let url = `${apiUrl}/superadmin/addsuperadmin`;
    const reponse = await Repository.post(url, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getAllsuperadmins() {
    let url = `${apiUrl}/superadmin/getallsuperadmin`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async editSuperadmin(id, formdata) {
    let url = `${apiUrl}/superadmin/editsuperadmin/${id}`;
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
    let url = `${apiUrl}/rooms/status`;
    const reponse = await Repository.post(url, data)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async deleteSuperadmin(id) {
    let url = `${apiUrl}/superadmin/deletesuperadmin/${id}`;
    const reponse = await Repository.delete(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }
}

export default new SuperadminRepository();
