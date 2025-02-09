function handleDownload(data) {
  console.log('allData :', data)
  const stringData = JSON.stringify(data, null, 2)
  const blob = new Blob([stringData], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = 'notes_tags.json'
  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  URL.revokeObjectURL()
}

function exportJson() {
  const notes = JSON.parse(localStorage.getItem('NOTES'))
  const tags = JSON.parse(localStorage.getItem('TAGS'))

  const allData = {
    notes,
    tags,
  }

  handleDownload(allData)
}

export default exportJson
