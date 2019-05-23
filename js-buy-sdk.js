import fetch from 'node-fetch';
import Client from 'shopify-buy';

global.fetch = fetch;

const client = Client.buildClient({
    storefrontAccessToken: 'b51c1de05ed8e92003990ac206234e0e',
    domain: 'hellodemostore.myshopify.com'
});

export default client;
