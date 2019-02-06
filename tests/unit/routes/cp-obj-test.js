import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | cp-obj', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:cp-obj');
    assert.ok(route);
  });
});
