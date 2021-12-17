const { Verifier } = require('@pact-foundation/pact');

describe('Pact Verification', () => {
  test('should validate the expectations of our consumer', () => {
    const opts = {
      provider: 'Provider',
      providerBaseUrl: 'http://localhost:3000',
      pactBrokerUrl: "https://gil.pactflow.io",
      pactBrokerToken: "c9ipvcg5U7RZ-xvX2DOlAA",
      publishVerificationResult: true,
      providerVersion: '1.0.0',
      logLevel: 'INFO',
    };

    return new Verifier(opts).verifyProvider();
  });
});
