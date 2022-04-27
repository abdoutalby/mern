import axios from 'axios'

const API_URL = 'api/recruters/'

// // Create new goal
// const createRecruter = async (recruterData, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }

//   const response = await axios.post(API_URL, recruterData, config)

//   return response.data
// }

// Get user goals
const getRecruters = async ( ) => {
  
  const response = await axios.get(API_URL)

  return response.data
}

// // Delete user goal
// const deleteRecruter = async (recruterId, token) => {
//   const config = {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   }

//   const response = await axios.delete(API_URL + recruterId, config)

//   return response.data
// }

const recruterService = {
//  createRecruter,
//  deleteRecruter,
 getRecruters
}

export default recruterService
