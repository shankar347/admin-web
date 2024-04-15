import Repository, { apiUrl } from "./Repository";
import axios from "axios";

let customHeaders = {
  Accept: "application/json",
};

let local = typeof window !== "undefined" ? localStorage : null;
if (local && local.usertoken) {
  customHeaders['authorization'] = `Bearer ${local.usertoken}`;
}

class RoomRepository {
  constructor(callback) {
    this.callback = callback;
  }

  async getRoomreports(payload) {
    let url = `${apiUrl}/reports/roomWise`;
    const reponse = await Repository.post(url, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
    return reponse;
  }

  async getStageReport(formdata) {
    let url = `${apiUrl}/reports/stageWise`;
    const reponse = await Repository.post(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getDashboard(formdata) {
    let url = `${apiUrl}/reports/dashboard`;
    const reponse = await Repository.post(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async downloadReports(payload) {
    let url = `${apiUrl}/reports/stageWise`;
    const reponse = await axios({
      method: "POST",
      url: url,
      responseType: "blob",
      data: payload,
      headers: customHeaders,
    })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
    return reponse;
  }
}

export default new RoomRepository();
