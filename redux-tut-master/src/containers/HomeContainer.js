import Home from '../components/Home'
import {connect} from 'react-redux'
import {addToCart} from '../service/actions/actions'

// Use data in third component
const mapStateToProps=state=>({
    // data:state.cardItems
    // todos: getVisbileTodos(state.todos, state.visibilityF)    
})

// For send Data 
const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(addToCart(data))

})
export default connect(mapStateToProps,mapDispatchToProps)(Home)
// export default Home;