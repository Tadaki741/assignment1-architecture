import axios from 'axios';
import {useQuery} from 'react-query';


const BIN_ID = "638738a4003d6444ce5ecb59";

export default function useHotelData () {
    return useQuery('allHotelData' , async () => {
        const response = await axios.get(`https://api.jsonbin.io/v3/b/${BIN_ID}/latest`);
        const data = await response.data;
        const actualData = await data.record;
        return actualData;
    });
}