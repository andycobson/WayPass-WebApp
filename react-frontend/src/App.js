import AccountComponent from './components/AccountComponent';
import VHeader from './components/VHeader'

function App() {
  return (
    <div className="container">
      <VHeader title={"Command"}/>
      <AccountComponent />
    </div>
  );
}

export default App;
