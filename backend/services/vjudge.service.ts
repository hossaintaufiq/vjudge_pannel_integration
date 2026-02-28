import axios from 'axios';
import { response } from 'express';

export const fetchRanklist= async (contestId: string) => {
    try {
        const response = await axios.get(`https://vjudge.net/contest/${contestId}/ranklist`);
         return response.data; 
    }catch (error) {
        console.error('Error fetching ranklist:', error);
        return null; 
    }
   
}
    