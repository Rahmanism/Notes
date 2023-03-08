import { NoteForm } from "NoteForm"

export function NewNote({ onSubmit }) {
  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm onSubmit={onSubmit} />
    </>
  )
}
