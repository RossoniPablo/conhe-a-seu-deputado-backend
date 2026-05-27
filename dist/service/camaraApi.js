import axios from "axios";
export const camaraApi = axios.create({
    baseURL: "https://dadosabertos.camara.leg.br/api/v2",
    timeout: 10000,
    headers: {
        Accept: "application/json",
    },
});
//# sourceMappingURL=camaraApi.js.map