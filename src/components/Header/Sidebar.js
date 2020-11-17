import React,{useRef} from 'react';
import {Link,withRouter} from 'react-router-dom'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Divider from '@material-ui/core/Divider';
import './Sidebar.css'
import { connect } from "react-redux";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import ChevronIcon from "../../assets/main_page/chevron_down.svg";
import {logoutUser} from '../../actions/auth_actions'

 function SwipeableTemporaryDrawer(props) {

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

const Line1 = useRef()
const Line2 = useRef()
  const list = (anchor) => (
    <div
      className={"drawer"}
      role="presentation"
     
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <List style={{width:"100%",padding:"0px"}}>
        <ListItem style={{width:"100%",padding:"0px"}}>
            <ListItemAvatar style={{backgroundColor:" #232b2b",height:"60px",display:"flex",justifyContent:"center",alignItems:"center"}}>
            <AccountCircleIcon className="ic" />
            </ListItemAvatar>
            {!props.auth.isAuth?(
                <Link to="/login" style={{width:"100%"}}>
                    <div ref={Line1} className="hello">
                    <span>Hello,</span>
                    <span>Sign In</span>
                  </div>
                </Link>
                
            ):(
                <Link to="/profile" style={{width:"100%"}}>
                     <div className="hello">
                     <span>Hello,</span>
                     <span>{props.auth.user.name}</span>
                </div>
                </Link>
               
            )}
        </ListItem>
        <ListItem style={{width:"100%",padding:"0px"}}>
            <div className="books" ref={Line2}>
                <span className="bhead">
                    Find Your Book
                </span>
            <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                    >
                        <span>Select Course</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul")}>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >Bcom</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                                
                                <li className="col-6" onClick={()=>props.history.push('/category/Bcom/1')}>

                                   1st Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Bcom/2')}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Bcom/3')}>
                                3rd Year
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >Bsc</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                            <li className="col-6" onClick={()=>props.history.push('/category/Bsc/1')}>
                                   1st Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Bsc/2')}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Bsc/3')}>
                                3rd Year
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >BA</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                            <li className="col-6" onClick={()=>props.history.push('/category/BA/1')}>
                                   1st Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BA/1')}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/BA/1')}>
                                3rd Year
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >Btech</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                            <li className="col-6" onClick={()=>props.history.push('/category/Engg/1')}>
                                   1st Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Engg/2')}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Engg/3')}>
                                3rd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Engg/4')}>
                                4th Year
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                                <li className="col-6">
                                <Accordion className="my-3">
                <Card className={("my-4 c")}>
                    <Accordion.Toggle
                        as={Card.Header}
                        className={( "col-sm-12 p-0 ch")}
                        eventKey="0"
                        style={{textAlign:"center"}}
                    >
                        <span >Mtech</span>
                        <div
                            className={"tog"}
                            style={{
                                background: `url(${ChevronIcon})`,
                            }}
                            
                        />
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body className="px-0 pt-4 pb-0">
                            <ul className={("row d-flex m-0 ul ul2")}>
                            <li className="col-6" onClick={()=>props.history.push('/category/Engg/1')}>
                                   1st Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Engg/1')}>
                                  2nd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Engg/1')}>
                                3rd Year
                                </li>
                                <li className="col-6" onClick={()=>props.history.push('/category/Engg/1')}>
                                4th Year
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
                                </li>
                            </ul>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
            </div>
        </ListItem>
        <Divider/>
        <ListItem style={{width:"100%",padding:"0px",height:`100vh-${Line1.clientHeight}vh-${Line2.clientHeight}vh`}}>
            <div className="help">
                <span className="bhead" style={{padding:"20px"}}>Help & Account</span>
                <Link to="/profile">
                <div className="hs-item">Your Account</div>
                </Link>
               {!props.auth.isAuth?(
                     <Link to="/login" style={{width:"100%",color:"#231f20"}}>
                    <div className="hs-item">
              
                    <span>Sign In</span>
               
                </div>
                 </Link>
            ):(
                <div className="hs-item" onClick={()=>props.logoutUser(props.history)}>
                     <span  style={{cursor:"pointer"}}>Logout</span></div>
            )}
             <Link to="/about" style={{width:"100%",color:"#231f20"}}>
            <div className="hs-item">
                    About Us
            </div>
            </Link>
            <Link to="/terms" style={{width:"100%",color:"#231f20"}}>
            <div className="hs-item">
                    Terms and Conditions
            </div>
            </Link>
            <Link to="/returns" style={{width:"100%",color:"#231f20"}}>
            <div className="hs-item">
                   Return Policy
            </div>
            </Link>
            </div>
        </ListItem>
        <Divider/>
        <ListItem style={{width:"100%",padding:"0px"}}>
            <div className="contact">
                <div className="bhead">
            Contact Us
                </div>
                <ul>
        <li>Ramon Contact Number</li>
        <a href="mailto:delhibookx@gmail.com"><li>delhiboox@gmail.com</li></a>
       
      </ul>
                </div>
        </ListItem>
    </List>
    </div>
  );

  return (
    <div className="drawer-icon">
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}><MenuIcon className="menu-icon"/></Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            style={{overflow:"hidden"}}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
    auth: state.auth,

});

export default connect(mapStateToProps,{logoutUser})(withRouter(SwipeableTemporaryDrawer))