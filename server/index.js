
import express from 'express';
import morgan from 'morgan';
import body-parse from 'body-parser';
import path from 'path';
import db from '../mockDB'; //pretend we did all our magical connection/initialization with a DB through a native api

const app = express();
app.use(morgan('dev'));
app.use(body-parser);


//ROUTE Simulation client
app.get('/QSim', express.static(path.join(__dirname, '../QSim/client')));

//ROUTE DevTools client
app.get('/DevTools', express.static(path.join(__dirname, '../QDevTools/client')));
console.log(db);