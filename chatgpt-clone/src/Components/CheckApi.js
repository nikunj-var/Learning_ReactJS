import React, { useState } from 'react';

const ChatComponent = () => {
  const [inputText, setInputText] = useState('');
  const [responseText, setResponseText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer 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'
          },
          body: JSON.stringify({
            prompt: inputText,
            max_tokens: 50
          })
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.choices && data.choices.length > 0) {
        setResponseText(data.choices[0].text);
      } else {
        setResponseText("No valid response received from the API.");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Chat with AI</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Type your message..."
          rows={4}
          cols={50}
        />
        <button type="submit">Submit</button>
      </form>
      {responseText && (
        <div>
          <h2>AI's Response:</h2>
          <p>{responseText}</p>
        </div>
      )}
    </div>
  );
};

export default ChatComponent;
