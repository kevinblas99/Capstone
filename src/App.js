import HomePage from './Pages/HomePage';
import Footer from './Components/Footer';
import BookingPage from './Pages/BookingPage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import ConfirmationPage from './Components/ConfirmationPage';
import Error from './Components/Error';
import Login from './Components/Login';
import Please from './Components/Please';


function App(){
  return (
    <ChakraProvider>
      <>
      <Router>
        <Please/>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="/reservations" element={<BookingPage /> }></Route>
        <Route path="/confirmation" element={<ConfirmationPage /> }></Route>
        <Route path="*" element={<Error />}></Route>
        </Routes>
        <Footer />
      </Router>
    </>
    </ChakraProvider>

  );
}

export default App;
