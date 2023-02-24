import Header from './Components/Header';
import Nav from './Components/Nav';
import Main from './Components/Main';
import Footer from './Components/Footer';
import React from 'react';

function App(){
  return (
    <Nav>

      <Footer>
    <Header />
    <Main />
    </Footer>

    </Nav>

  );
}

export default App;
