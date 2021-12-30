import { useState } from 'react'
import Button from './Button'
import AccountService from '../services/AccountService'

const AddAccount = () => {
    const [serviceName, setService] = useState('')
    const [accountName, setUsername] = useState('')
    const [hashedPassword, setPassword] = useState('')
    const [pin, setPin] = useState('')

    const setThePost = () =>{

        // Check if the service name input field is empty
        if(!serviceName){
            alert('Please enter a service name')
            return
        }

        if(!accountName){
            alert('Please enter a username')
            return
        }

        if(!hashedPassword){
            alert('Please enter a password')
            return
        }

        if(!pin){
            alert('Please enter a pin')
            return
        }

        // Create json to send to service
        let prod = {
            "accountId": "null",
            "serviceName": serviceName,
            "accountName": accountName,
            "hashedPassword": hashedPassword,
            "pin": pin
        }

        // Use service to send post json and to add the account
        AccountService.addAccount(prod);

        // Clear the form text fields
        setService('')
        setUsername('')
        setPassword('')
        setPin('')
    }

    return (
        <tr>
            <td><input type='text' placeholder='Add Service Name' value={serviceName} onChange={(e) => setService(e.target.value)} /></td>
            <td><input type='text' placeholder='Add Username' value={accountName} onChange={(e) => setUsername(e.target.value)} /></td>
            <td><input type='text' placeholder='Add Password' value={hashedPassword} onChange={(e) => setPassword(e.target.value)} /></td>
            <td><input type='text' placeholder='Add Pin' value={pin} onChange={(e) => setPin(e.target.value)} /></td>
            <td><Button color='steelblue' text="Save" onClick={setThePost} /></td>
        </tr>
    )
}

export default AddAccount