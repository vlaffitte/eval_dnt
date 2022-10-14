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

  it('should create an user', async function() {
    const res = await test
      .httpAgent(apiUrl)
      .post('/users')
      .send({
        id: '12341',
        username: 'userNameTesttt',
        password: 'Pass',
        first_name: 'firstcdNameTest', 
        last_name: 'lastNamedTest', 
        email: 'email@tecdst', 
        role: 'Admin', 
        age : '32' ,
        img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHDW4D03RxIM2Qeke5kFqh_ktIv60vpgUErMNnMxzt&s'
      })
      //.send({id: 12, username: 'userNameTest', password:'Pass', first_name:'firstNameTest', last_name:'lastNameTest', email:'email@test', role:'Admin', age: 32 })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(201);

    let user = res.body;

    user.should.be.an.Object();
    user.id.should.be.ok;
    // // Mongo ID should be 24 chars
    // article.id.length.should.be.equal(24);
    // article.title.should.equal('article de test');
    // article.content.should.equal('le contenu article test');

    // test
    //   .string(article.createdAt)
    //   .bool(article.createdAt <= Date.now)

    //   .string(article.updatedAt)
    //   .isEqualTo(article.createdAt)
    ;
  });

  it('should delete an user', async function() {
  
    const res = await test
      .httpAgent(apiUrl)
      .delete('/users/' + '12341')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200);

    let user = res.body;

    user.should.be.an.Object();
 
  });



});

