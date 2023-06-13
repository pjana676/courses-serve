const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Courses API', () => {
    describe('GET /courses', () => {
        it('should get a list of all available courses', (done) => {
            chai
                .request(app)
                .get('/api/courses')
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('data');
                    // Add more assertions based on your requirements
                    done();
                });
        });
    });

    describe('GET /api/courses/:courseId', () => {
        it('should get the course overview', (done) => {
            const courseId = null;
            expect(courseId, 'Please assign the valid `courseId`!').to.not.null;;

            chai
                .request(app)
                .get(`/api/courses/${courseId}`)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('data');
                    // Add more assertions based on your requirements
                    done();
                });
        });
    });
});