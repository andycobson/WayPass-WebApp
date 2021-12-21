import axios from 'axios';

const ACCOUNT_REST_API_URL = "http://localhost:8083/api/v1/accounts";

class AccountService {

    getAccounts(){
        return axios.get(ACCOUNT_REST_API_URL);
    }

    addAccount(accdata){
        return axios.post("http://localhost:8083/api/v1/account",accdata);
    }
}

export default new AccountService()
