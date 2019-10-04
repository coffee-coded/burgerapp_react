import axios from 'axios'


const instance = axios.create({
    baseURL:"https://burgerapp-react-36649.firebaseio.com/"
});

export default instance;