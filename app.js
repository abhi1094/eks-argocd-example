const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const htmlContent = `
    <html>
      <body>
        <center>
          <h1>Hello, ArgoCD!</h1>
          <img src="https://example.com/image.jpg" alt="An Image">
        </center>
      </body>
    </html>
  `;
  res.send(htmlContent);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
