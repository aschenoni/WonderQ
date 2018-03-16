# WonderQ

## Server (Main Endpoint for Message Queue)
`yarn start`
Provides interface to a mock db message queue

## Simulate
`yarn simulate`
Creates `Producers` and `Consumers` to simulate queue activity

## Dev Tool App
`cd QDevTools`
`yarn start`
Simple viewing of the queue's status

## All Tests 
`yarn test`

Careful of all your ports. All app configurations are found in `config.json` with a template and good defaults provided in `config.default.json`. Was pressed for time so documentation is at a minimum. Now would be the time to go back and use something like [api docs](http://apidocjs.com/) to document endpoints and classes. Hopefully some of the unit tests add clarity to the functionality provided by classes.