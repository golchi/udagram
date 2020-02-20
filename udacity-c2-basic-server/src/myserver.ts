import express, {Request, Response} from 'express';
import {Car, cars as cars_list, cars} from './cars';
import bodyParser from 'body-parser';

const app = express();
const port = 2526;

app.use(bodyParser.json()); 

app.get('/', (req, res) => {
    res.send('Welcome home');
});


app.get('/cars', (req, res) => {
    let cars_list = cars;
    res.send(cars_list);
});


app.get('/cars/:make', (req, res) => {
    let current_make = req.params.make;  
    let cars_list = cars;
    console.log('Param marque : ' + current_make);
    cars_list = cars_list.filter( (car) => car.make === current_make );
    console.log(current_make, cars_list);
    res.status(200).send(cars_list);
});



app.get('/car/:id', (req, res) => {
    let {id} = req.params;  
    let cars_list = cars;
    console.log('Param Id : ' + id);
    cars_list = cars_list.filter( (car) => car.id == id );
    //console.log(id, curr_cars);
    res.status(200).send(cars_list);
});

app.listen(port, () => {
    console.log(`Server started on ${port} - Ctrl+C to stop server !`);
});