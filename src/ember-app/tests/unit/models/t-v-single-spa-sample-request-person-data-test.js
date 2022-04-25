import { moduleForModel, test } from 'ember-qunit';

moduleForModel('t-v-single-spa-sample-request-person-data', 'Unit | Model | t-v-single-spa-sample-request-person-data', {
  // Specify the other units that are required for this test.
  needs: [
    'model:t-v-single-spa-sample-chat-bot-message',
    'model:t-v-single-spa-sample-person-account',
    'model:t-v-single-spa-sample-person-meta-data',
    'model:t-v-single-spa-sample-person',
    'model:t-v-single-spa-sample-request-person-data',
    'model:t-v-single-spa-sample-social-network',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
