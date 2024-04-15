import Repository, { apiUrl } from "./Repository";

class RoomRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getRoom(params) {
    let url = `${apiUrl}/rooms`;
    const reponse = await Repository.get(url, { params })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getRoomById(id) {
    let url = `${apiUrl}/rooms/${id}`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async saveRoom(formdata) {
    let url = `${apiUrl}/rooms/`;
    const reponse = await Repository.post(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async editRoom(id, formdata) {
    let url = `${apiUrl}/rooms/${id}`;
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

  async delete(params) {
    let url = `${apiUrl}/rooms`;
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

export default new RoomRepository();
