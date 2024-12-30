import React, { useState, useEffect } from "react";

const Quotes = () => {
  const quotes = [
    { text: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
    { text: "The best revenge is massive success.", author: "Frank Sinatra" },
    { text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { text: "Life is what happens when you’re busy making other plans.", author: "John Lennon" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { text: "A goal without a plan is just a wish.", author: "Antoine de Saint-Exupéry" },
    { text: "Discipline is the bridge between goals and accomplishment.", author: "Jim Rohn" },
    { text: "By failing to prepare, you are preparing to fail.", author: "Benjamin Franklin" },
    { text: "The future depends on what we do in the present.", author: "Mahatma Gandhi" },
  ];

  const [currentQuote, setCurrentQuote] = useState({});

  useEffect(() => {
    getRandomQuote(); 
    const interval = setInterval(getRandomQuote, 5000); 

    return () => clearInterval(interval);
  }, []);

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div
      style={{
        padding: "20px",
        textAlign: "center",
        margin: "20px auto",
        maxWidth: "400px",
      }}
    >
      <p style={{ fontSize: "18px", fontStyle: "italic", marginBottom: "10px" }}>
        "{currentQuote.text}"
      </p>
      <p style={{ fontSize: "16px", fontWeight: "bold" }}>- {currentQuote.author}</p>
    </div>
  );
};

export default Quotes;
