import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';

const SecurityCard = () => {
  const iconUrl = 'https://i.pinimg.com/originals/3c/59/6e/3c596ee60c6aec400b19af6a3dbb3c44.png'; // Replace with your actual URL

  // Dynamic styles using useColorModeValue
  const styles = {
    cardContainer: {
      backgroundColor: useColorModeValue('white', '#1b2559'),
      borderRadius: '12px',
      color: useColorModeValue('secondaryGray.900', 'white'),
      padding: '20px',
      textAlign: 'center',
      width: '250px',
      boxShadow: useColorModeValue(
        '0px 18px 40px rgba(112, 144, 176, 0.12)',
        'unset'
      ),
    },
    icon: {
      marginBottom: '20px',
    },
    iconImage: {
      width: '40px', // Adjust width as needed
      height: '40px', // Adjust height as needed
      borderRadius: '50%',
    },
    title: {
      fontSize: '18px',
      marginBottom: '10px',
    },
    description: {
      fontSize: '14px',
      marginBottom: '20px',
    },
    button: {
      backgroundColor: '#6a4bc4',
      border: 'none',
      borderRadius: '8px',
      color: 'white',
      cursor: 'pointer',
      fontSize: '16px',
      padding: '10px 20px',
    },
  };

  return (
    <div style={styles.cardContainer}>
      <div style={styles.icon}>
        <img src={iconUrl} alt="Fingerprint Icon" style={styles.iconImage} />
      </div>
      <h2 style={styles.title}>Control card security in-app with a tap</h2>
      <p style={styles.description}>Discover our card's benefits, with one tap.</p>
      <button style={styles.button}>Cards</button>
    </div>
  );
};

export default SecurityCard;
