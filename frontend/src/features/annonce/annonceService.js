import axios from "axios";

const API_URL = "api/annonces/";

// Create
const create  = async(Data, token) => {
    
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(`${API_URL}`, Data, config);

    return response.data;
};

// Get all
const getAll = async() => {
    const response = await axios.get(API_URL+'all');
    return response.data;
};

// Delete
const deleteById = async(Id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.delete(API_URL + Id, config);
     
    return response.data;
};

const annonceService = {
    create,
    getAll,
    deleteById,
};

export default  annonceService;