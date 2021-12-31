import Account from './Account'

const Accounts = ({ accounts, removeItem}) => {

    return (
        <>
        {accounts.map((account) => (
            <Account key={account.accountId} account={account} removeItemHandler={removeItem} />
        ))}
        </>
    )
}

export default Accounts