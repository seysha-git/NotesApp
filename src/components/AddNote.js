import React, {useState} from 'react'

const AddNote = ({handleAddNote}) => {
  const [noteText, setNoteText] = useState("");
  const characterLimit = 200;


  const handleChange = (e) => {
    if(characterLimit - e.target.value.length >= 0){
        setNoteText(e.target.value)
    }
  }

  const handleSaveClick = (e) => {
    if(noteText.trim().length > 0){
        handleAddNote(noteText)
        setNoteText("")
    }
  
  }

  return (
    <div className='bg-[#67d8cc] rounded-lg p-1 min-h-[170px] flex gap-5 flex-col justify-between'>
        <textarea
        className='border-none resize-none bg-[#67d8cc] focus:outline-none'
        rows="8"
        cols="10"
        placeholder='Type to add a note'
        value={noteText}
        onChange={handleChange}
        >
        </textarea>
        <div className='flex items-center gap-3 justify-between'>
            <small className='text-[16px] pl-1'>{characterLimit - noteText.length}</small>
            <button onClick={handleSaveClick} className='bg-[#e1e1e1] border-none rounded-full cursor-pointer py-1 px-4 ease-in-out duration-300 hover:bg-slate-300 m-1'>Save</button>
        </div>
    </div>
  )
}

export default AddNote