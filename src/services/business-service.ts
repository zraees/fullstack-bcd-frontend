// import axios from "axios";
import { IBusiness, ISearchCriteria } from "../types/types";
const backendUrl = import.meta.env.VITE_BCD_BACKEND_URL + "Businesses";

import axios from '../core/AxiosIntance';

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

    getBusinessesByCriteria: async (searchCriteria :ISearchCriteria): Promise<IBusiness[]> => {
        if(searchCriteria.searchText.length<=0){
            searchCriteria.searchText = "-1";
        }
        var url = `${backendUrl}/GetBusinesses/${searchCriteria.categoryId}/${searchCriteria.cityId}/${searchCriteria.searchText}`;
        const resp = await axios.get<IBusiness[]>(url);
        return resp.data;
    },

    getBusinesses: async (): Promise<IBusiness[]> => {
        const resp = await axios.get<IBusiness[]>(`${backendUrl}/GetAllBusinesses`);
        return resp.data;
    },

    getRecommendations: async (userId: number): Promise<IBusiness[]> => {
        const resp = await axios.get<IBusiness[]>(`${backendUrl}/GetRecommendations/${userId}`);
        return resp.data;
    },

    getFeatureBusinesses: async (): Promise<IBusiness[]> => {
        const resp = await axios.get<IBusiness[]>(`${backendUrl}/GetFeatureBusinesses`);
        //console.log('url', `${backendUrl}Businesses/GetFeatureBusinesses`)
        return resp.data;
    },

    markAsFeatured: async (businessId: number) => {
        try {
            await axios.put(`${backendUrl}/MarkAsFeatured/${businessId}`);
        } catch (error: any) {
            console.error('markAsFeatured', error);
        }
    },

    deleteBusiness: async (businessId: number) => {
        try {
            await axios.delete(`${backendUrl}/Delete/${businessId}`);
        } catch (error: any) {
            console.error('deleteBusiness', error);
        }
    }
}

export default BusinessService;