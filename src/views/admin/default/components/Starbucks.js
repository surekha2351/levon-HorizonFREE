import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';

const Starbucks = () => {
  // Dynamic styles using useColorModeValue
  const styles = {
    card: {
      backgroundColor: useColorModeValue('white', '#1b2559'),
      borderRadius: '10px',
      color: useColorModeValue('secondaryGray.900', 'white'),
      width: '250px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '50vh',
      boxShadow: useColorModeValue('0 4px 8px rgba(0, 0, 0, 0.1)', '0 4px 8px rgba(0, 0, 0, 0.2)'),
    },
    image: {
      width: '100%',
      borderRadius: '10px',
    },
    content: {
      textAlign: 'center',
      marginTop: '20px',
    },
    logoHeadingContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '10px',
      marginBottom: '10px',
    },
    logo: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
    },
    heading: {
      margin: '0',
    },
    paragraph: {
      margin: '0',
      fontSize: '0.9em',
      color: useColorModeValue('gray.600', '#cccccc'),
    }
  };

  return (
    <div style={styles.card}>
      <img
        style={styles.image}
        src="https://tse4.mm.bing.net/th?id=OIP.mWrLKf6zXus1x6NO7tE_pQHaFU&pid=Api&P=0&h=180"
        alt="Starbucks"
      />
      <div style={styles.content}>
        <div style={styles.logoHeadingContainer}>
          <img
            style={styles.logo}
            src="https://tse4.mm.bing.net/th?id=OIP.ISze1hg81rRQtKXdUMFeIAHaHU&pid=Api&P=0&h=180"
            alt="Starbucks Logo"
          />
          <h3 style={styles.heading}>Starbucks</h3>
        </div>
        <p style={styles.paragraph}>10% cashback & off</p>
      </div>
    </div>
  );
}

export default Starbucks;
