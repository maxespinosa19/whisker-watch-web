const { onRequest } = require('firebase-functions/v2/https');
  const server = import('firebase-frameworks');
  exports.ssrwhiskerwatchweb = onRequest({"region":"us-central1","minInstances":0,"maxInstances":10}, (req, res) => server.then(it => it.handle(req, res)));
  