import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/productList');
}
const send =data=>{
    return httpClient.post("/buynow",data)
}
// const create = data => {
//     return httpClient.post("/create-payment-intent", data);
// }

const get = id => {
    return httpClient.get(`/employees/${id}`);
}

export default { getAll, get ,send};