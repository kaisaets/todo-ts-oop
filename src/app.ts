import { error } from 'console'
import express, { Request, Response, NextFunction } from 'express'
import todoRoutes from './routes/todos'
import { json } from 'body-parser'
 
const app = express()

app.use(express.json())

app.use('/todos', todoRoutes)

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
    res.json({
        message: error.message
    })
})

app.listen(3011, () =>{
    console.log('Server started at http://localhost:3011')
} )