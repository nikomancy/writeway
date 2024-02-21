import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './MarkdownEditor.module.css'

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('y u no write markdown?')

  return (
    <div className={styles.editorContainer}>
      <textarea
        className={styles.textarea}
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder='Write some markdown'
      />
      <div className={styles.markdown}>
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}

export default MarkdownEditor