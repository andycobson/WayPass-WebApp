import Button from './Button'
import { useState } from 'react'
const Account = ({ account }) => {
    const [pin, setPin] = useState('')
    const [passVal, setPassVal] = useState('********')
    const [serviceTd, setServiceTd] = useState(account.serviceName)
    const [accountTd, setAccountTd] = useState(account.accountName)


    const handleEdit = () => {
        setServiceTd(<input type="text" value={account.serviceName}/>)
        setAccountTd(<input type="text" value={account.accountName}/>)
    }

    const handleView = () => {

    }

    return (
        <tr>
            <td>{serviceTd}</td>
            <td>{accountTd}</td>
            <td>{passVal}</td>
            <td><input type="text" placeholder="Enter Pin" value={pin} onChange={(e) => setPin(e.target.value)} /></td>
            <td><Button color='steelblue' text="Edit" onClick={handleEdit} /><Button color='steelblue' text="View" onClick={handleView}/></td>
        </tr>
    )
}

export default Account