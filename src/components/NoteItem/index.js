// Write your code here
import {Note, NoteTitle, NoteDesc} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  const {title, description} = noteDetails

  return (
    <Note>
      <NoteTitle>{title}</NoteTitle>
      <NoteDesc>{description}</NoteDesc>
    </Note>
  )
}

export default NoteItem
