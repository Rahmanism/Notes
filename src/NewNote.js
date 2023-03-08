import { NoteForm } from "./NoteForm"

export function NewNote() {
  function submit(note) {
    console.log("new note:", note)
  }
  
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={submit} />
    </>
  )
}
