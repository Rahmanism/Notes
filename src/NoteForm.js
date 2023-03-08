import { useRef, useState } from "react"
import { Button, Col, Form, Row, Stack } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom"
import CreatableReactSelect from "react-select/creatable"
import { v4 as uuidV4 } from "uuid"

export function NoteForm({ onSubmit, onAddTag, availableTags }) {
  const titleRef = useRef(null)
  const markdownRef = useRef(null)
  const [selectedTags, setSelectedTags] = useState([])
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    const note = {
      title: titleRef.current.value,
      markdown: markdownRef.current.value,
      tags: selectedTags,
    }
    console.log("💻💻💻", note)
    if (onSubmit) {
      onSubmit(note)
    }

    navigate('..')
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Stack gap={4}>
        <Row>
          <Col>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control ref={titleRef} required />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="tags">
              <Form.Label>Tags</Form.Label>
              <CreatableReactSelect
                isMulti
                onCreateOption={(label) => {
                  const newTag = { id: uuidV4(), label }
                  onAddTag(newTag)
                  setSelectedTags((prev) => [...prev, newTag])
                }}
                options={availableTags.map((tag) => {
                  return { label: tag.label, value: tag.id }
                })}
                value={selectedTags.map((tag) => {
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
        <Form.Group controlId="markdown">
          <Form.Label>Body</Form.Label>
          <Form.Control ref={markdownRef} required as="textarea" rows={10} />
        </Form.Group>
        <Stack direction="horizontal" gap={2} className="justify-content-end">
          <Link to="..">
            <Button type="button" variant="outlined-secondary">
              Cancel
            </Button>
          </Link>
          <Button type="submit" variant="primary">
            Save
          </Button>
        </Stack>
      </Stack>
    </Form>
  )
}
