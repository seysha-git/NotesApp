
import React, {useEffect, useState} from "react";
import {nanoid} from 'nanoid';
import NotesLists from "./components/NotesLists";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const [notes, setNotes] = useState([
    {
    text: "This is my first note",
    date: "12/05/2023",
    id: nanoid()
    },
    {
    text: "This is my second note",
    date: "02/09/2023",
    id: nanoid()
    },
    {
    text: "This is my third note",
    date: "25/05/2023",
    id: nanoid()
    },
    {
    text: "This is my 4 note",
    date: "12/05/2021",
    id: nanoid()
    },
    {
      text: "This is my new note",
      date: "12/05/2021",
      id: nanoid()
      },
    
    
])
const [searchText, setSearchText] = useState("")

const [bgColor, setBgColor] = useState(false)

useEffect(() => {
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );

  if (savedNotes) {
    setNotes(savedNotes);
  }
}, []);

useEffect(() => {
  localStorage.setItem(
    'react-notes-app-data',
    JSON.stringify(notes)
  );
}, [notes]);

const addNote = (text) => {
  const date = new Date();
  const newNote = {
    text: text,
    date: date.toLocaleDateString(),
    id: nanoid()
  }
  const newNotes = [...notes, newNote]
  setNotes(newNotes)
}

const deleteNote = (id) => {
  const newNotes = notes.filter((note) => note.id !== id);
  setNotes(newNotes)

}
  return (
    <div className={`${bgColor && 'bg-[black] min-h-full'}`}>
        <div className={"max-w-[1200px] mr-auto ml-auto m-6"}>
          <Header handleToggle={setBgColor}/>
          <Search handleSearchText={setSearchText}/>
          <NotesLists 
          notes={notes.filter((note) => note.text.toLocaleLowerCase().includes(searchText))}
          handleAddNote={addNote}
          handleDeleteNote={deleteNote}
          
          />
        </div>
    </div>
   
  );
}

export default App;
