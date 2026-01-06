import Repository, { apiUrl } from "./Repository";

class TicketRepoistery {
  constructor(callback) {
    this.callback = callback;
  }

  async createticket(payload) {
    let url = `${apiUrl}/ticket/createticket`;
    const reponse = await Repository.post(url, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getAllticketes() {
    let url = `${apiUrl}/ticket/getalltickets`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getAllticketesforcourier() {
    let url = `${apiUrl}/ticket/gettickets`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async editticket(id, formdata) {
    let url = `${apiUrl}/ticket/updateticket/${id}`;
    const reponse = await Repository.put(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async Replyticket(id, formdata) {
    let url = `${apiUrl}/ticket/updateticketreply/${id}`;
    const reponse = await Repository.put(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async deleteticket(id) {
    let url = `${apiUrl}/ticket/deleteticket/${id}`;
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

export default new TicketRepoistery();
