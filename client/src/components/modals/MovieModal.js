import React, { Component } from 'react';
import { Button, Modal, Image } from 'semantic-ui-react';
import { FiX } from 'react-icons/fi';
import { updateMovie } from '../../redux/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';

class MovieModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            open: false,
            showAlert: false,
            confirmText: 'Are you sure you sure you want to proceed',
            confirmBtnBsStyle: 'yes continue',
            alertMsg: 'this action is irreversible',
            alertMode: 'remover',
            removeId: 0
        };
    }

    componentWillMount() {
        console.log(this.props.modalState);
        // this.setState({
        //     open: this.props.modalState
        // });
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps.modalState);
        this.setState({
            open: nextProps.modalState
        });
    }

    closeModal = () => {
        this.setState({
            open: false,
            showAlert: false
        })
    }
    render() {
        return (
            <React.Fragment>
                <Modal size='large' open={this.state.open} onClose={this.props.closeModal} centered={false}>
                    <div>
                        <FiX className="modal-close-icon cl-sec close-l mg-5 point-it"  onClick={this.props.closeModal} />
                    </div>
                    <Modal.Content className="modal-action-content">
                        <Image src={this.props.movie.Poster}/>
                        <p className="cart-details"><b className="product-name">Title: </b>{this.props.movie.Title}</p>
                        <p className="cart-details"><b className="product-name">Year: </b>{this.props.movie.Year}</p>
                        <p className="cart-details"><b className="product-name">Rated: </b>{this.props.movie.Rated}</p>
                        <p className="cart-details"><b className="product-name">Realeased: </b>{this.props.movie.Released}</p>
                        <p className="cart-details"><b className="product-name">Runtime: </b>{this.props.movie.Runtime}</p>
                        <p className="cart-details"><b className="product-name">Genre: </b>{this.props.movie.Genre}</p>
                        <p className="cart-details"><b className="product-name">Director: </b>{this.props.movie.Director}</p>
                        <p className="cart-details"><b className="product-name">Actors: </b>{this.props.movie.Actors}</p>
                        <p className="cart-details"><b className="product-name">Plot: </b>{this.props.movie.Plot}</p>
                        <p className="cart-details"><b className="product-name">Language: </b>{this.props.movie.Language}</p>
                        <p className="cart-details"><b className="product-name">Country: </b>{this.props.movie.Country}</p>
                        <p className="cart-details"><b className="product-name">Awards: </b>{this.props.movie.Awards}</p>
                        <p className="cart-details"><b className="product-name">Metascore: </b>{this.props.movie.Metascore}</p>
                        <p className="cart-details"><b className="product-name">IMDB rating: </b>{this.props.movie.imdbRating}</p>
                        <p className="cart-details"><b className="product-name">IMDB votes: </b>{this.props.movie.imdbVotes}</p>
                        <p className="cart-details"><b className="product-name">IMDB number: </b>{this.props.movie.imdbID}</p>
                        <p className="cart-details"><b className="product-name">Type: </b>{this.props.movie.Type}</p>
                        <p className="cart-details"><b className="product-name">DVD: </b>{this.props.movie.DVD}</p>
                        <p className="cart-details"><b className="product-name">Box office: </b>{this.props.movie.BoxOffice}</p>
                        <p className="cart-details"><b className="product-name">Production: </b>{this.props.movie.Production}</p>
                        <p className="cart-details"><b className="product-name">Website: </b>{this.props.movie.Website}</p>
                    </Modal.Content>
                    <div className="cart-modal-footer">
                        <div className="button-wrap fl-right pd-bt-25">
                            <Button className="back cl-pry bg-cl-pry" onClick={this.props.closeModal}>Back to Search</Button>
                        </div>
                    </div>
                </Modal>
            </React.Fragment>
        );
    }
}

// import needed states from redux
const mapStateToProps = state => ({
    movie: state.movieReducer,
});

// export Component connected to reduxstore with router privilleges
export default connect(mapStateToProps, { updateMovie })(withRouter(MovieModal));