const functions = require('firebase-functions');
const express = require( 'express' );
const cors = require( 'cors' );
const stripe = require('stripe')(
	'sk_test_51JmHqYKAh2TuRMk1qYAUAuB0apE7yWurrO16mfrQ06ed90CLcSSbg3fcDraekyYzFVywTMDZWLgfZSeYlcf2mZj500NVRqnaDa'
);
stripe.api_key=""


// API 

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use( cors() );
app.use( express.json() );

// API ROUTES
app.get( '/', ( req, res ) => {
  res.status(200).send('hello world')
})
app.get( '/', ( req, res ) => res.status( 200 ).send( 'hello world' ) );

app.post( '/payments/create', async ( request, response ) => {
  const total = request.query.total;
  console.log('Payment request Received!!!', total);
  const paymentIntent = await stripe.paymentIntents.create( {
    amount: total,
    currency: "usd"
  } )
  response.status( 201 ).send( {
    clientSecret: paymentIntent.client_secret
  })
})

// LISTEN COMMAND
exports.api = functions.https.onRequest( app );

// http://localhost:5001/e-clone-43de8/us-central1/api