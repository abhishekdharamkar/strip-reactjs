import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/productList');
}
const checkout =quentity=>{
    console.log("in service",quentity   )
    return httpClient.post("/checkout",quentity)
}
export default { getAll,checkout };