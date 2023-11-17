import styled from '@emotion/styled';
import  { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login: FC = (): JSX.Element => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = async () => {
    try {
        const response = await fetch(
            'https://dev.api.infigon.app/auth/signin-with-phone-and-password', 
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    phoneNumber,
                    password,
                }),
            });

        if (response.ok) {

            const data = await response.json();
            //localStorage.setItem('access_token', data.access_token);
            //for demo purpose used hardcoded value of token
            localStorage.setItem('access_token', '914455887788');
            
            //navigate('/profile');
            window.location.href = '/profile';
        } 
        else {

            console.error('Login failed');
            alert('Login failed: No response');
        }
    } 
    catch (error) {
            console.error('Error during login:', error);
            alert('Login failed : Error');
    }
  };


return (
    <Container>
      <h1>Login</h1>
      <Form>
        <InputLabel>
          Phone Number:
          <Input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </InputLabel>
        <InputLabel>
          Password:
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </InputLabel>
        <Button onClick={handleLogin}>Login</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;

  @media (min-width: 768px) {
    /* Adjust styles for larger screens */
    h1 {
      font-size: 2rem;
    }
  }
`;

const Form = styled.form`
  width: 100%;
  max-width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    /* Adjust styles for larger screens */
    max-width: 400px;
  }
`;

const InputLabel = styled.label`
  display: block;
  margin: 10px 0;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  font-size: 1rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
`;
export default Login;