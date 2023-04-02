// Style your elements here
import styled from 'styled-components'

export const Note = styled.li`
  width: 100%;
  padding: 10px;
  border: solid 1px #aab8c8;
  border-radius: 10px;
  margin: 10px;

  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const NoteTitle = styled.h1`
  font-size: 20px;
  font-family: 'Consolas';
  margin: 5px;
`
export const NoteDesc = styled.p`
  font-size: 14px;
  font-family: 'Consolas';
  margin: 5px;
`
