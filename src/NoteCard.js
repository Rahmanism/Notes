import { Row } from "react-bootstrap"

export function NoteCard(note) {
    console.log('📝 note: ', note)
  return (
    <>
      <Row>
        <b>{note.title}</b>
      </Row>
      <Row>
        {note.tags.map((tag) => {
          return <span>{tag.label}</span>
        })}
      </Row>
    </>
  )
}
