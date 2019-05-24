var HTTP_PORT = process.env.PORT || 8081;
var express = require('express');
var bodyParser = require('body-parser');
var client = require('./js-buy-sdk');

const app = express();
const shopPromise = client.shop.fetchInfo();
const productsPromise = client.product.fetchAll();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    const checkoutId = req.query.checkoutId;
  
    // Create a checkout if it doesn't exist yet
    if (!checkoutId) {
      return client.checkout.create().then((checkout) => {
        res.redirect(`/?checkoutId=${checkout.id}`);
      });
    }
  
    // Fetch the checkout
    const cartPromise = client.checkout.fetch(checkoutId);
  
    return Promise.all([productsPromise, cartPromise, shopPromise]).then(([products, cart, shop]) => {
      res.json(products);
    });
  });

app.listen(HTTP_PORT, () => {
    console.log(`Connected ${HTTP_PORT}`);
});


[
    {
        "id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzM2NzUxODc4MDYyODM=",
        "availableForSale":false,
        "createdAt":"2019-05-21T05:40:46Z",
        "updatedAt":"2019-05-21T05:40:49Z",
        "descriptionHtml":"Short Sleeve T-Shirt",
        "description":"Short Sleeve T-Shirt", //
        "handle":"t-shirt",
        "productType":"",
        "title":"T-Shirt", //
        "vendor":"hellodemostore",
        "publishedAt":"2019-05-21T05:40:46Z",
        "onlineStoreUrl":null,
        "options":
        [
            {
                "id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0T3B0aW9uLzQ4MzAxNjU0OTk5Nzk=",
                "name":"Title",
                "values":
                [
                    {
                        "value":"Default Title",
                        "type":
                        {
                            "name":"String",
                            "kind":"SCALAR"
                        }
                    }
                ],
                "type":
                {
                    "name":"ProductOption",
                    "kind":"OBJECT",
                    "fieldBaseTypes":
                    {
                        "name":"String",
                        "values":"String"
                    },
                    "implementsNode":true
                }
            }
        ],
        "images":
        [
            {
                "id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTEzMDQ2MDE4NDU4MzU=",
                "src":"https://cdn.shopify.com/s/files/1/0225/8065/8251/products/T-Shirt.jpg?v=1558417249",
                "altText":null,
                "type":
                {
                    "name":"Image",
                    "kind":"OBJECT",
                    "fieldBaseTypes":
                    {
                        "altText":"String",
                        "id":"ID",
                        "originalSrc":"URL",
                        "src":"URL"
                    },
                    "implementsNode":false
                },
                "hasNextPage":false,
                "hasPreviousPage":false,
                "variableValues":
                {
                    "first":20
                }
            }
        ],
        "variants":
        [
            {
                "id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8yODU5MzUyMjQ0MjMxNQ==",
                "title":"Default Title",
                "price":"10.00",
                "weight":0,
                "available":false,
                "sku":"",
                "compareAtPrice":null,
                "image":
                {
                    "id":"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0SW1hZ2UvMTEzMDQ2MDE4NDU4MzU=",
                    "src":"https://cdn.shopify.com/s/files/1/0225/8065/8251/products/T-Shirt.jpg?v=1558417249",
                    "altText":null,
                    "type":
                    {
                        "name":"Image",
                        "kind":"OBJECT",
                        "fieldBaseTypes":
                        {
                            "altText":"String",
                            "id":"ID",
                            "originalSrc":"URL",
                            "src":"URL"
                        },
                        "implementsNode":false
                    }
                },
                "selectedOptions":
                [
                    {
                        "name":"Title",
                        "value":"Default Title",
                        "type":
                        {
                            "name":"SelectedOption",
                            "kind":"OBJECT",
                            "fieldBaseTypes":
                            {
                                "name":"String",
                                "value":"String"
                            },
                            "implementsNode":false
                        }
                    }
                ],
                "type":
                {
                    "name":"ProductVariant",
                    "kind":"OBJECT",
                    "fieldBaseTypes":
                    {
                        "availableForSale":"Boolean",
                        "compareAtPrice":"Money",
                        "id":"ID",
                        "image":"Image",
                        "price":"Money",
                        "product":"Product",
                        "selectedOptions":"SelectedOption",
                        "sku":"String",
                        "title":"String",
                        "weight":"Float"
                    },
                    "implementsNode":true
                },
                "hasNextPage":false,
                "hasPreviousPage":false,
                "variableValues":
                {
                    "first":20
                }
            }
        ],
        "type":
        {
            "name":"Product",
            "kind":"OBJECT",
            "fieldBaseTypes":
            {
                "availableForSale":"Boolean",
                "createdAt":"DateTime",
                "description":"String",
                "descriptionHtml":"HTML",
                "handle":"String",
                "id":"ID",
                "images":"ImageConnection",
                "onlineStoreUrl":"URL",
                "options":"ProductOption",
                "productType":"String",
                "publishedAt":"DateTime",
                "title":"String",
                "updatedAt":"DateTime",
                "variants":"ProductVariantConnection",
                "vendor":"String"
            },
            "implementsNode":true
        },
        "hasNextPage":false,
        "hasPreviousPage":false,
        "variableValues":
        {
            "first":20
        }
    }
]