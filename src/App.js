import Header from './components/Header';
import Footer from './components/Footer'
import ImgCarousel from './components/ImgCarousel';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactForm from './components/ContactForm';
import AllActivitiesScreen from './Screens/AllActivitiesScreen';
import './App.css'
import { Container } from 'react-bootstrap'
import AboutUsScreen from './Screens/AboutUsScreen';
import Login from './components/Login'
import Register from './components/Register';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Container style={{ paddingBottom: '60px' }}>
        <Routes>
          <Route path='/' element={<ImgCarousel />} />
          <Route path='/Contactus' element={<ContactForm />} />
          <Route path='/activities' element={<AllActivitiesScreen />} />
          <Route path='/aboutus' element={<AboutUsScreen />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
        </Routes>
      </Container>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
