import axios from 'axios';

const fetchShow = url => {

    return axios.get(url)
    .then( response => response)

}

export default fetchShow;