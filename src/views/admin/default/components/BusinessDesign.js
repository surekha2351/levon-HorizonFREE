import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';

const BusinessDesign = () => {
  // Dynamic styles using useColorModeValue
  const styles = {
    card: {
      backgroundColor: useColorModeValue('white', '#1b2559'),
      borderRadius: '10px',
      color: useColorModeValue('secondaryGray.900', 'white'),
      width: '250px',
      padding: '20px',
      boxShadow: useColorModeValue('0 4px 8px rgba(0, 0, 0, 0.1)', '0 4px 8px rgba(0, 0, 0, 0.2)'),
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '50vh',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    icon: {
      width: '24px',
      height: '24px',
      marginRight: '10px',
      borderRadius: '50%',
    },
    title: {
      fontSize: '1em',
      fontWeight: 'bold',
    },
    subTitle: {
      fontSize: '0.9em',
      color: useColorModeValue('gray.600', '#cccccc'),
    },
    description: {
      fontSize: '1.1em',
      margin: '10px 0',
    },
    infoContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      margin: '10px 0',
    },
    infoItem: {
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.9em',
      color: useColorModeValue('gray.600', '#cccccc'),
    },
    infoIcon: {
      marginRight: '5px',
      borderRadius: '50%',
      height: '20px',
    },
    avatarsContainer: {
      display: 'flex',
      alignItems: 'center',
    },
    avatar: {
      width: '24px',
      height: '24px',
      borderRadius: '50%',
      marginRight: '-10px',
      border: useColorModeValue('2px solid white', '2px solid #2C2F48'),
    },
    buttonContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    button: {
      backgroundColor: '#7B61FF',
      borderRadius: '20px',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      cursor: 'pointer',
    },
  };

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img
          style={styles.icon}
          src="https://tse4.mm.bing.net/th?id=OIP.NyQa4qaoJa_WriDPCqAMuAHaGK&pid=Api&P=0&h=180" // Replace with the actual icon URL
          alt="Business Design"
        />
        <div>
          <div style={styles.title}>Business Design</div>
          <div style={styles.subTitle}>New lesson is available</div>
        </div>
      </div>
      <div style={styles.description}>
        What do you need to know to create better products?
      </div>
      <div style={styles.infoContainer}>
        <div style={styles.infoItem}>
          <img
            style={styles.infoIcon}
            src="https://tse3.mm.bing.net/th?id=OIP.i6A64EqlFkzU8H3VQfAK1gHaHa&pid=Api&P=0&h=180" // Replace with the actual icon URL
            alt="Time"
          />
          85 mins
        </div>
        <div style={styles.infoItem}>
          <img
            style={styles.infoIcon}
            src="https://tse3.mm.bing.net/th?id=OIP.6UwBIs7eD2W1xEqm4Fde5wHaHa&pid=Api&P=0&h=180" // Replace with the actual icon URL
            alt="Format"
          />
          Video format
        </div>
      </div>
      <div style={styles.avatarsContainer}>
        <img
          style={styles.avatar}
          src="https://tse4.mm.bing.net/th?id=OIP.XSZAFm-5JI7nriDLwZqRQQHaE7&pid=Api&P=0&h=180" // Replace with the actual avatar URL
          alt="User 1"
        />
        <img
          style={styles.avatar}
          src="https://www.profilebakery.com/wp-content/uploads/2023/04/LINKEDIN-Profile-Picture-AI.jpg" // Replace with the actual avatar URL
          alt="User 2"
        />
        <img
          style={styles.avatar}
          src="https://tse2.explicit.bing.net/th?id=OIP.GeTD8MSfyfpQYbOsUDa5IQHaHZ&pid=Api&P=0&h=180" // Replace with the actual avatar URL
          alt="User 3"
        />
        <img
          style={styles.avatar}
          src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png" // Replace with the actual avatar URL
          alt="User 4"
        />
        <div style={{ marginLeft: '10px' }}>18+</div>
      </div>
      <div style={styles.buttonContainer}>
        <button style={styles.button}>Get Started</button>
      </div>
    </div>
  );
}

export default BusinessDesign;
