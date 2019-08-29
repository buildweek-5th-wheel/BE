const request = require('supertest');
const server = require('../server');
const db = require('../db/dbConfig.js');
let token;


    describe('Get listings', () => {
      it('get all listings', () => {
        return request(server)
          .get('/listings')
        //   .send({
        //       username: "test",
        //       password: "pass"
        //   })
          .then(response => {
            // token = res.body.token
            expect(response.status).toBe(200);
          })
      });
    })
