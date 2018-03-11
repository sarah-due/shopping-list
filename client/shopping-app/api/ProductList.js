const products = [
  {
    productId: 1,
    productTitle: 'Espresso',
    productImg: 'https://fthmb.tqn.com/wO-snj0X5tnz8PdXt69zv2aQQHI=/960x0/filters:no_upscale()/GettyImages-540712457-56a499265f9b58b7d0d7bc49.jpg',
    productPrice: 3.25
  },
  {
    productId: 2,
    productTitle: 'Puppy',
    productImg: 'https://www.pets4homes.co.uk/images/classifieds/2017/09/24/1720197/large/gorgeous-top-pedigree-springer-spaniel-pups-5a036ffd427e1.jpg',
    productPrice: 299.99
  },
  {
    productId: 3,
    productTitle: 'Ben and Jerrys Pint',
    productImg: 'https://cdn6.bigcommerce.com/s-i0b26nwdjv/products/149/images/545/BenJerrys-US-ChubbyHubby-Pint__54421.1482338749.500.750.png?c=2',
    productPrice: 5.99
  },
  {
    productId: 4,
    productTitle: 'National Park Season Pass',
    productImg: 'http://naturecanada.ca/wp-content/uploads/2017/07/canada-parks-pass.jpg',
    productPrice: 67.99
  },
  {
    productId: 5,
    productTitle: 'Dogfish Head 60 Minute IPA',
    productImg: 'https://cdn.shopify.com/s/files/1/0227/0581/products/Dogfish-Head-60-Minute-IPA-6PK-12OZ-BTL.png?v=1514428000',
    productPrice: 7.95
  }
]

export function fetchProducts() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products)
    }, 300)
  })
}