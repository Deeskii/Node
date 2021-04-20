import { expect, server, BASE_URL } from './setup';

it('posts messages', done => {
  const data = { name: 'some name', message: 'new message' };
  // eslint-disable-next-line no-undef
  server
    // eslint-disable-next-line no-undef
    .post(`${BASE_URL}/messages`)
    .send(data)
    .expect(200)
    .end((err, res) => {
      // eslint-disable-next-line no-undef
      expect(res.status).to.equal(200);
      expect(res.body.messages).to.be.instanceOf(Array);
      res.body.messages.forEach(m => {
        expect(m).to.have.property('id');
        expect(m).to.have.property('name', data.name);
        expect(m).to.have.property('message', `SAYS: ${data.message}`);
      });
      done();
    });
});
