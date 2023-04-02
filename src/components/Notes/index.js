// Write your code here
import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  NotesPage,
  NotesHeading,
  NotesContainer,
  TitleInput,
  Textarea,
  AddButton,
  NotesListContainer,
  EmptyView,
  EmptyViewImage,
  EmptyNotesHeading,
  EmptyNotesMessage,
  NoteItemsContainer,
} from './styledComponents'

const Notes = () => {
  const [notesTitle, setNotesTitle] = useState()
  const [notesDescription, setNotesDescription] = useState()
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setNotesTitle(event.target.value)
  }

  const onChangeNotesDescription = event => {
    setNotesDescription(event.target.value)
  }

  const onSubmitNotesForm = event => {
    event.preventDefault()

    const newNotes = {
      id: uuidv4(),
      title: notesTitle,
      description: notesDescription,
    }

    setNotesList(prevNotesList => [...prevNotesList, newNotes])
    setNotesTitle('')
    setNotesDescription('')
  }

  const renderEmptyView = () => (
    <EmptyView>
      <EmptyViewImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyNotesHeading>No Notes Yet</EmptyNotesHeading>
      <EmptyNotesMessage>Notes you add will appear here</EmptyNotesMessage>
    </EmptyView>
  )

  const renderNotesView = () => (
    <NoteItemsContainer>
      {notesList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NoteItemsContainer>
  )

  return (
    <>
      <NotesPage>
        <NotesHeading>Notes</NotesHeading>
        <NotesContainer onSubmit={onSubmitNotesForm}>
          <TitleInput
            type="text"
            onChange={onChangeTitle}
            value={notesTitle}
            placeholder="Title"
          />
          <Textarea
            rows={80}
            cols={25}
            type="text"
            onChange={onChangeNotesDescription}
            value={notesDescription}
            placeholder="Take a Note..."
          />
          <AddButton type="submit">Add</AddButton>
        </NotesContainer>
        <NotesListContainer>
          {notesList.length === 0 ? renderEmptyView() : renderNotesView()}
        </NotesListContainer>
      </NotesPage>
    </>
  )
}

export default Notes
