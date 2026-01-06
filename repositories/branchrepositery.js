import Repository, { apiUrl } from "./Repository";

class BranchRepoistery {
  constructor(callback) {
    this.callback = callback;
  }

  async createBranch(payload) {
    let url = `${apiUrl}/branch/createbranch`;
    const reponse = await Repository.post(url, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getAllbranches() {
    let url = `${apiUrl}/branch/getallbranches`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async editBranch(id, formdata) {
    let url = `${apiUrl}/branch/editbranch/${id}`;
    const reponse = await Repository.put(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async deleteBranch(id) {
    let url = `${apiUrl}/branch/deletebranch/${id}`;
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

export default new BranchRepoistery();
