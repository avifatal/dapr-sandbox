import express from 'express'
const app = express();
const port = 8001

app.get('/get-hello', (req, res) => {
    res.send('Hello from worker service')
})

app.listen(port, () => {
    console.log(`Worker app listening on port ${port}`)
})