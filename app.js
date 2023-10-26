const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const htmlContent = `
    <html>
      <body>
        <center>
          <h1>GitOps Demo through ArgoCD!</h1>
          <img src='https://raw.githubusercontent.com/Ajaypathak372/cloud-task2/master/task2.jpg' width=600 height=480>
        </center>
      </body>
    </html>
  `;
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
