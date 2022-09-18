import app from '../src/app'
import request from 'supertest'
import ROUTES_ENPOINT_TASKS from '../src/routes/task.const.js';

describe('GET /tasks', () => {
    test('should res correctly', async () => {
        const response = await request(app)
            .get(ROUTES_ENPOINT_TASKS.tasks)
            .send();

        // console.log(response);
        expect(response.statusCode).toBe(200)
    })
})