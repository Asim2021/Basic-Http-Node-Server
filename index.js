const http = require("node:http")
const fs = require("node:fs")

const PORT = 3005;

let server = http.createServer(
    (req,res)=>{
        let method = req.method
        let url = req.url
        if(url==="/" && method==="GET"){
            fs.readFile(__dirname+"/home.html",(err,data)=>{
                if(err) throw new Error({err:"Something went wrong reading file"})
                res.writeHead(200,{'Content-Type': 'text/html' })
                res.write(data)
                res.end()
            })
        }
        if(url==="/user" && method==="GET"){
            fs.readFile(__dirname+"/user.html",(err,data)=>{
                if(err) throw new Error({err:"Something went wrong reading file"})
                res.writeHead(200,{'Content-Type': 'text/html' })
                res.write(data)
                res.end()
            })
        }
    }
)

server.listen(PORT,()=>console.log(`Server Running at ${PORT}`))

/////////////////// NOTE /////////////////////
// * fs.readFile() gives a Callback
// * fs.readFileSync() gives data in response, i.e data = fs.readFileSync(filename)
// * One should avoid using readFileSync as  it will tie up the single thread making it blocking.