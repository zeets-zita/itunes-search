import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';
import { Link } from "react-router-dom";


class NavBar extends React.Component {
    state = {
      isOpen: false
    }
    

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (  
      <div>
          <Navbar color='dark' dark expand="sm" className="mb-5 nav" sticky="top">
              <Container>
                <NavbarBrand href="/" className="navBrand" style={{ color: '#B7B7B7'}}
                >LOOKINDA</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto nav-links" navbar>
                        <NavItem style={{ marginTop: '7px', marginRight: '8px'}}>
                        <Link className="favorite-nav" to="/"
                            style={{color: 'white', fontFamily: 'MyriadPro-Regular'}}
                            >HOME</Link>
                        </NavItem>
                        <NavItem style={{ marginTop: '7px', marginLeft: '8px'}}>
                            <Link className="favorite-nav" to="/favourites"
                            style={{color: 'white', fontFamily: 'MyriadPro-Regular'}}
                            >FAVOURITES</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
              </Container>
          </Navbar> 
      </div>
        );
    }
    
}

export default NavBar;