import { FC, useEffect, useState } from 'react';
import makeAuthenticatedRequest from '../auth/MakeAuthenticatedRequest';
import { useNavigate } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage';

const Profile: FC = (): JSX.Element => {
  const [profileData, setProfileData] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Check if the user is authenticated
        const isAuthenticated = !!localStorage.getItem('access_token');
        
        //debugging purposee
        console.log(isAuthenticated);
        console.log(localStorage.getItem('auth'));

        if (!isAuthenticated) {
          // If not authenticated, redirect to the login page
          navigate('/login');
          return;
        }

        // If authenticated, fetch profile data
        //As of now response is not a concern as mentioned in mail
        //const data = await makeAuthenticatedRequest('user/get-profile', 'GET');
        console.log('access_token is found');
        setProfileData('access_token is found');

      } 
      catch (error) {
        console.error('Error fetching profile data:', error);
        alert('Error fetching profile data');
      }
    };

    fetchData();
  }, [navigate]);  

  return (
    <div>
     
      {profileData ? (
        <div>
            <ProfilePage/>   
        </div>
      ) : (
        <div>
            <p>It appears that access to this page is restricted. Redirecting to the login page.</p>
        </div>
      )
      }
    </div>
  );
};

export default Profile;


 