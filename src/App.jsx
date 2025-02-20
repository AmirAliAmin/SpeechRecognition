import React from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import { useClipboard } from '@mantine/hooks';

import './App.css'

function App() {
  const startListening = ()=> SpeechRecognition.startListening({continuous:true, language: 'en-PK'})
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const { copied, copy } = useClipboard();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  return (
    <>
      <div className='container'>
          <h2>Speech to Text Converter</h2>
          <br />
          <p>A React hook that converts speech from the microphone to text and make it avaible to your React</p>
        <div className='main-content'>
          {transcript}
        </div>
        <div className="btn-style">
          <button onClick={() => copy(transcript)}>{copied ? 'Copied!' : 'Copy to clipboard'}</button>
          <button onClick={startListening}>Start listening</button>
          <button onClick={()=>SpeechRecognition.stopListening()}>Stop listening</button>
        </div>
      </div>
    
    </>
  )
}

export default App