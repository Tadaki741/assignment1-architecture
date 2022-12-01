import axios from 'axios';
import {useQuery} from 'react-query';


const BIN_ID = "6388ac3b7966e84526d13373";

export default function useHotelData () {
    return useQuery('allHotelData' , async () => {
        const response = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`);
        const data = await response.data;
        const actualData = await data.record;
        return actualData;
    });
}