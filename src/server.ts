import express from 'express'

const app = express()

app.get('/health', (req, res) => {
    res.json({message: 'hello', newHelptext: "New test"}).status(200)
})

export { app }

export default app