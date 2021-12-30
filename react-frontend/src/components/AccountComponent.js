import Accounts from './Accounts'
import { useState, useEffect } from 'react'
import AccountService from '../services/AccountService'
import AddAccount from './AddAccount'

const AccountComponent = (props) => {
    const [accounts, setAccounts] = useState([]);


    const fetchAccounts = () => {
        AccountService.getAccounts().then((res) => {
            setAccounts(res.data);
        });
    }

    // useEffect is similar to componentDidMount
    useEffect(() => {
        fetchAccounts();
    }, []);

    return (
        <div>
            <h1 className = "text-center">Account List</h1>
            <table className = "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th> Service</th>
                        <th> Username</th>
                        <th> Password</th>
                    </tr>
                </thead>
                <tbody>
                    <Accounts accounts={accounts} />
                    <AddAccount />
                </tbody>
            </table>
        </div>
    )
}

export default AccountComponent