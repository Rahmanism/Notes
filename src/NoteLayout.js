import { Navigate, Outlet, useParams } from "react-router-dom"

export function NoteLayout({ notes }) {
  const { id } = useParams()
  const note = notes.find((note) => note.id === id)

  if (note == null) {
    return <Navigate to="/" replace />
  }

  return <Outlet context={note} />
}