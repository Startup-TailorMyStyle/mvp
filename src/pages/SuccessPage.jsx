import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCheckCircle } from 'react-icons/ai'; // Icon de succes

const SuccessPage = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); // Navighează înapoi la pagina principală
  };

  return (
    <div style={styles.container}>
      <AiOutlineCheckCircle style={styles.icon} />
      <h1 style={styles.title}>Plata a fost efectuată cu succes!</h1>
      <p style={styles.message}>
        Produsele tale vor fi predate curierului în cel mai scurt timp. Mulțumim că ai ales serviciile noastre!
      </p>
      <button style={styles.button} onClick={handleBackToHome}>
        Înapoi la Pagina Principală
      </button>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f9f9f9',
    padding: '20px',
    textAlign: 'center',
  },
  icon: {
    fontSize: '5rem',
    color: '#4caf50',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2rem',
    color: '#4caf50',
    marginBottom: '20px',
  },
  message: {
    fontSize: '1.2rem',
    color: '#555',
    marginBottom: '30px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#4caf50',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default SuccessPage;
