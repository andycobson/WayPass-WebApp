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
        setAccounts([...accounts, acc]);
    }

    // useEffect is similar to componentDidMount
    useEffect(() => {
        fetchAccounts();
    }, []);

    return (
        <tbody>
            <Accounts accounts={accounts} removeItem={removeItemHandler} />
            <AddAccount addItem={addItemHandler} />
        </tbody>
    )
}

export default AccountComponent