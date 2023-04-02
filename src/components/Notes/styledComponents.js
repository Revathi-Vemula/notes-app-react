// Style your elements here
import styled from 'styled-components'

export const NotesPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  width: 100vw;
  @media screen and (min-width: 768px) {
    padding: 30px;
    width: 50vw;
  }
`
export const NotesHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 25px;
  text-align: center;
`
export const NotesContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  font-size: 14px;
  width: 90vw;
  height: 30vh;
  box-shadow: 0px 0px 5px 5px #d3d3d3;
  border-radius: 4px;
  padding: 10px;
  margin-top: 20px;
  font-family: 'Bree Serif';

  @media screen and (min-width: 768px) {
    width: 70vw;
    padding: 20px;
  }
`
export const TitleInput = styled.input`
  height: 50px;
  padding: 10px;
  border-style: none;
  outline: none;
`
export const Textarea = styled.textarea`
  padding: 10px;
  border-style: none;
  margin-bottom: 20px;
  outline: none;
`
export const AddButton = styled.button`
  width: 80px;
  align-self: flex-end;
  background-color: #4c63b6;
  color: #ffffff;
  height: 40px;
  padding: 8px;
  border-radius: 4px;
  border-style: none;
`
export const NotesListContainer = styled.div`
  display: flex;
  width: 100vw;

  @media screen and (min-width: 768px) {
    width: 70vw;
  }
`
export const EmptyView = styled.div`
  height: 40vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`

export const EmptyViewImage = styled.img`
  border-radius: 50%;
  height: 100px;
  width: 100px;
`
export const EmptyNotesHeading = styled.h1`
  font-size: 16px;
  margin-bottom: 5px;
`
export const EmptyNotesMessage = styled.p`
  font-size: 13px;
  margin-top: 5px;
`
export const NoteItemsContainer = styled.ul`
  list-style-type: none;
  padding-left: 0;
  overflow: scroll;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
