from flask import Flask, render_template, jsonify
app = Flask(__name__,
            static_folder = "./client/dist/static",
            template_folder = "./client/dist")

@app.route('/api/products')
def retrieve_products():
    response = {
        "products": [
          {
            "productId": 1,
            "productTitle": 'Espresso',
            "productImg": 'https://fthmb.tqn.com/wO-snj0X5tnz8PdXt69zv2aQQHI=/960x0/filters:no_upscale()/GettyImages-540712457-56a499265f9b58b7d0d7bc49.jpg',
            "productPrice": 3.25
          },
          {
            "productId": 2,
            "productTitle": 'Puppy',
            "productImg": 'https://www.pets4homes.co.uk/images/classifieds/2017/09/24/1720197/large/gorgeous-top-pedigree-springer-spaniel-pups-5a036ffd427e1.jpg',
            "productPrice": 299.99
          },
          {
            "productId": 3,
            "productTitle": 'Ben and Jerry\'s Pint',
            "productImg": 'https://cdn6.bigcommerce.com/s-i0b26nwdjv/products/149/images/545/BenJerrys-US-ChubbyHubby-Pint__54421.1482338749.500.750.png?c=2',
            "productPrice": 5.99
          },
          {
            "productId": 4,
            "productTitle": 'National Park Season Pass',
            "productImg": 'http://naturecanada.ca/wp-content/uploads/2017/07/canada-parks-pass.jpg',
            "productPrice": 67.99
          },
          {
            "productId": 5,
            "productTitle": 'Dogfish Head 60 Minute IPA',
            "productImg": 'https://cdn.shopify.com/s/files/1/0227/0581/products/Dogfish-Head-60-Minute-IPA-6PK-12OZ-BTL.png?v=1514428000',
            "productPrice": 7.95
          },
          {
            "productId": 6,
            "productTitle": 'Board Games',
            "productImg": 'https://cf.geekdo-images.com/opengraph/img/iTZcvNfBptXqWcMFkLPwvOjeRxA=/fit-in/1200x630/pic2419375.jpg',
            "productPrice": 59.95
          },
          {
            "productId": 7,
            "productTitle": 'Running Shoes',
            "productImg": 'https://www.rei.com/media/1152f5cb-87a4-48d9-ad95-ff8be5ec7c20?size=1020x510',
            "productPrice": 149.99
          },
          {
            "productId": 8,
            "productTitle": 'Fancy Cheese',
            "productImg": 'http://www.halifaxfarmersmarket.com/wp-content/uploads/2013/11/that-dutchmans-cheese.jpg',
            "productPrice": 29.95
          }
        ]
    }
    return jsonify(response)

@app.route('/api/items')
def retrieve_items():
    response = {
        "items": [
          {
            "itemId": 1,
            "itemQuantity": 3,
            "productData": [{
              "productId": 1,
              "productTitle": 'Espresso',
              "productImg": 'https://fthmb.tqn.com/wO-snj0X5tnz8PdXt69zv2aQQHI=/960x0/filters:no_upscale()/GettyImages-540712457-56a499265f9b58b7d0d7bc49.jpg',
              "productPrice": 3.25
            }]
          },
          {
            "itemId": 2,
            "itemQuantity": 3,
            "productData": [{
              "productId": 2,
              "productTitle": 'Puppy',
              "productImg": 'https://www.pets4homes.co.uk/images/classifieds/2017/09/24/1720197/large/gorgeous-top-pedigree-springer-spaniel-pups-5a036ffd427e1.jpg',
              "productPrice": 299.99
            }]
          },
          {
            "itemId": 3,
            "itemQuantity": 4,
            "productData": [{
              "productId": 3,
              "productTitle": 'Ben and Jerrys Pint',
              "productImg": 'https://cdn6.bigcommerce.com/s-i0b26nwdjv/products/149/images/545/BenJerrys-US-ChubbyHubby-Pint__54421.1482338749.500.750.png?c=2',
              "productPrice": 5.99
            }]
          },
          {
            "itemId": 4,
            "itemQuantity": 1,
            "productData": [{
              "productId": 6,
              "productTitle": 'Board Games',
              "productImg": 'https://cf.geekdo-images.com/opengraph/img/iTZcvNfBptXqWcMFkLPwvOjeRxA=/fit-in/1200x630/pic2419375.jpg',
              "productPrice": 59.95
            }]
          }
        ]
    }
    return jsonify(response)


@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def catch_all(path):
    return render_template("index.html")
