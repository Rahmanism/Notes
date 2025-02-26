import { Button, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import packageJson from '../../package.json'

export function About() {
  return (
    <>
      <h1>A Simple Note Taking App</h1>
      <div className="mb-3">
        Version: <b>{packageJson.version}</b>
      </div>

      <p>
        It's a deployment of this video tutorial:{' '}
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
        ⚠️ Note taking app saves the notes in the{' '}
        <b>
          <u>local storage</u>
        </b>{' '}
        of your browser. You can export your notes to a JSON file (and soon-be-added import them).
      </p>
      <p>&nbsp;</p>
      <Stack
        gap={2}
        direction="horizontal"
      >
        <Link to="/">
          <Button variant="primary">Home</Button>
        </Link>
        <Link to="https://rahmanism.github.io">
          <Button variant="outline-primary">Rahmanism</Button>
        </Link>
        <Link to="https://github.com/Rahmanism/Notes">
          <Button variant="outline-primary">Source</Button>
        </Link>
      </Stack>
    </>
  )
}
