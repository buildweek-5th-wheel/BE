const request = require('supertest');
const server = require('../server');
const db = require('../db/dbConfig.js');
let token;

describe('server', () => {
    beforeEach(async () => {
      // guarantees that the table is cleaned out before any of the tests run
      await db('users').truncate();
    });

describe('POST /register', () => {
    it('should insert a user into the db', () => {
      // insert one
      return request(server)
        .post('/auth/register')
        .send({
          username: 'test',
          password: 'pass',
          landowner: false
        })
        .then(res => {

          console.log("BODY",res.body)
          expect(res.body).toHaveProperty("id");
        });
    });

    it('should be a success', () => {
        // insert one
        return request(server)
          .post('/auth/register')
          .send({
            username: 'test',
            password: 'pass',
            landowner: false
          })
          .then(res => {

            expect(res.status).toBe(201);
          });
      });
});

})


    describe('GET /auth/login', () => {
      it('should be a success', () => {
        return request(server)
          .post('/auth/login')
          .send({
              username: "test",
              password: "pass"
          })
          .then(response => {
            token = response.body.token
            expect(response.status).toBe(200);
          })
      });
    });


    // Post A listing

    describe('Post a listings', () => {
        it('Posts a listing', () => {
          return request(server)
            .post('/listings')
            .send({
                listing_name: "test",
                user_id: 1
            })
            .set('token', token)
            .then(response => {

              expect(response.status).toBe(201);
            })
        });
      })
