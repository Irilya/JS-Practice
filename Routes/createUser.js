const data = require('../sql3-data');

module.exports = (req, res) => {
    let body = '';
    req.on('data', function (data) {
        body += data;
        if (body.length > 1e6)
            request.connection.destroy();
    });

    req.on('end', () => {
        const parsedBody = new URLSearchParams(body);
        const name = parsedBody.get('name');
        const age = parsedBody.get('age');

        if (name && age) {
            const user = { name, age: parseInt(age) };
            data.addUser(user);
            res.writeHead(201);
            res.end(JSON.stringify(user));
        } else {
            res.writeHead(400);
            res.end(JSON.stringify({ message: 'name and age are required' }))
        }
    });
};
