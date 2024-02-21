import React, { useState } from 'react'
import MarkdownEditor from './markdownEditor'
import './App.css'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Markdown Editor</h1>
      </header>
      <MarkdownEditor />
    </div>
  )
}

export default App
