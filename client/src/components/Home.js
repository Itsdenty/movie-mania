import React, { Component } from 'react';
import { Button, Grid, Image, Input } from 'semantic-ui-react';
import MovieModal from './modals/MovieModal';
import { connect } from 'react-redux';

import axiosService from '../services/axiosService';
import _ from 'lodash';

import Header from './inc/Header';
import Divider from './inc/Divider';
import Footer from './inc/Footer';
import Pagination from './inc/Pagination';
import { updateMovie } from '../redux/actions';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            searchKey: '',
            searchResult: [],
            count: 0,
            perPage: 10,
            page: 1,
            movieModal: false
        }
    }

    async componentWillMount() {
        // use lodash debounce to avoid pooling
        this.getDebounceSearch = _.debounce(this.search, 800);
    }

    handleChange = () => (e) => {
        this.setState({ [e.target.name]: e.target.value });
        this.getDebounceSearch();
    }

    search = async () => {
        let search = await axiosService.Get(`/api/v1/movie/search/${this.state.searchKey}`);
        // set the search result 
        console.log(search)
        if(search.data.Search) {
            this.setState({
                searchResult: search.data.Search,
                count: parseInt(search.data.totalResults)
            });
        }
    }
    /**
    * This function takes a user to the next page
    */
    increasePage = async (e) => {
        e.stopPropagation();
        let pageLimit = Math.round((this.state.count / this.state.perPage));

        // make a request to get products for current page 
        // check if the page is greater than the number of available pages
        if (this.state.page > pageLimit) return;
        else {

            this.setState({ page: ++this.state.page });

            let result = await axiosService.Get(`/api/v1/movie/search/${this.state.searchKey}?page=${this.state.page}`);

            this.setState({
                searchResult: result.data.Search
            });
        }
    }

    /**
     * This function takes a user to the previous page
     */
    decreasePage = async (e) => {
        e.stopPropagation();    
        // if page is equals to 1 stop to avoid blank page
        if (this.state.page === 1) return;
        else {
            this.setState({ page: --this.state.page });
            // make a request to get products for current page
            let result = await axiosService.Get(`/api/v1/movie/search/${this.state.searchKey}?page=${this.state.page}`);

            this.setState({
                searchResult : result.data.Search
            });
        }
    }

    getMovies = (id) => {
        this.props.history.push(`/${id}`);
    }

    openModal = async (id) => {
        console.log('open');
        const movieDetails = await axiosService.Get(`/api/v1/movie/details/${id}`);
        console.log(movieDetails.data)
        this.props.updateMovie(movieDetails.data);
        this.setState({movieModal: true});
    }

    closeModal = () => {
        this.setState({ movieModal: false });
    };

    listMovies = () => {
        return this.state.searchResult.map(search => {
            return (
                <Grid.Column key={search.imdbID} >
                    <div className="app-card" onClick={() => this.openModal(search.imdbID)}>
                        <div className="content">
                                <Image src={search.Poster} />
                            <p className="product-name">
                                {search.Title}
                            </p>
                            <p className="product-price">
                                {search.Year}
                            </p>
                        </div>
                        <div className="app-card-overlay point-it" onClick={() => this.openModal(search.imdbID)}>
                             <Button onClick={() => this.openModal(search.imdbID)}>Check details</Button>
                        </div>
                    </div>
                </Grid.Column>
            );
        });
    }

    render() {
        return (
            <React.Fragment>
                <div className="app-wrapper">
                    <Header />
                    <div className="home-banner">
                        <div className="home-banner-overlay">
                            <h1>
                                Movie Mania
                            </h1>
                            <p>All your favourite movies, one search away.</p>
                            <Button id="home-overlay-btn" className="home-overlay-btn" href="#search">search</Button>
                        </div>
                    </div>
                    <div className="app-container">
                    <br/>
                    {/* <h4>search for movies</h4> */}
                    <Input name="searchKey" onChange={this.handleChange()} value={this.state.searchKey} className="search-input" placeholder='Search for movies...' />
                        <h1 className="feature-heading">Movie Results</h1>
                        <Divider width={'95px'} />
                        
                        <Grid doubling columns={5}>
                            {this.listMovies()}
                        </Grid>

                        <Pagination decreasePage={this.decreasePage} increasePage={this.increasePage} />
                    </div>
                </div>
                <MovieModal modalState={this.state.movieModal} closeModal={this.closeModal} />
                <Footer footerStyle='app-footer-grey' />
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.movieReducer
});

export default connect(mapStateToProps, { updateMovie })(Home);
