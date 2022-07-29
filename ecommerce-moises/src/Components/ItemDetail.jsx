import React from 'react'

import Colors from './Colors'
import Details from './Details';
import ItemCount from './ItemCount';

class ProductItem extends React.Component {
    
    state = {
        products: [
            {
                "id": "1",
                "title": "Product 1",
                "src": ["https://dbdzm869oupei.cloudfront.net/img/sticker/large/13913.jpg",
                        "https://www.tenvinilo.co/vinilos-decorativos/skin-ps4-de-chica-ninja-A27410", 
                        "https://dbdzm869oupei.cloudfront.net/img/sticker/large/7332.jpg",
                        "https://dbdzm869oupei.cloudfront.net/img/sticker/large/13849.jpg"
              ],
                "description":"skin personalizado",
                "price": "100",
                "colors": ["red", "blue", "green"],
                "count": 1 //cantidad de productos

            }
        ],
        index: 0
    }
    myRef = React.createRef();

    handleTab = index =>{

      this.setState({index: index})
      const images = this.myRef.current.children;
      for(let i=0; i<images.length; i++){
        images[i].className = images[i].className.replace("active", "");
      }
      images[index].className = "active";
    };

  componentDidMount(){
    const {index} = this.state;
    this.myRef.current.children[index].className = "active";
  }
  render() {
    const {products, index} = this.state;
    console.log(products);
    return (
      <div className="app">
        {
          products.map(item =>(
            <div className="details" key={item._id}>
              <div className="big-img">
                <img src={item.src[index]} alt=""/>
              </div>

              <div className="box">
                <div className="row">
                  <h2>{item.title}</h2>
                  <span>${item.price}</span>
                </div>
                <Colors colors={item.colors} />

                <p>{item.description}</p>
                <p>{item.content}</p>

                <Details images={item.src} tab={this.handleTab} myRef={this.myRef} />
                <button className="cart">Add to cart</button>

              </div>
            </div>
          ))
        }
        <ItemCount/> {/* componente para agregar productos al carrito */} 
      </div>

    );
  }
}

export default ProductItem; 
