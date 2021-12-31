import axios from 'axios';

const ACCOUNT_REST_API_URL = "http://localhost:8083/api/v1/accounts";

class AccountService {

    getAccounts(){
        return axios.get(ACCOUNT_REST_API_URL);
    }

    addAccount(accdata){
        return axios.post("http://localhost:8083/api/v1/account",accdata);
    }

    checkPin(accdata){
        return axios.post("http://localhost:8083/api/v1/account/view",accdata);
    }

    updateAccount(accdata){
        return axios.put("http://localhost:8083/api/v1/account", accdata);
    }

    deleteAccount(accid){
        return axios.delete("http://localhost:8083/api/v1/account/" + accid);
    }
}


export default new AccountService()
