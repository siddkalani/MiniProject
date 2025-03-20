const express = require('express')
const userRouter = require('./routers/user.js')
const packageRouter = require('./routers/package.js')
const bookingRouter = require('./routers/booking.js')

const connectDB = require('./config/db.js')
connectDB()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(packageRouter)
app.use(bookingRouter)

app.listen(port, () => {
    console.log('Server is up and running on port ', port);
})