import Button from './Button'
const VHeader = ({ title }) => {
    const onClick = () =>{
        console.log('Log Out')
    }

    return (
        <header className='header'>
            {/*<h1>{title}</h1>*/}
            <Button color='lightblue' text='Log Out' onClick={onClick}/>
        </header>
    )
}

VHeader.defaultProps = {
    title: 'Add Account',
}

export default VHeader