import React, { useState } from 'react';

import Preview from '../../components/Preview/Preview';
import Editor from '../../components/Editor/Editor';

import './Home.css';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Title');
  const [subtitle, setSubtitle] = useState('Subtitle');
  const [text, setText] = useState('Text');
  const [font, setFont] = useState('Roboto');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview {...{ title, subtitle, text, font }} />
      <Editor {...{ title, setTitle, subtitle, setSubtitle, text, setText, font, setFont }} />
    </main>
  );
}
