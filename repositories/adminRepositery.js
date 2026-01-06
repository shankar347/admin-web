import Repository, { apiUrl } from "./Repository";

let customHeaders = {
  Accept: "application/json",
};

let local = typeof window !== "undefined" ? localStorage : null;
if (local && local.usertoken) {
  customHeaders["authorization"] = `Bearer ${local.usertoken}`;
}

class AdminRepositery {
  constructor(callback) {
    this.callback = callback;
  }

  async getAllusers() {
    let url = `${apiUrl}/admin/allusers`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
    return reponse;
  }
  async getallroutes() {
    let url = `${apiUrl}/admin/allroutes`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error;
      });
    return reponse;
  }

  async todayroutes() {
    let url = `${apiUrl}/admin/todayroutes`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getlast7daysRoutes(startdate, enddate) {
    let url = `${apiUrl}/admin/filteredroutes/${startdate}/${enddate}`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async activeRiders() {
    let url = `${apiUrl}/admin/activeriders`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async updateLatandLong(payload) {
    let url = `${apiUrl}/admin/update-location`;
    const reponse = await Repository.post(url, payload)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async todayroutes() {
    let url = `${apiUrl}/admin/todayroutes`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async getAlladmins() {
    let url = `${apiUrl}/admin/getalladmins`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async editAdmin(id, formdata) {
    let url = `${apiUrl}/admin/editadmin/${id}`;
    const reponse = await Repository.put(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }
  async getAlldrivers() {
    let url = `${apiUrl}/admin/getalldrivers`;
    const reponse = await Repository.get(url)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async editDriver(id, formdata) {
    let url = `${apiUrl}/admin/editdriver/${id}`;
    const reponse = await Repository.put(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async updateRole(id, formdata) {
    let url = `${apiUrl}/admin/editrole/${id}`;
    const reponse = await Repository.put(url, formdata)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        return error.response.data;
      });
    return reponse;
  }

  async deleteAdmin(id) {
    let url = `${apiUrl}/admin/deleteadmin/${id}`;
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

export default new AdminRepositery();
