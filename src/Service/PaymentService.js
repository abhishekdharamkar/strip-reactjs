import httpClient from "../http-common";

const getAll = () => {
    return httpClient.get('/productList');
}

export default { getAll };