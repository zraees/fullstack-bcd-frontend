import axios from "axios";
import { ICategory, ICity } from "../types/types";
const backendUrl = import.meta.env.VITE_BCD_BACKEND_URL + "";

const LookupService = {

    getCities: async (): Promise<ICity[]> => {
        const resp = await axios.get<ICity[]>(`${backendUrl}cities/GetAllCities`);
        return resp.data;
    },

    getCategories: async (): Promise<ICategory[]> => {
        const resp = await axios.get<ICategory[]>(`${backendUrl}categories/GetAllCategories`);
        return resp.data;
    },

}

export default LookupService;