import React, { useEffect, Component } from 'react'

import Filters from './Filters_pwc'
import styles2 from '../main_page/Products.module.css'
import ProductItem from '../../pages/main_page/ProductItem'
import { Row, Col, Container } from 'react-bootstrap';
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/auth_actions'
import cross from '../../assets/cross.svg'
import cx from "classnames"
import styles from './pwc.module.css'
import {withRouter} from 'react-router-dom'
import {getBooksByKeyword} from '../../actions/book_actions'
import {addToCart,removeFromCart} from '../../actions/cart_actions'

class MainPage extends Component {
    state = {
        filters: {
            year: [],
            course: [],
            subject:[]
        },
        sortValue:0
    };
    componentDidMount=async()=>{
        console.log(this.props)
        const query = new URLSearchParams(this.props.location.search);
        let token = query.get('search')
         // console.log(token)//123
          if(token===null){
            token=''
        }
          
        this.props.getBooksByKeyword(this.state.filters,token)

    }
    componentDidUpdate=async(prevProps)=>{
        if ((prevProps.location.search !== this.props.location.search)){
            const query = new URLSearchParams(this.props.location.search);
        let token = query.get('search')
         // console.log(token)//123
          if(token===null){
            token=''
        }
        this.props.getBooksByKeyword(this.state.filters,token)
    
        window.location.reload()
        }
    }

  

    setSortValue = (value) => {
        this.setState({
            ...this.state,
            sortValue: value,
        });
    };


    render() {
         
        let {books}=this.props.book
        let { sortValue } = this.state;
        let display = books;
        //console.log(display)
        if (sortValue === "0") {
            display = books.sort((a, b) => a._id - b._id);
        } else if (sortValue === "1") {
            display = books.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortValue === "2") {
            display = books.sort((a, b) => b.name.localeCompare(a.name));
        } else if (sortValue === "3") {
            display = books.sort((a, b) => a.price - b.price);
        }
        else if (sortValue === "4") {
            display = books.sort((a, b) => b.price - a.price);
        }
        display=books.filter((b)=>b.isLive===true)
        return (
            <div>

                
                <div className={styles.containerWrap}>
                    
                        <Row>
                      
                            <Col
                                className="bg-white" sm={12} md={12}>
                                <br></br>
                                <div className={(styles.dabba)}>

                                
                                <div style={{flex:"6"}}>
                                <h1 style={{ textAlign: 'center' }} > Best Place to Buy Books </h1>

                                </div>

                                <div style={{ flex: "1",margin:"0 5%" }} >
                                <Filters
                                    setSortValue={this.setSortValue}
                                     />
                                </div>
                            </div>
                                
                            
                                <div className="main">
                                <Row className= {styles2.products_page}>
         
                    <div className={styles2.all_products} style={{justifyContent:"center"}}>
                    {
                display.map((book,index)=>(
                    <Col className={styles2.product_card}
                   >
                    
                    <ProductItem
                    isEditable={true}
                    data={book}
                    addFunction={this.props.addToCart}
                    removeFunction={this.props.removeFromCart}
                    container={this.props.cart.bookCart}
                    />  
                    </Col>
                ))
            }
            
                    </div>
        </Row>
                                </div>
                            </Col>
                        </Row>
                    
                </div>

            </div>


        )
    }
}
const mapStateToProps = (state) => ({
    book: state.book,
    cart: state.cart,
   
});

export default connect(mapStateToProps,{getBooksByKeyword,addToCart,removeFromCart})(withRouter(MainPage))