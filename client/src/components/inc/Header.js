import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { FiUser, FiSearch, FiMenu } from 'react-icons/fi';

import {
    Menu,
    MenuItem,
    Responsive,
} from 'semantic-ui-react';

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            signinModal: false,
            signupModal: false,
            cartModal: false,
            visible: false,
            productTotalCount: 0,
            perPage: 12,
            page: 1,
            categories: [],
            departments: [],
            id: 0,
        }

    }


    async componentWillMount() {
        // make a request to get categories and departments
    }

    showSideMenu = () => this.setState({ visible: true });

    hideSideMenu = () => this.setState({ visible: false });


    //     this.setState({ [e.target.name]: e.target.value });
    // }
    // open a specific modal
    openModal = (modal) => () => {
        if (modal === 'movie') {
            this.setState({
                movieModal: true
            });
        }
    }

    closeModal = (modal) => () => {
        if (modal === 'movie') this.setState({ movieModal: false });
    };

    render() {
        return (
            <React.Fragment>
                {/** Header */}
                <nav className="nav" id="nav">
                    <Menu.Item className="mr40">
                        <NavLink to="/">
                            <h2 className="nav-logo">Movie Mania</h2>
                        </NavLink>
                    </Menu.Item>

                    {/* {this.listDepartments()} */}

                    <span className="right">
                        <Menu.Item >
                            <FiSearch className="top-icon" id="open-search" />
                        </Menu.Item>
                        <Menu.Item>
                            <FiUser className="top-icon" />
                        </Menu.Item>
                        <Responsive as={MenuItem} {...Responsive.onlyMobile}>
                            <FiMenu onClick={this.showSideMenu} className="top-icon side-menu-trigger" />
                        </Responsive>
                    </span>
                </nav>
            </React.Fragment >
        )
    }
}


export default Header;
