const express = require('express')
const app = express()

app.get('/hello', (req, res) => res.send('Argo CD Demo'))
app.listen(3000, () => console.log('Server ready'))
