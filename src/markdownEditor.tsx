import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './MarkdownEditor.module.css'


function MarkdownEditor() {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState('');
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(setTimeout(() => {
      setSuggestion('Lorem ipsum dolor sit amet, consectetur adipiscing elit.');
    }, 2000)); // 2 seconds delay
  }, [input]);

  const handleKeyDown = (event) => {
    if (event.key === 'Tab') {
      event.preventDefault();
      setInput(suggestion);
      setSuggestion('');
    }
  };

  return (
    <div onKeyDown={handleKeyDown}>
      <textarea
        value={input}
        onChange={e => setInput(e.target.value)}
        style={{ width: '100%', height: '200px' }}
      />
      <ReactMarkdown className={suggestion ? 'greyed-out' : ''}>
        {suggestion || input}
      </ReactMarkdown>
    </div>
  );
}

export default MarkdownEditor;

export default MarkdownEditor