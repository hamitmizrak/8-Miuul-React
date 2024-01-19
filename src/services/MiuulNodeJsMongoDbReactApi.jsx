// Blog Const Api
import axios from "axios";

// PERSIST
// http://localhost:3434/api/miuul (Create,Delete,Update,View)
// http://localhost:3434/api/miuul/list
const MIUUL_PERSIST_URL = "/api/miuul/";

// CLASS
class MiuulNodeJsMongoDbReactApi {
  // CREATE
  // http://localhost:3434/api/miuul/
  miuulSpaApiCreate(miuulSpaDto) {
    return axios.post(`${MIUUL_PERSIST_URL}`, miuulSpaDto);
  }

  // LIST
  // http://localhost:3434/api/miuul/list
  miuulSpaApiList() {
    return axios.get(`${MIUUL_PERSIST_URL}/list`);
  }

  // FIND
  // http://localhost:3434/api/miuul/1
  miuulSpaApiFindById(id) {
    return axios.get(`${MIUUL_PERSIST_URL}/${id}`);
  }

  // UPDATE
  // http://localhost:3434/api/miuul/1
  miuulSpaApiUpdate(id, miuulSpaDto) {
    return axios.put(`${MIUUL_PERSIST_URL}/${id}`, miuulSpaDto);
  }

  // DELETE BY ID
  // http://localhost:3434/api/miuul/1
  miuulSpaApiDeleteById(id) {
    return axios.delete(`${MIUUL_PERSIST_URL}/${id}`);
  }
} //end class

// EXPORT DEFAULT
export default new MiuulNodeJsMongoDbReactApi();
