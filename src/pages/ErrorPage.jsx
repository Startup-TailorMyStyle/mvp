import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineCloseCircle } from 'react-icons/ai'; // Icon de eroare

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleRetryPayment = () => {
    navigate('/cart'); // Navighează înapoi la pagina coșului de cumpărături sau unde reîncepe procesul de plată
  };

  return (
    <div style={styles.container}>
      <AiOutlineCloseCircle style={styles.icon} />
      <h1 style={styles.title}>Procesarea plății a eșuat</h1>
      <p style={styles.message}>
        Cardul tău nu a fost debitat. Te rugăm să reîncerci procesul de plată.
      </p>
      <button style={styles.button} onClick={handleRetryPayment}>
        Reîncepe Plata
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
    backgroundColor: '#fef2f2',
    padding: '20px',
    textAlign: 'center',
  },
  icon: {
    fontSize: '5rem',
    color: '#f44336',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2rem',
    color: '#f44336',
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
    backgroundColor: '#f44336',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ErrorPage;