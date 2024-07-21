// requiring http library to start the server
const http = require('http')
// does all the file handling
const fs = require('fs')
// what port the server will be listening to
const port = 3000

// creating the server
const server = http.createServer(function(req, res) {
    // tell server we are running HTML file (200 indicates everythin went ok)
    res.writeHead(200, { 'Content-Type' : 'text/html' })
    fs.readFile('index.html', function(error, data) {
        if (error) {
            // 404 means not found
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })

    fs.readFile('tree.html', function(error, data) {
        if (error) {
            // 404 means not found
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })

    fs.readFile('logIn.html', function(error, data) {
        if (error) {
            // 404 means not found
            res.writeHead(404)
            res.write('Error: File Not Found')
        } else {
            res.write(data)
        }
        res.end()
    })
})

server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log ('Server is listening on port ' + port)
    }
})