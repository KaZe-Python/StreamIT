import React, {useContext} from 'react'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { AuthContext } from '../context/authContext';

const HomePage: React.FC = () => {
  const {auth} = useContext(AuthContext)

  return(
    <div className="flex flex-col min-h-screen bg-gray-600">
      <Navbar />
      <p>{auth ? "Auth" : "Log"}</p>
      <Footer />
    </div>
  )
}

export default HomePage;