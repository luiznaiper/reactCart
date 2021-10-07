import {Component} from 'react' 
import BubbleAlert from './BubbleAlert'
import DetallesCarro from './DetallesCarro'

const styles = {
    cart: {
        backgroundColor: '#359a2c',
        color: '#fff',
        border: 'none',
        padding: '15px',
        borderRadius: '15px',
        cursor: 'pointer',
    },
    bubble: {
        position: 'relative',
        left: '10px',
        top: '15px',
    },
}

class Cart extends Component {
    render(){
        const {cart, esCarroVisible, mostrarCarro} = this.props
        const cantidad = cart.reduce((acc, el) => acc + el.cantidad, 0)
        return(
            <div>
                <span style={styles.bubble}>
                    {cantidad !== 0
                    ? <BubbleAlert value={cantidad}/>
                : null}
                    
                </span>
                <button onClick={mostrarCarro} style={styles.cart}>
                    Cart
                </button>
                {esCarroVisible ? <DetallesCarro cart={cart}/> :null}
            </div>
        )
    }
}

export default Cart