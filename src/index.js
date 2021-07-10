import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const app = express();

app.set('port', process.env.PORT || 4000)

app.get('/', (req, res) => {
  res.json({
    message: 'hola'
  })
})

//Middleweares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

// app listen
app.listen(app.get('port'), () => {
  console.log(`Server listen on port ${app.get('port')}`)
})