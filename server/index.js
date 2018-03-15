import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import config from '../config';

//Initialize db
import db from '../mockDB'; //pretend we did all our magical initialization/connection with a DB through a native api

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

//Handle Routers
import message from './routes/message';
import monitor from './routes/monitor';
//Router Routes
app.use('/message', message);
app.use('/monitor', monitor);

//Static Routes
//Route Simulation client
app.use('/q-sim', express.static(path.join(__dirname, '../QSim/client')));
//Route DevTools client
app.use('/dev-tools', express.static(path.join(__dirname, '../QDevTools/client')));


app.listen(config.WONDER_Q_SERVER_PORT, ()=> console.log(`WonderQ started on ${config.WONDER_Q_SERVER_PORT}`));