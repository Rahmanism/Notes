import { Button, Stack } from "react-bootstrap"
import { Link } from "react-router-dom"

export function About() {
  return (
    <>
      <h1>A Simple Note Taking App</h1>

      <p>
        It's a deployment of this video tutorial:{" "}
        <a href="https://www.youtube.com/watch?v=j898RGRw0b4">
          YouTube: Markdown Supported Note Taking
        </a>
        .
      </p>

      <p>
        You can add, edit and delete notes, add multiple tags to your notes, and
        it supports markdown.
      </p>
      <p>
        Note taking app saves the notes in the local storage of your browser.
      </p>
      <p>&nbsp;</p>
      <Stack gap={2} direction="horizontal">
        <Link to="/">
          <Button variant="primary">Home</Button>
        </Link>
        <Link to="https://rahmanism.github.io">
          <Button variant="outline-primary">Rahmanism</Button>
        </Link>
      </Stack>
    </>
  )
}
