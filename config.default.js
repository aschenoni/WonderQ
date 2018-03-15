export default {
	'PRODUCER_COUNT': 10,
	'CONSUMER_COUNT': 10,
	'WONDER_Q_SERVER_PORT': 3000,
	'WONDER_Q_HOSTNAME': 'localhost',
	'CONSUMPTION_RATE': 40, // per minute
	'PROCESS_RATE': 60, // per minute
	'PRODUCTION_RATE': 40, // per minute,
	'STRATEGY': 'constant', // [constant ||  TODO sporadic]
	'SIMULATOR_PORT': 3001,
	'CONSUMER_PROCESS_FAILURE_RATE': 0.2
}