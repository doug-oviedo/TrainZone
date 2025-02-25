import React, { useContext } from 'react';
import { UserContext } from '../context/userContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get('/logout'); // Assuming your backend handles the logout process
      setUser(null); // Clear the user data
      toast.success('Logout Successful');
      navigate('/'); // Redirect to the home page or any other desired page
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Welcome to Our App{user ? `, ${user.name}` : ''}!</h1>
      {user && (
        <button onClick={handleLogout}>Logout</button>
      )}
      {/* Other content of the home page */}
    </div>
  );
};

export default Home;
