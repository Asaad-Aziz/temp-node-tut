const { readFile, writeFile } = require('fs')


readFile('./content/first.txt','utf8', (err, result) => {
    if (err){
        console.log(err)
        return;
    }
    const first = result;
readFile('./content/sec.txt','utf8', (err, result) => {
    if (err){
        console.log(err)
        return;
    }
    const sec = result
writeFile('./content/result-async.txt', 
    `here is the resulst ${first}, ${sec}`,
    (err, result) => {
        if (err){
            return
        }
        else console.log(result)
     })
})
})
