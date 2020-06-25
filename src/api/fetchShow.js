import axios from 'axios';

const fetchShow = url => {

    return axios.get(url)
    .then( response => response)
    .catch(error => error)

}

export default fetchShow;