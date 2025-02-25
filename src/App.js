import { useEffect, useMemo } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import { Navigate, Route, Routes } from 'react-router-dom'
import { NewNote, EditNote, NoteList, Note, NoteLayout } from 'screen'
import { useLocalStorage } from 'hooks'
import { v4 as uuidV4 } from 'uuid'
import { About } from 'screen/About'
import { useDarkMode } from 'hooks/DarkModeContext'

function App() {
  const [notes, setNotes] = useLocalStorage('NOTES', [])
  const [tags, setTags] = useLocalStorage('TAGS', [])
  const { colorTheme } = useDarkMode()

  const notesWithTags = useMemo(() => {
    return notes.map((note) => {
      return { ...note, tags: tags.filter((t) => note.tagIds.includes(t.id)) }
    })
  }, [notes, tags])

  function onCreateNote({ tags, ...data }) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        { ...data, id: uuidV4(), tagIds: tags.map((t) => t.id) },
      ]
    })
  }

  function onEditNote(id, { tags, ...data }) {
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id === id) {
          return {
            ...note,
            ...data,
            tagIds: tags.map((t) => t.id),
          }
        } else {
          return note
        }
      })
    })
  }

  function onDeleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => note.id !== id)
    })
  }

  function addTag(tag) {
    setTags((prev) => [...prev, tag])
  }

  function updateTag(id, label) {
    setTags((prev) => {
      return prev.map((tag) => {
        if (tag.id === id) {
          return { ...tag, label }
        } else {
          return tag
        }
      })
    })
  }

  function deleteTag(id) {
    setTags((prev) => prev.filter((t) => t.id !== id))
  }

  useEffect(() => {
    document.body.dataset.theme = colorTheme
    document.body.dataset.bsTheme = colorTheme
  }, [colorTheme])

  return (
    <Container
      className="my-4"
      data-theme={colorTheme}
      data-bs-theme={colorTheme}
    >
      <Routes>
        <Route
          path="/"
          element={
            <NoteList
              notes={notesWithTags}
              availableTags={tags}
              onUpdateTag={updateTag}
              onDeleteTag={deleteTag}
            />
          }
        />
        <Route
          path="/new"
          element={
            <NewNote
              onSubmit={onCreateNote}
              onAddTag={addTag}
              availableTags={tags}
            />
          }
        />
        <Route
          path="/:id"
          element={<NoteLayout notes={notesWithTags} />}
        >
          <Route
            index
            element={<Note onDelete={onDeleteNote} />}
          />
          <Route
            path="edit"
            element={
              <EditNote
                onSubmit={onEditNote}
                onAddTag={addTag}
                availableTags={tags}
              />
            }
          />
        </Route>
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="*"
          element={<Navigate to="/" />}
        />
      </Routes>
    </Container>
  )
}

export default App
