/**
 * Integration tests
 */
const app = require('.././server');
const supertest = require('supertest');
const request = supertest(app);
describe('Integration validation tests', function () {
  it('post endpoint', async done => {
    const response = await request.post('/')
      .send({
        "startDate": "2016-01-26",
        "endDate": "2018-02-02",
        "minCount": -55,
        "maxCount": 10000
      })
      .expect(422)
      .expect('Content-Type', /json/);
    expect(response.body.msg).toEqual(["[minCount:-55]: It should be integer number which is greater than or equivalent to 0"]);
    expect(response.body.code).toEqual(422);
    done();
  });
});

