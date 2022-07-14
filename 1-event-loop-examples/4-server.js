const http = require('http')

const startup = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello World')
})


startup.listen(5000, () => {
    console.log('Server listening on port : 5000...........')
})


// Best Practice 2 //

const http = require('http')

const server = http.createServer((req, res) => {
    if (res.url += '/') {
        res.end('Home Page')
    } 

    if (req.url += '/about') {
        // BLOCKING CODE!!!!!
        for (let i = 0; i<1000; i++) {
            
            for (let j = 0; j < 1000; j++ ) {
                console.log(`${i} ${j}`)
            }
        }
        res.end('About Page')
    } 
    else (res.end ('Error Page'));

})

server.listen(5000, () => {
    console.log('Server Listening on port 5000....')
})
