import React, { Component } from 'react';

import {
    Button,
    Icon
} from 'semantic-ui-react';

class Pagination extends Component {
    render() {
        return (
            <React.Fragment>
                <div className="pagination-wrap">
                    <Button onClick={this.props.decreasePage} ><Icon name="angle left" /> Previous</Button><Button onClick={this.props.increasePage} >Next <Icon name="angle right" /></Button>
                </div>
            </React.Fragment >
        );
    }
}

export default Pagination;