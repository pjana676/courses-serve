const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');

chai.use(chaiHttp);
const expect = chai.expect;

describe('Chapter API', () => {
    describe('GET /api/courses/:courseId/chapters/', () => {
        it('should get the chapters for a specific course', (done) => {
            const courseId = '64882c879fb8f7515020073c';

            chai
                .request(app)
                .get(`/api/courses/${courseId}/chapters`)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('data');
                    // Add more assertions based on your requirements
                    done();
                });
        });
    });

    describe('GET /api/courses/:courseId/chapters/:chapterId', () => {
        it('should get specific chapter information', (done) => {
            const courseId = '64882c879fb8f7515020073c';
            const chapterId = '64882c879fb8f75150200746';

            chai
                .request(app)
                .get(`/api/courses/${courseId}/chapters/${chapterId}`)
                .end((err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.an('object');
                    expect(res.body).to.have.property('data');
                    // Add more assertions based on your requirements
                    done();
                });
        });
    });

    describe('POST /api/courses/:courseId/chapters/:chapterId/rate', () => {
        it('should rate a specific chapter', (done) => {
            const courseId = '64882c879fb8f7515020073c';
            const chapterId = '64882c879fb8f75150200746';
            const body = {
                "rating": 4
            };

            chai
                .request(app)
                .post(`/api/courses/${courseId}/chapters/${chapterId}/rate`)
                .send(body)
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