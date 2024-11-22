import axios from "axios";
const backendUrl = import.meta.env.VITE_BCD_BACKEND_URL + "users";

const UserService = {

    authenticate: async (email: string, password: string): Promise<any> => {
        const resp = await axios.post(`${backendUrl}/authenticate?email=${email}&pwd=${password}`);
        return resp.data;
    },

    register: async (username: string, email: string, password: string): Promise<any> => {
        console.log('data', username, email, password)
        const resp = await axios.post(`${backendUrl}/register?username=${username}&email=${email}&pwd=${password}`);
console.log('resp.data', resp.data);
        return resp.data;
    },
    
    // getFeatureBusinesses : async () : Promise<IBusiness[]> => {
    //     const resp = await axios.get<IBusiness[]>(`${backendUrl}Businesses/GetFeatureBusinesses`);
    //     //console.log('url', `${backendUrl}Businesses/GetFeatureBusinesses`)
    //     return resp.data;
    // } 
}

export default UserService;