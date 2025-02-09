import { NoteForm } from 'components'
import { useOutletContext } from 'react-router-dom'

export function EditNote({ onSubmit, onAddTag, availableTags }) {
  const note = useOutletContext()

  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        note={note}
        onSubmit={(data) => onSubmit(note.id, data)}
        onAddTag={onAddTag}
        availableTags={availableTags}
      />
    </>
  )
}
