import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap"

export function EditTagsModal({
  availableTags,
  show,
  handleClose,
  onUpdate,
  onDelete,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => (
              <Row key={tag.id}>
                <Col>
                  <Form.Control
                    type="text"
                    value={tag.label}
                    onChange={(e) => onUpdate(tag.id, e.target.value)}
                  />
                </Col>
                <Col xs="auto">
                  <Button
                    variant="outline-danger"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Are you sure you want to delete this tag?"
                        )
                      ) {
                        onDelete(tag.id)
                      }
                    }}
                  >
                    &times;
                  </Button>
                </Col>
              </Row>
            ))}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  )
}
