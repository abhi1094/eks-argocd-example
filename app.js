const express = require('express')
const app = express()

app.get('/hello', (req, res) => {
  const htmlContent = '
                        <html>
                          <body
                          <center>
                          <h1>Hello,ArgoCD</h1> <br>
                          <br>
                          <img src='https://raw.githubusercontent.com/Ajaypathak372/cloud-task2/master/task2.jpg' width=600 height=480>
                          </center>
                          </body>
                        </html>
                      '
  res.send(htmlContent)
})
app.listen(3000, () => console.log('Server ready'))
