/* eslint-disable no-undef */
import { expect } from 'chai';
import request from 'supertest';
import app from '../app';

describe('movie API endpoints integration Tests', () => {
let movie1 = '';
  // get movie search tests
  describe('#GET / search movies', () => {
    it('should get a movies for a search query', (done) => {
      request(app).get('/api/v1/movie/search/cool')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.totalResults).to.be.a('string');
          expect(res.body.Search).to.be.an('array');
          expect(res.body.Search[0].Title).to.have.string('Cool');
          movie1 = res.body.Search[0].Title;
          return done();
        });
    });
  });
  describe('#GET / search movies', () => {
    it('should get page 2 movies for a search query', (done) => {
      request(app).get('/api/v1/movie/search/cool?page=2')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(200);
          expect(res.body).to.be.an('object');
          expect(res.body.totalResults).to.be.a('string');
          expect(res.body.Search).to.be.an('array');
          expect(res.body.Search[0].Title).to.have.string('Cool');
          expect(res.body.Search[0].Title).to.not.equal(movie1);
          return done();
        });
    });
  });
  describe('#GET / get movie search result', () => {
    it('should throw an error during get movies', (done) => {
      request(app).get('/api/v1/movie/search/sw')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body.field).to.have.string('query');
          expect(res.body.message).to.have.string('less than 3');
          expect(res.body.code).to.equal('USR_02');
          return done();
        });
    });
  });

  describe('#GET / search movies', () => {
    it('should throw 400 error for invalid page number', (done) => {
      request(app).get('/api/v1/movie/search/cool?page=cool')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body.field).to.have.string('page');
          expect(res.body.message).to.have.string('valid page number');
          expect(res.body.code).to.equal('USR_02');
          return done();
        });
    });
  });


  // get attributes test
  describe('#GET / movie details', () => {
  it('should get the detail of a single movie', (done) => {
    request(app).get('/api/v1/movie/details/tt0061512')
      .end((err, res) => {
        if (err) return done(err);
        expect(res.statusCode).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body.Title).to.be.a('string');
        return done();
      });
    });
  });

// 400 test for get 
  describe('#GET / movies/details/id', () => {
    it('should throw 400 error for getting movie details', (done) => {
      request(app).get('/api/v1/movie/details/tt0')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(400);
          expect(res.body).to.be.an('object');
          expect(res.body.field).to.have.string('id');
          expect(res.body.message).to.have.string('less than 5');
          expect(res.body.code).to.equal('USR_02');
          return done();
        });
    });
  });

  // 400 test for get 
  describe('#GET / movie/details/id', () => {
    it('should throw 500 error for getting movie details', (done) => {
      request(app).get('/api/v1/movie/details/24848487')
        .end((err, res) => {
          if (err) return done(err);
          expect(res.statusCode).to.equal(500);
          expect(res.body).to.be.an('object');
          expect(res.body.field).to.have.string('id');
          expect(res.body.message).to.have.string('Incorrect');
          expect(res.body.code).to.equal('SER_01');
          return done();
        });
    });
  });
});