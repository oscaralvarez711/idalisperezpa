const http = require("http")

// http.createServer((req,res) => {
//     res.writeHead(200,{"content-type": "text/html"})
//     res.write("<h1>ayo</h1>")
//     res.end()
//     console.log("ur server's runnin'")
// }).listen(5000)

const server = http.createServer((req,res) => {
    
    if(req.url === "/"){
        res.end("sup bitch")
    }else{
        if(req.url === "/about"){
            res.end("u tryna fuck?")
        }else{
            res.writeHead(404)
            res.end(`<h1>oops!</h1>
            <p>u fuckin lost bud?</p>
            <a href = '/'>click this bitch</a>`)
        }
    }
})

server.listen(5000)
console.log("server run")