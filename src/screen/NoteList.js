import { EditTagsModal } from 'components'
import { NoteCard } from 'components'
import OptionsMenu from 'components/OptionsMenu'
import { useDarkMode } from 'hooks/DarkModeContext'
import { useMemo, useState } from 'react'
import { Button, Col, Form, Row, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ReactSelect from 'react-select'

export function NoteList({ notes, availableTags, onUpdateTag, onDeleteTag }) {
  const [selectedTags, setSelectedTags] = useState([])
  const { darkMode } = useDarkMode()
  const [title, setTitle] = useState('')
  const [editTagsModalOpen, setEditTagsModalOpen] = useState(false)
  const filteredNotes = useMemo(() => {
    return notes.filter((note) => {
      return (
        (title === '' ||
          note.title.toLowerCase().includes(title.toLowerCase())) &&
        (selectedTags.length === 0 ||
          selectedTags.every((tag) => {
            return note.tags.some((noteTag) => noteTag.id === tag.id)
          }))
      )
    })
  }, [notes, selectedTags, title])

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>Notes</h1>
        </Col>
        <Col xs="auto">
          <Stack
            gap={2}
            direction="horizontal"
          >
            <OptionsMenu editTagsClicked={() => setEditTagsModalOpen(true)} />
            <Link to="/new">
              <Button variant="primary">Create</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <Form>
        <Row className="mb-4">
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <ReactSelect
                className={darkMode ? 'dark' : 'light'}
                isMulti
                value={selectedTags.map((tag) => {
                  return { label: tag.label, value: tag.id }
                })}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id }
                })}
                onChange={(tags) => {
                  setSelectedTags(
                    tags.map((tag) => {
                      return { label: tag.label, id: tag.value }
                    })
                  )
                }}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <Row
        xs={1}
        sm={2}
        lg={3}
        xl={4}
        className="g-3"
      >
        {filteredNotes.map((note) => {
          return (
            <Col key={note.id}>
              <NoteCard note={note} />
            </Col>
          )
        })}
      </Row>
      <EditTagsModal
        onUpdate={onUpdateTag}
        onDelete={onDeleteTag}
        show={editTagsModalOpen}
        handleClose={() => setEditTagsModalOpen(false)}
        availableTags={availableTags}
      />
    </>
  )
}
