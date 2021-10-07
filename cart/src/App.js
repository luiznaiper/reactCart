import {Component} from 'react'
import Productos from './components/Productos'
import Layout from './components/Layout'
import Title from './components/Title'
import Navbar from './components/Navbar'


class App extends Component {
  state = {
    productos: [
      {name: 'Tomato', price: 1500, img:'/productos/tomate.jpg'},
      {name: 'Peas', price: 2500, img:'/productos/arbejas.jpg'},
      {name: 'Lettuce', price: 500, img:'/productos/lechuga.jpg'},
    ],
    cart: [],
    esCarroVisible: false,
  }

  agregarAlcart = (producto) => {
    const { cart } = this.state
    if (cart.find(x => x.name === producto.name)) {
      const newcart = cart.map(x => x.name === producto.name
        ?({
          ...x,
          cantidad: x.cantidad + 1
        })
        :x)
        return this.setState({cart: newcart})
    }
    return this.setState({
      cart: this.state.cart.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () =>{
    if(!this.state.cart.length){
      return
    }
    this.setState({esCarroVisible: !this.state.esCarroVisible})
  }

  render(){
    const {esCarroVisible} = this.state
    return(
      <div>
        <Navbar 
          cart={this.state.cart} 
          esCarroVisible={esCarroVisible} 
          mostrarCarro={this.mostrarCarro}
        />
        <Layout>
          <Title/>
          <Productos
            agregarAlcart={this.agregarAlcart}
            productos={this.state.productos}
          />
        </Layout>
      </div>
    )
  }
}

export default App;
