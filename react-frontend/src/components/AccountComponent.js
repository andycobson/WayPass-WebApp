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

    const removeItemHandler = (id) => {
        const updatedAccounts = accounts.filter(account => account.accountId !== id);
        setAccounts(updatedAccounts);
    }

    const addItemHandler = (acc) => {
        setAccounts(accounts => [...accounts, acc]);
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
                    <Accounts accounts={accounts} removeItem={removeItemHandler} />
                    <AddAccount addItem={addItemHandler} />
                </tbody>
            </table>
        </div>
    )
}

export default AccountComponent