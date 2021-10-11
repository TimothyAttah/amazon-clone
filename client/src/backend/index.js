const functions = require( 'firebase-functions' );
const express = require( 'express' );
const cors = require( 'cors' );
const stripe = require( 'stripe' )( ' YOUR PUBLIC KEY GOES HERE' )

// API 

// APP CONFIG
const app = express();

// MIDDLEWARES
app.use( cors( { origin: true } ) );
app.use( express.json() );

// API ROUTES
app.get( '/', ( req, res ) => res.status( 200 ).send( 'hello world' ) );

app.post( '/payment/create', async ( req, res ) => {
  const total = req.query.total;
  const paymentIntent = await stripe.paymentIntents.credit( {
    amount: total,
    currency: "usd"
  } )
  res.status( 200 ).send( {
    clientSecret: paymentIntent.client_secret
  })
})

// LISTEN COMMAND
exports.api = functions.https.onRequest( app );
