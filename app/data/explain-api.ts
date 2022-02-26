export const explainAPIData = [
  {
    label: 'Read',
    code: `const express = require('express')
const app = express()
const kontenbase = require('kontenbase')

app.get('/articles', (req, res) => {
  await kontenbase.get('/users')
})

app.listen(3000)`,
  },
  {
    label: 'Create',
    code: `const express = require('express')`,
  },
  {
    label: 'Update',
    code: `const express = require('express')`,
  },
  {
    label: 'Delete',
    code: `const express = require('express')`,
  },
  {
    label: 'Register User',
    code: `const express = require('express')`,
  },
  {
    label: 'Real Time',
    code: `const express = require('express')`,
  },
]
