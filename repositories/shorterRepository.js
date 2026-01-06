import Repository, { apiUrl } from "./Repository";

class shorterRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getallShorters() {
    let url = `${apiUrl}/admin/getallshorters`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async editShorter(id, formdata) {
    let url = `${apiUrl}/admin/editshorter/${id}`;
    const reponse = await Repository.put(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async delete(id) {
    let url = `${apiUrl}/admin/deletesorter/${id}`;
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

export default new shorterRepository();
