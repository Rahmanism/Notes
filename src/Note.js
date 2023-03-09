import { Badge, Button, Col, Row, Stack } from "react-bootstrap"
import { ReactMarkdown } from "react-markdown/lib/react-markdown"
import { Link, useOutletContext } from "react-router-dom"

export function Note() {
  const note = useOutletContext()
  console.log("🍘 ~ file: Note.js:5 ~ Note ~ note:", note)

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
              <Button variant="outline-danger">Delete</Button>
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
