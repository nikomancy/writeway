import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'

const MarkdownEditor: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>('y u no write markdown?')

  return (
    <div>
      <textarea
        value={markdown}
        onChange={(e) => setMarkdown(e.target.value)}
        placeholder='Write some markdown'
      />
      <ReactMarkdown>{markdown}</ReactMarkdown>
    </div>
  )
}

export default MarkdownEditor