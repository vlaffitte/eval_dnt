'use strict';

// load Unit.js module
const test = require('unit.js');
const User = require('../models/user.model');

const apiUrl = 'http://localhost:8081/api/v1';

// const {assert} = test;

function add( nb1, nb2) {
  return nb1 + nb2;
}


describe('Test API User', function() {
  it('example devrait être une string', function() {
    // just for example of tested value
    let example = 'hello';
    // assert that example variable is a string
    test.string(example);
  });

  it('example est égale à "hello"', function() {
    // just for example of tested value
    let example = 'hello';
    // assert that example variable is a string
    test.string(example).is('hello');
    example.should.be.equal('hello');
  });

  it('result devrait être egal à 6', function() {
    // just for example of tested value
    let example = add(4, 2);
    // assert that example variable is a string
    example.should.be.equal(6);
  });

  it('should get all users', async function() {
    const res = await test
      .httpAgent(apiUrl)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200);

    let user = res.body;

    test
      .array(res.body);
  });
  it('should get an user', async function() {
    const res = await test
      .httpAgent(apiUrl)
      .get('/users')
      .expect('Content-Type', /json/)
      .expect(200);

    let user = res.body;

    test
      .array(res.body);
  });

});

