import React from 'react'

class ProductItem extends React.Component {
    
    state = {
        products: [
            {
                "id": "1",
                "name": "Product 1",
                "src": "http://cdn.shopify.com/s/files/1/0567/4699/9960/products/LUXPS50034_1.jpg?v=1626189439",
                "description":"skin personalizado",
                "price": "100",
                "colors": ["red", "blue", "green"],
                "count": 1 //cantidad de productos

            }
        ],
    }
  render() {
    return (
      <div>ProductItem</div>
    )
  }
}

export default ProductItem //exportar componente para que sea utilizable en otro archivo jsx