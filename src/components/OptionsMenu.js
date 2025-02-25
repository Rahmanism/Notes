import { useDarkMode } from 'hooks/DarkModeContext'
import React from 'react'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import exportJson from 'services/exportJson'

function OptionsMenu({ editTagsClicked }) {
  const { colorTheme, setColorTheme, currentColorTheme } = useDarkMode()

  return (
    <Dropdown>
      <Dropdown.Toggle
        variant="outline-secondary"
        id="optionsMenuDrp"
      >
        Menu
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() =>
            setColorTheme(colorTheme === 'dark' ? 'light' : 'dark')
          }
        >
          {colorTheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
        </Dropdown.Item>
        <Dropdown.Item onClick={() => setColorTheme('system')}>
          {currentColorTheme === 'system' && '✓'} System Theme
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item onClick={() => editTagsClicked()}>
          Edit Tags
        </Dropdown.Item>
        <Dropdown.Item onClick={() => exportJson()}>Export Notes</Dropdown.Item>
        <Dropdown.Item
          href="#"
          disabled
        >
          Import Notes
        </Dropdown.Item>
        <Dropdown.Item>
          <Link
            to="/about"
            className="no-underline block"
          >
            About
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default OptionsMenu
