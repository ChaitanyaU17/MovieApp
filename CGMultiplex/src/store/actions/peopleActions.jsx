export { removePeople } from '../reducers/peopleSlice';
import axios from '../../utils/axios';
import { loadPeople } from '../reducers/peopleSlice';

export const asyncloadpeople = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/person/${id}`);
        const externalid = await axios.get(`/person/${id}/external_ids`);
        const combinedcredits = await axios.get(`/person/${id}/combined_credits`);
        const moviecredits = await axios.get(`person/${id}/movie_credits`);
        const tvcredits = await axios.get(`/person/${id}/tv_credits`);

        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            combinedcredits: combinedcredits.data,
            moviecredits: moviecredits.data,
            tvcredits: tvcredits.data,
        }

        dispatch(loadPeople(theultimatedetails));
        //console.log(theultimatedetails);

    } catch (error) {
        console.log('Error: ', error );
    }
}