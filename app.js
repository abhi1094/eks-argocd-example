const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  const htmlContent = '<html><body><h1>Hello, ArgoCD</h1></body></html>'
  res.send(htmlContent)
})
app.listen(3000, () => console.log('Server ready'))
