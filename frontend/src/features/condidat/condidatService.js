import axios from "axios";

const API_URL = "api/condidats/";

// Create
const createCondidat = async(Data, token) => {
    console.log(Data, "hedha fesh nabaath lel api");
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };

    const response = await axios.post(API_URL, Data, config);

    return response.data;
};

// Get condidats
const getCondidats = async() => {
    const response = await axios.get(API_URL);
    return response.data;
};

// enable disable 
const changeStatus = async(id , token)=>{
    const config = {
        headers : {
            Authorization : `Bearer ${token}` , 
        }
    }
    const response = await axios.put(API_URL + id, config) 
    return response.data
}

// Delete
const deleteCondidat = async(Id, token) => {
    const config = {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    };
    const response = await axios.delete(API_URL + Id, config);
    console.log(response, 'hedhy fel delete')
    return response.data;
};

const condidatService = {
    createCondidat,
    deleteCondidat,
    getCondidats,
    changeStatus
};


export default condidatService;