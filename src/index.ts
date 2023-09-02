import express from 'express';
import cors from 'cors';
import routes from './routes';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use('/', routes);


const PORT = 5000;

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running at ${PORT}`)
})