import axios from "axios";
import { IBusiness } from "../types/types";
const backendUrl = import.meta.env.VITE_BCD_BACKEND_URL + "Businesses";

const BusinessService = {

    add: async (business: FormData) => {
        try {
            const resp = await axios.post<IBusiness[]>(`${backendUrl}/Add`, business, {
                headers: { "Content-Type": "multipart/form-data" },
            });
            return resp.data;
        } catch (error: any) {
            // Handle the error, e.g., log it or show a toast notification
            console.error("Error adding business:", error);

            // Optionally re-throw the error for higher-level handling
            throw new Error(
                error.response?.data?.message || "Failed to add the business"
            );
        }
    },

    getBusinesses: async (): Promise<IBusiness[]> => {
        const resp = await axios.get<IBusiness[]>(`${backendUrl}/GetAllBusinesses`);
        return resp.data;
    },

    getFeatureBusinesses: async (): Promise<IBusiness[]> => {
        const resp = await axios.get<IBusiness[]>(`${backendUrl}/GetFeatureBusinesses`);
        //console.log('url', `${backendUrl}Businesses/GetFeatureBusinesses`)
        return resp.data;
    },

}

export default BusinessService;