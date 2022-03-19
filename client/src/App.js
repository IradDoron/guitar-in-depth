import ChordCard from './components/ChordCard';
import styled from 'styled-components';
import NotesFormatBox from './components/NotesFormatBox';
import { useEffect, useState } from 'react';
import { Scale } from '@tonaljs/tonal';
import NotesNames from './components/formats/NotesNames';
import Notation from './components/formats/Notation';
//import Notes from './Notes';

const Body = styled.div`
  background-color: #333;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  & > * {
    margin-top: 30px;
  }
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
`;

function App() {
  const [mode, setMode] = useState('Get mode');
  const [tonic, setTonic] = useState('Get tonic');
  const [notes, setNotes] = useState(null);

  const tonicsArraySharps = ['C', 'G', 'D', 'A', 'E', 'B', 'F#', 'C#'];
  const tonicsArrayFlats = ['F', 'Bb', 'Eb', 'Ab', 'Db', 'Gb', 'Cb'];
  const tonicsArrayAll = [...tonicsArraySharps, ...tonicsArrayFlats];
  const modesArray = [
    'Ionian',
    'Dorian',
    'Phrygian',
    'Lydian',
    'Mixolydian',
    'Aeolian',
    'Locrian',
  ];

  function getRandItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function handleTonic() {
    setTonic(getRandItem(tonicsArrayAll));
  }

  function handleMode() {
    setMode(getRandItem(modesArray));
  }

  useEffect(() => {
    let tonicFormated = `${tonic.toLowerCase()}5`;
    let modeFormated = `${mode.toLowerCase()}`;
    const scaleFormated = `${tonicFormated} ${modeFormated}`;
    const scaleObj = Scale.get(scaleFormated);
    if (scaleObj.empty) {
      console.log('Scale not found');
    } else {
      const notesFormated = scaleObj.notes.map((item) => {
        return item.slice(0, item.length - 1);
      });
      setNotes(notesFormated);
    }
  }, [mode, tonic]);

  return (
    <>
      <Body>
        <Col>
          <ChordCard
            handleTonic={handleTonic}
            handleMode={handleMode}
            mode={mode}
            tonic={tonic}
          />
        </Col>
        <Col>
          <NotesFormatBox name="Note's names">
            <NotesNames notes={notes} />
          </NotesFormatBox>
          <NotesFormatBox name="Notation" notes={notes}>
            <Notation notes={notes} />
          </NotesFormatBox>
          <NotesFormatBox name="Tabs notation" notes={notes}></NotesFormatBox>
          <NotesFormatBox
            name="Positions diagrams"
            notes={notes}
          ></NotesFormatBox>
        </Col>
      </Body>
    </>
  );
}

export default App;
