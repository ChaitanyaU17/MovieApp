export { removeMovie } from '../reducers/movieSlice';
import axios from '../../utils/axios';
import { loadMovie } from '../reducers/movieSlice';

export const asyncloadmovie = (id) => async (dispatch, getState) => {
    try {
        const detail = await axios.get(`/movie/${id}`)
        const externalid = await axios.get(`/movie/${id}/external_ids`)
        const recommendations = await axios.get(`/movie/${id}/recommendations`)
        const similar = await axios.get(`/movie/${id}/similar`)
        const translations = await axios.get(`/movie/${id}/translations`)
        const videos = await axios.get(`/movie/${id}/videos`)
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`)

        let theultimatedetails = {
            detail: detail.data,
            externalid: externalid.data,
            recommendations: recommendations.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.slice(0, 3).map(t => t.english_name),
            videos: videos.data.results.find(m => m.type === 'Trailer'),
            watchproviders: watchproviders.data.results.IN,
        }

        dispatch(loadMovie(theultimatedetails));
        //console.log(theultimatedetails);

    } catch (error) {
        console.log('Error: ', error );
    }
}