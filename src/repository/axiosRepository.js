import axios from '../custom-axios/axios'


const HistoAirService = {

    fetchFlights: (country,info) => {
        return axios.get(`/api/v1/flights-country?country=` + country +'&info='+info);
    },
    fetchAirports: (airport,info) => {
        return axios.get(`/api/v1/flights-airport?airport=` + airport +'&info='+info);
    },
    fetchCallsign: (callsign) => {
        return axios.get(`/api/v1/flights-callsign?callsign=` + callsign);
    },
    fetchEstimated: (time) => {
        return axios.get(`/api/v1/flights-estimatedflighttime?time=` + time);
    },
    fetchTimeOf: (before,date,type) => {
        return axios.get(`/api/v1/flights-withtimeoff?before=` + before+'&date='+date+'&info='+type);
    },


};

export default HistoAirService;