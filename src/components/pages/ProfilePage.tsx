import React from 'react';
import { useSpring, animated } from 'react-spring';
import styled from '@emotion/styled';
import Navbar from './Navbar';

const ProfilePage = () => {
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 1000 },
  });

  const contentSlideIn = useSpring({
    from: { opacity: 0, transform: 'translateY(30px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 },
    delay: 500, 
  });

  return (
    <>
      <Navbar />
      <AnimatedContainer style={fadeIn}>
        <ContentContainer style={contentSlideIn}>
          <LeftSide>
            {/* Add your SVG profile image with a link */}
            <ProfileLink href="#">
              <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="11" stroke="black" strokeWidth="2" />
                <path d="M12 14.5C14.4853 14.5 16.5 12.4853 16.5 10C16.5 7.51472 14.4853 5.5 12 5.5C9.51472 5.5 7.5 7.51472 7.5 10C7.5 12.4853 9.51472 14.5 12 14.5Z" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 21L15.25 15.25" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </ProfileLink>
          </LeftSide>
          <RightSide>
            <h1>Welcome to Your Profile</h1>
            <ProfileInfo>
              <p>Name: John Doe</p>
              <p>Email: john.doe@example.com</p>
              {/* Add more profile details as needed */}
            </ProfileInfo>
          </RightSide>
        </ContentContainer>
      </AnimatedContainer>
    </>
  );
};

const AnimatedContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 20px;

  @media (min-width: 768px) {
    padding: 40px; /* Increase padding on larger screens */
    h1 {
      font-size: 2.5rem; /* Increase font size on larger screens */
    }
  }
`;

const ContentContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;

const LeftSide = styled.div`
  margin-bottom: 20px;

  svg {
    width: 100px;
    height: 100px;
    /* Add styles to your SVG as needed */
  }

  @media (min-width: 768px) {
    margin-bottom: 0;
    svg {
      width: 150px; /* Increase SVG size on larger screens */
      height: 150px;
    }
  }
`;

const ProfileLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

const RightSide = styled.div`
  width: 100%;

  @media (min-width: 768px) {
    width: 60%; /* Adjust the width as needed */
  }
`;

const ProfileInfo = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;

  p {
    margin-bottom: 10px;
  }
`;

export default ProfilePage;
