import React, { useState, useEffect } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import useWindowDimensions from "./hooks/useWindowDimensions";
import HomeMobile from "./components/HomeMobile";

const cardInfoData = [
  {
    id: 1,
    name: 'აქტიური ქულა',
    value: "135.00",
    color: '#3FDE81'
  },
  {
    id: 2,
    name: 'დასარიცხი ქულა',
    value: "55.00",
    color: '#FA9F65'
  },
  {
    id: 3,
    name: 'ფასდაკლება',
    value: "10%",
    color: '#1877BB'
  },
  {
    id: 4,
    name: 'საფეხური',
    value: "2",
    color: '#1877BB'
  },
  {
    id: 5,
    name: 'ტრანზაქციები',
    value: "7",
    color: '#34404E'
  },
  {
    id: 6,
    name: 'ჯამური შესყიდვები',
    value: '2,500 ლარი',
    color: '#34404E'
  },
]

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const windowDimensions = useWindowDimensions();
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    windowDimensions.width < 600? setIsMobile(true) : setIsMobile(false)
    localStorage.setItem("isMobile", isMobile.toString())
  },[ windowDimensions.width])


  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

    if (storedUserLoggedInInformation === '1') {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    localStorage.clear()
  };

  return (
    <React.Fragment>
      <MainHeader isMobile={isMobile} isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && !isMobile && <Home isMobile={isMobile} cardInfoData={cardInfoData} />}
        {isLoggedIn && isMobile && <HomeMobile isMobile={isMobile} cardInfoData={cardInfoData} />}
      </main>
    </React.Fragment>
  );
}

export default App;
