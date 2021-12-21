import Account from './Account'

const Accounts = ({ accounts }) => {
    return (
        <>
        {accounts.map((account) => (
            <Account key={account.accountId} account={account} />
        ))}
        </>
    )
}

export default Accounts