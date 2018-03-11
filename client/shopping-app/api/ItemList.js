const items = [
  {
    itemId: 1,
    itemQuantity: 3,
    productData: [{
      productId: 1,
      productTitle: 'Espresso',
      productImg: 'https://fthmb.tqn.com/wO-snj0X5tnz8PdXt69zv2aQQHI=/960x0/filters:no_upscale()/GettyImages-540712457-56a499265f9b58b7d0d7bc49.jpg',
      productPrice: 3.25
    }]
  },
  {
    itemId: 2,
    itemQuantity: 12,
    productData: [{
      productId: 2,
      productTitle: 'Puppy',
      productImg: 'https://www.pets4homes.co.uk/images/classifieds/2017/09/24/1720197/large/gorgeous-top-pedigree-springer-spaniel-pups-5a036ffd427e1.jpg',
      productPrice: 299.99
    }]
  },
  {
    itemId: 3,
    itemQuantity: 4,
    productData: [{
      productId: 3,
      productTitle: 'Ben and Jerrys Pint',
      productImg: 'https://cdn6.bigcommerce.com/s-i0b26nwdjv/products/149/images/545/BenJerrys-US-ChubbyHubby-Pint__54421.1482338749.500.750.png?c=2',
      productPrice: 5.99
    }]
  }
]

export function fetchItemList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items)
    }, 300)
  })
}
