export const explainAPIData = [
  {
    label: 'Read',
    code: `const express = require('express')
const app = express()
const kontenbase = require('kontenbase')

app.get('/articles', async (req, res) => {
  const { data, error } = await kontenbase.service('articles').find()
  res.send({ articles: data })
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
