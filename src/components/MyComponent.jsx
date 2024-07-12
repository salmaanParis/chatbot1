import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [showChat, setShowChat] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, consent });
  };

  const toggleChat = () => {
    setShowChat(!showChat);
  };

  const handleSkip = () => {
    navigate('/chat');
  };

  return (
    <div>
      <div style={styles.iconContainer} onClick={toggleChat}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/0dc7f0f52f7dfc64c74c4a9a084b51d8094c1fc14f23f3439b6acca7528541b8?"
          className="img"
          alt="chat icon"
        />
      </div>

      {showChat && (
        <div style={styles.container}>
          <div style={styles.headerContainer}>
            <h2 style={styles.header}>Hi There</h2>
            <p style={styles.subheader}>A few minutes</p>
          </div>
          <h1 style={styles.title}>Get Started Now</h1>
          <div onSubmit={handleSubmit}>
            <div style={styles.inputContainer}>
              <label>
                Name
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  style={styles.input}
                />
              </label>
            </div>
            <div style={styles.inputContainer}>
              <label>
                Email address
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  style={styles.input}
                />
              </label>
            </div>
            <div style={styles.checkboxContainer}>
              <label>
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                />
                I give my consent to use my data as per the regulation.
              </label>
            </div>
            <button type="submit" style={styles.button}>
              Get started
            </button>
          </div>
          <button style={styles.skipButton} onClick={handleSkip}>Skip</button>
        </div>
      )}

      <style jsx>{`
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 100%;
          fill: #292323;
          max-width: 70px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

const styles = {
  iconContainer: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    cursor: 'pointer',
    zIndex: 1000,
  },
  container: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '300px',
    margin: 'auto',
    padding: '0 20px 20px 20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    height: '450px',
    position: 'fixed',
    bottom: '70px',
    right: '20px',
    backgroundColor: '#fff',
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
  },
  headerContainer: {
    backgroundColor: '#363830',
    padding: '10px 0',
    width: 'calc(100% + 40px)',
    margin: '0 -20px 10px -20px',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
  },
  header: {
    margin: 0,
    color: 'white',
    padding: '5px',
    fontSize: '17px',
    marginLeft: '16px',
  },
  subheader: {
    margin: 0,
    color: '#777',
    fontSize: '12px',
    marginLeft: '45px',
  },
  title: {
    marginBottom: '18px',
    color: '#333',
    marginLeft: '7px',
    fontSize: '28px',
  },
  inputContainer: {
    marginBottom: '10px',
  },
  input: {
    width: '95%',
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '9px',
  },
  checkboxContainer: {
    marginBottom: '20px',
    marginTop: '45px',
    textAlign: 'center',
  },
  checkboxLabel: {
    // fontWeight: 'bold',
    fontSize: '16px',
  },
  
  button: {
    width: '40%',
    padding: '10px',
    marginLeft: '100px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s ease',
  },
  skipButton: {
    width: '100%',
    padding: '10px',
    backgroundColor: 'transparent',
    color: '#164c87',
    border: 'none',
    cursor: 'pointer',
    textAlign: 'center',
    marginTop: '10px',
    fontSize: '16px',
    marginLeft: '10px',
  },
};

export default MyComponent;



