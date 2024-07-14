import React, { useState, useEffect, useRef, useCallback } from 'react';
import { getDocs, query, where } from "firebase/firestore";
import { userCollection } from '../../firebase';
import { useAuth } from '../../contexts/AuthContext';

const ChatBotComponent = ({ url="https://blogga-chatbot.streamlit.app/?embed=True" }) => {
  const [showChat, setShowChat] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [user, setUser] = useState(null);
  const iframeRef = useRef(null);

  const {currentUser} = useAuth()

  const toggleChat = () => {
    setShowChat(!showChat);
  };
  if (currentUser){
    
  }
  const getUserName = useCallback(async () => {
    const q1 = query(userCollection, where("email", "==", currentUser?.email));
    const querySnapshot1 = await getDocs(q1);
    if (!querySnapshot1.empty) {
      const userDoc = querySnapshot1.docs[0];
      const userData = userDoc.data();
      setUser({ username: userData.username });
    }
  }, [currentUser?.email]);

  useEffect(() => {
    if (showChat && !iframeLoaded) {
      setIframeLoaded(true);
    }
  }, [showChat, iframeLoaded]);

  useEffect(() => {
    const handleMessage = (event) => {
      console.log('Message received from iframe:', event.data);
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  useEffect(() => {
    if (iframeLoaded && user) {
      const iframeWindow = iframeRef.current.contentWindow;
      iframeWindow.postMessage({ type: 'setUser', user: user.username }, url);
    }
  }, [iframeLoaded, user, url]);

  useEffect(() => {
    getUserName();
  }, [getUserName]);

  return (
    <div className={`fixed bottom-4 right-4 z-50 ${showChat ? 'show' : ''}`}>
      <button
        className="bg-gray-800 p-4 rounded-full shadow-lg hover:bg-gray-700 transition-colors"
        onClick={toggleChat}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="w-6 h-6 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 8h10M7 12h4m1 8l-5.5-5.5a1 1 0 00-.71-.3H4a1 1 0 01-1-1V6a1 1 0 011-1h16a1 1 0 011 1v11a1 1 0 01-1 1h-3.09a1 1 0 00-.71.3L12 20z"
          />
        </svg>
      </button>
      <div className={`fixed bottom-16 right-4 w-[400px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden ${showChat ? 'block' : 'hidden'}`}>
        <div className="bg-gray-800 text-white p-2 flex justify-between items-center">
          
          <button onClick={toggleChat}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-4 h-4 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        {iframeLoaded && (
          <iframe
            title="ChatBot"
            src={url}
            className="w-full h-full border-0"
            ref={iframeRef}
            onLoad={() => setIframeLoaded(true)}
          />
        )}
      </div>
    </div>
  );
};

export default ChatBotComponent;
