import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const NotesLists = ({notes, handleAddNote, handleDeleteNote}) => {
  return (
    <div className='grid justify-center grid-cols-2 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4 '>
        {notes.map((note) => (
          <Note text={note.text} id={note.id} date={note.date} handleDeleteNote={handleDeleteNote} />
        ))}
        <AddNote handleAddNote={handleAddNote} />
     
        
    </div>
  )
}

export default NotesLists