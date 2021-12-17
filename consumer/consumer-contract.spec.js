const { Pact } = require('@pact-foundation/pact');
const { like, eachLike } = require('@pact-foundation/pact').Matchers;
const { fetchTodos } = require('./consumer');
const path = require('path');

const PORT = 4000;
const URL = 'http://localhost';

const provider = new Pact({
  consumer: 'Consumer',
  provider: 'Provider',
  port: PORT,
  log: path.resolve(process.cwd(), 'logs', 'pact.log'),
  dir: path.resolve(process.cwd(), 'pacts'),
  logLevel: 'INFO',
});

describe('Todo Service', () => {
  describe('When a request to list all Todo is made', () => {
    beforeAll(() =>
      provider.setup().then(() => {
        provider.addInteraction({
          uponReceiving: 'a request to list all Todo',
          withRequest: {
            method: 'GET',
            path: '/todos',
          },
          willRespondWith: {
            status: 200,
            body: eachLike(
              {

                title: like('Todo 1'),
              },
              { min: 1 }
            ),
          },
        });
      })
    );

    test('should return the correct data', async () => {
      const response = await fetchTodos(URL, PORT);
      expect(response[0].title).toBe('Todo 1');
    });

    afterEach(() => provider.verify());
    afterAll(() => provider.finalize());
  });
});
