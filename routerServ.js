
const requestHandler = (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const path = parsedUrl.pathname;
     
    res.setHeader('Content-Type', 'application/json');
  }
