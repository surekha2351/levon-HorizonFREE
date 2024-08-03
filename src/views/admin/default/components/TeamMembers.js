import React from 'react';
import { useColorModeValue } from '@chakra-ui/react';

const TeamMembers = () => {
  // Dynamic styles using useColorModeValue
  const styles = {
    container: {
      backgroundColor: useColorModeValue('white', '#1b2559'),
      borderRadius: '10px',
      color: useColorModeValue('navy.900', 'white'),
      width: '250px',
      padding: '20px',
      boxShadow: useColorModeValue('0 4px 8px rgba(0, 0, 0, 0.1)', '0 4px 8px rgba(0, 0, 0, 0.2)'),
      height: '50vh',
    },
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '20px',
    },
    title: {
      fontSize: '1.2em',
      fontWeight: 'bold',
    },
    addButton: {
      backgroundColor: '#1E90FF',
      borderRadius: '50%',
      color: 'white',
      width: '24px',
      height: '24px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
    },
    memberCard: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: useColorModeValue('#f5f5f5', '#3C3F5A'),
      borderRadius: '10px',
      padding: '10px',
      marginBottom: '10px',
    },
    avatar: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      marginRight: '10px',
    },
    memberInfo: {
      display: 'flex',
      flexDirection: 'column',
    },
    name: {
      fontSize: '1em',
      fontWeight: 'bold',
    },
    position: {
      fontSize: '0.9em',
      color: useColorModeValue('gray.700', '#cccccc'),
    },
    menuButton: {
      marginLeft: 'auto',
      cursor: 'pointer',
    },
  };

  const members = [
    { name: 'Adela Parkson', position: 'Creative Director', avatar: 'https://www.profilebakery.com/wp-content/uploads/2023/04/Profile-Image-AI.jpg' },
    { name: 'Christian Mad', position: 'Product Designer', avatar: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?size=626&ext=jpg' },
    { name: 'Jason Statham', position: 'Junior Graphic Designer', avatar: 'https://i.pinimg.com/originals/b3/c9/df/b3c9dfa78c7a93bbd84f9c8fcbcc2a0e.jpg' },
  ];

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <span style={styles.title}>Team members</span>
        <div style={styles.addButton}>+</div>
      </div>
      {members.map((member, index) => (
        <div key={index} style={styles.memberCard}>
          <img style={styles.avatar} src={member.avatar} alt={member.name} />
          <div style={styles.memberInfo}>
            <span style={styles.name}>{member.name}</span>
            <span style={styles.position}>{member.position}</span>
          </div>
          <div style={styles.menuButton}>...</div>
        </div>
      ))}
    </div>
  );
}

export default TeamMembers;
