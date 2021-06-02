import React , {useState} from 'react'
import './App.css';
import FilesView from './components/filesView/FilesView';
import Header from './components/header'
import Sidebar from './components/sidebar'
import SideIcons from './components/sideIcons'
import GDLogo from './media/google-drive-logo.png'
import {user , provider, auth} from './firebase'

function App() {

  const [user , setUser] = useState();

  const handleLogin = () => {
    if(!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
      })
    }
  }

  return (
    <div className="app">
      {
        user ? (
          <>
          <Header userPhoto={user.photoURL}/>
      <div className="app__main">
      <Sidebar useremail={user.email}/>
      <FilesView useremail={user.email}/>
      <SideIcons />
      </div></>
        ) :
        (
          <div className='app__login'>
            <img src={GDLogo} alt="Drive" />
            <button onClick={handleLogin}>Log in to Drive</button>
            </div>
        )
      }
    </div>
  );
}

export default App;
