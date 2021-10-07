import {Component} from 'react'
import Button from './Button'

const styles = {
    producto: {
        border: '1px solid #eee',
        boxShadow: '0 5px 5px rgba(0,0,0, 0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px', 
    },
    img: {
        width: '100%',
    }
}

class Producto extends Component{
    render(){
        const {producto, agregarAlcart} = this.props
       // console.log(this.props)
        return(
            <div style={styles.producto}>
                <img style={styles.img} alt={producto.name} src={producto.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <Button onClick={()=> agregarAlcart(producto)}>
                    Add to Cart
                </Button>
            </div>
        )
    }
}

export default Producto