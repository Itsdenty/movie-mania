import React from 'react';


function Divider(props) {
    return (
        <React.Fragment>
            <div className="my-divider" style={{width: props.width}}></div>
        </React.Fragment>
    );
}

export default Divider;