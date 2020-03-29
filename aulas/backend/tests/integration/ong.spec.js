const request = require('supertest');
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll( async () => {
       await connection.destroy();
    });
    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            // .set to pass header attributes (ex authorization)
            .send({
                name: "APAD 2",
                email: "contato@teste.com",
                whatsapp: "9200000000",
                city: "Manaus",
                district: "AM"
            });

            expect(response.body).toHaveProperty('id');
            expect(response.body.id).toHaveLength(8);
    });
});