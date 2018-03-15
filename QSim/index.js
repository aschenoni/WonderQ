import Consumer from './Consumer';
import Producer from './Producer';
import config from '../config';

let {CONSUMER_COUNT, PRODUCER_COUNT, WONDER_Q_HOSTNAME, WONDER_Q_SERVER_PORT} = config;
console.log(PRODUCER_COUNT);
let wonderQEndpoint = `http://${WONDER_Q_HOSTNAME}:${WONDER_Q_SERVER_PORT}/message/`;
let doneEndpoint = `${wonderQEndpoint}/done/`;

let instantiate = (...args) => (classType) => new classType(...args);
let consumers = new Array(CONSUMER_COUNT).fill(Consumer).map(instantiate(wonderQEndpoint, doneEndpoint));
let producers = new Array(PRODUCER_COUNT).fill(Producer).map(instantiate(wonderQEndpoint));

producers[0].start();
// producers.forEach(p => p.start());
