
import './App.css';
import FullName  from './component/profil/FullName';
import ProfilePhoto from './component/profil/ProfilePhoto';
import Address from './component/profil/Address';

function App() {
  return (
    <div className="App">
     <ProfilePhoto/>
     <FullName/>
     <Address/>
    </div>
  );
}

export default App;
