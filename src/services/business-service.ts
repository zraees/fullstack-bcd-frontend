import axios from "axios";
import { IBusiness } from "../types/types";
const backendUrl = import.meta.env.VITE_BCD_BACKEND_URL + "Businesses";

const BusinessService = {
    getBusinesses: async (): Promise<IBusiness[]> => {
        const resp = await axios.get<IBusiness[]>(`${backendUrl}/GetAllBusinesses`);
        return resp.data;
    },

    getFeatureBusinesses: async (): Promise<IBusiness[]> => {
        const resp = await axios.get<IBusiness[]>(`${backendUrl}/GetFeatureBusinesses`);
        //console.log('url', `${backendUrl}Businesses/GetFeatureBusinesses`)
        return resp.data;
    },

    addReview: async (businessId: number,
        userId: number,
        rating: number,
        comment: string): Promise<any> => {
            console.log('businessId, userId, rating, comment',businessId, userId, rating, comment);
        const resp = await axios.post(`${backendUrl}/addReview`, { businessId, userId, rating, comment });
        return resp.data;
    },

}

export default BusinessService;