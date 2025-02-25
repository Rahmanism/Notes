import { Badge, Button, Col, Row, Stack } from "react-bootstrap"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { Link, useNavigate, useOutletContext } from "react-router-dom"

export function Note({ onDelete }) {
  const note = useOutletContext()
  const navigate = useNavigate()

  function onDeleteNote() {
    if (onDelete) {
        if (window.confirm("Are you sure you want to delete?")) {
            onDelete(note.id)
            navigate("/")
        }
    } else {
        alert("Cannot delete")
    }
  }

  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags?.length > 0 && (
            <Stack gap={1} direction="horizontal" className="flex-wrap">
              {note.tags.map((t) => (
                <Badge key={t.id}>{t.label}</Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to="edit">
              <Button variant="primary">Edit</Button>
            </Link>
            <Link to="#">
              <Button variant="outline-danger" onClick={onDeleteNote}>
                Delete
              </Button>
            </Link>
            <Link to="..">
              <Button variant="outline-secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkdown>{note.markdown}</ReactMarkdown>
    </>
  )
}
