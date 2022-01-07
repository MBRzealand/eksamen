const request = require('supertest');
const { $where } = require('../models/windmillScheme');
const { response } = require('../server');
const server = require('../server');

describe(' Route', () => {
    it('should add a windmill to the database', () => {
        return request(server).post('/vindmolle/JSTest').send({
            uniqueID: "idFromJSTest",
            Navn: "nameFromJSTest",
            GPS: "GPSFromJSTest",
            Model: "modelFromJSTest"
        })
            .expect('Content-type', /json/ )
            .expect(201)
            .then((response) => {
                expect.objectContaining({
                    uniqueID: "idFromJSTest",
                    Navn: "nameFromJSTest",
                    GPS: "GPSFromJSTest",
                    Model: "modelFromJSTest"
            });
        });
    });
})



describe(' Route', () => {
    it('should delete a windmill in the database', () => {

    request(server)
        .post('/vindmolle/')
        .send({
            uniqueID: "idFromJSTest",
            Navn: "nameFromJSTest",
            GPS: "GPSFromJSTest",
            Model: "modelFromJSTest"
        })
        .then((response) => {
            const idForDelete = response.body.item._id
            return request(server)
                .delete(`/vindmolle/${idForDelete}`)
                .expect(410)
                .then((response) => {
                    expect.objectContaining({
                        uniqueID: "idFromJSTest",
                        Navn: "nameFromJSTest",
                        GPS: "GPSFromJSTest",
                        Model: "modelFromJSTest"
                    });
                });
        });

});

})
