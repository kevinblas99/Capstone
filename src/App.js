import HomePage from './Pages/HomePage';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import BookingPage from './Pages/BookingPage';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import BookingForm from './Components/BookingForm';
import { ChakraProvider } from '@chakra-ui/react';
import ConfirmationPage from './Components/ConfirmationPage';
import { AlertProvider } from './Hooks/alertContext';
import Alert from './Hooks/Alert';

function App(){
  return (
    <ChakraProvider>
      <AlertProvider>
    <div className="App">
      <Router>
        <Nav />
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/reservations" element={<BookingPage /> }></Route>
        <Route path="/confirmation" element={<ConfirmationPage /> }></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
    </AlertProvider>
    </ChakraProvider>

  );
}

export default App;
