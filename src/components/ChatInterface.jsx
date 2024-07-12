import React, { useState, useEffect, useRef } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([
    { text: '👋 Hi there! How can I help?', sender: 'bot' },
    { text: 'Hi', sender: 'user' },
    { text: 'No problem.\nIf you need help you can type below to ask a question 👇', sender: 'bot' }
  ]);

  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
    }
  };

  const handleQuickReply = (text) => {
    setMessages([...messages, { text, sender: 'user' }]);
  };

  const measureTextWidth = (text, font = '16px Arial') => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    return context.measureText(text).width;
  };

  return (
    <div style={styles.chatContainer}>
      <div style={styles.headerContainer}>
        <h2 style={styles.headerText}>Hi There</h2>
        <p style={styles.subheader}>A few minutes</p>
      </div>
      <div style={styles.messagesContainer}>
        {messages.map((message, index) => {
          const isUser = message.sender === 'user';
          const textWidth = measureTextWidth(message.text);
          const adjustedWidth = Math.min(textWidth + 20, 300); // Add some padding and limit the max width

          return (
            <div
              key={index}
              style={{
                ...styles.messageContainer,
                ...(isUser ? styles.userMessageContainer : styles.botMessageContainer),
              }}
            >
              {message.sender === 'bot' && (
                <div style={styles.iconContainer}>
                  <div style={styles.icon} />
                </div>
              )}
              <div
                style={{
                  ...styles.message,
                  ...(isUser ? styles.userMessage : styles.botMessage),
                  maxWidth: adjustedWidth,
                }}
              >
                <p style={{ margin: 0 }}>{message.text}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div style={styles.quickReplies}>
        <button onClick={() => handleQuickReply('How can you help me?')} style={styles.quickReplyButton}>
          How can you help me?
        </button>
        <button onClick={() => handleQuickReply('Another quick reply')} style={styles.quickReplyButton}>
          Another quick reply
        </button>
      </div>
      <div style={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a reply..."
          style={styles.input}
        />
        <button onClick={handleSend} style={styles.sendButton}>Send</button>
      </div>
    </div>
  );
};

const styles = {
  chatContainer: {
    fontFamily: 'Arial, sans-serif',
    maxWidth: '300px',
    margin: 'auto',
    padding: '0 20px 20px 20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    height: '450px',
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: 'white',
  },
  headerContainer: {
    backgroundColor: '#363830', 
    padding: '10px 0',
    width: 'calc(100% + 40px)', 
    margin: '0 -20px 10px -20px', 
    borderTopLeftRadius: '10px', 
    borderTopRightRadius: '10px', 
  },
  headerText: {
    color: 'white',
    margin: 0,
    padding: '5px ',
    fontSize: '17px',
    marginLeft: '16px',
  },
  subheader: {
    color: '#777',
    margin: 0,
    fontSize: '12px',
    marginLeft: '45px',
  },
  messagesContainer: {
    flex: 1,
    overflowY: 'auto',
    marginBottom: '10px',
  },
  messageContainer: {
    display: 'flex',
    alignItems: 'flex-start',
    margin: '5px 0',
  },
  botMessageContainer: {
    alignSelf: 'flex-start',
  },
  userMessageContainer: {
    alignSelf: 'flex-end',
    flexDirection: 'row-reverse',
  },
  iconContainer: {
    display: 'flex',
    maxWidth: '32px',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: '10px',
    marginTop:'10px',
  },
  icon: {
    backgroundColor: '#fff4d0',
    borderRadius: '50%',
    minHeight: '28px',
    width: '28px', 
    height: '28px',
  },
  message: {
    padding: '10px',
    borderRadius: '10px',
  },
  userMessage: {
    backgroundColor: '#000',
    color: '#fff',
  },
  botMessage: {
    backgroundColor: '#f1f1f1',
    color: '#000',
  },
  quickReplies: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    marginBottom: '10px',
  },
  quickReplyButton: {
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px',
    cursor: 'pointer',
    marginBottom: '10px',
    maxWidth: '80%',
    textAlign: 'right',
    fontSize: '15px',
  },
  inputContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginRight: '10px',
  },
  sendButton: {
    padding: '10px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ChatInterface;








