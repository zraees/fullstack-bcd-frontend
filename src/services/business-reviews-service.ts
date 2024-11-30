import axios from "axios";
import { IBusinessReview } from "../types/types";
const backendUrl = import.meta.env.VITE_BCD_BACKEND_URL + "BusinessReviews";

const BusinessReviewsService = {

    addReview: async (businessId: number,
        userId: number,
        rating: number,
        comment: string): Promise<any> => {
            console.log('businessId, userId, rating, comment',businessId, userId, rating, comment);
        const resp = await axios.post(`${backendUrl}/addReview`, { businessId, userId, rating, comment });
        return resp.data;
    },

    getReviewsByBusinessId: async (businessId: number): Promise<IBusinessReview[]> => {
        const resp = await axios.get<IBusinessReview[]>(`${backendUrl}/GetBusinessReviews/${businessId}`);
        //console.log('url', `${backendUrl}Businesses/GetFeatureBusinesses`)
        return resp.data;
    }, 

}

export default BusinessReviewsService;