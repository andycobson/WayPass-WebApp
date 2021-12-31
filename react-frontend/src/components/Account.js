import Button from './Button'
import { useState } from 'react'
import AccountService from '../services/AccountService'

const Account = ({ account, removeItemHandler }) => {

    const [pin, setPin] = useState('')
    const [passVal, setPassVal] = useState('********')
    
    const [serviceName, setService] = useState(account.serviceName)
    const [accountName, setUsername] = useState(account.accountName)
    const [hashedPassword, setPassword] = useState('')
    const [mode, setMode] = useState('standard');

    function retreivePassword(hdlType) {
        if(pin === ''){ return; }

        let prod = {
            "accountId": account.accountId,
            "serviceName": account.serviceName,
            "accountName": account.accountName,
            "hashedPassword": passVal,
            "pin": pin
        }

        AccountService.checkPin(prod).then((res) => {
            if(hdlType === "Edit"){
                reflectEdit(res.data);
            } else if (hdlType === "View") {
                handleView(res.data);
            }
        }).catch(err => { console.log(err) });
    }

    function reflectEdit(pass){
        setPassword(pass);
        if(pass === "WP" || pass === "NULL"){
            setPin("Wrong Pin");
        }else if(pass === ''){
            console.log("Empty");
        }else{
            setMode('edit');
        }
    }

    function handleView(pass){
        if(pass === "WP"){
            setPin("Wrong Pin");
        } else{
            setPassVal(pass);
        }
    }

    function saveAccountChange() {
        let prod = {
            "accountId": account.accountId,
            "serviceName": serviceName,
            "accountName": accountName,
            "hashedPassword": hashedPassword,
            "pin": pin
        }

        AccountService.updateAccount(prod);
        setPin('')
        setMode("standard")
    }

    function removeAccount() {
        AccountService.deleteAccount(account.accountId);
        removeItemHandler(account.accountId);
    }

    if (mode === "standard"){
        return (
            <tr>
                <td>{serviceName}</td>
                <td>{accountName}</td>
                <td>{passVal}</td>
                <td><input type="text" placeholder="Enter Pin" value={pin} onChange={(e) => setPin(e.target.value)} /></td>
                <td><Button color='steelblue' text="Edit" onClick={retreivePassword.bind(this, "Edit")} /><Button color='steelblue' text="View" onClick={retreivePassword.bind(this,"View")} /></td>
            </tr>
        )
    } else if (mode === "edit"){
        return (
            <tr>
                <td><input type='text' value={serviceName} onChange={(e) => setService(e.target.value)} /></td>
                <td><input type='text' value={accountName} onChange={(e) => setUsername(e.target.value)} /></td>
                <td><input type='text' value={hashedPassword} onChange={(e) => setPassword(e.target.value)} /></td>
                <td><input type="text" placeholder="Enter Pin" value={pin} onChange={(e) => setPin(e.target.value)} /></td>
                <td><Button color='steelblue' text="Save" onClick={saveAccountChange.bind(this)} /><Button color='steelblue' text="Remove" onClick={removeAccount.bind(this)} /></td>
            </tr>
        )
    }
}

export default Account