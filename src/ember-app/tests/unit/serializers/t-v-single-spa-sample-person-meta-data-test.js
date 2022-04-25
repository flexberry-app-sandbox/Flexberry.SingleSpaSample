import { moduleForModel, test } from 'ember-qunit';

moduleForModel('t-v-single-spa-sample-person-meta-data', 'Unit | Serializer | t-v-single-spa-sample-person-meta-data', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:t-v-single-spa-sample-person-meta-data',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:t-v-single-spa-sample-chat-message-type',
    'transform:t-v-single-spa-sample-data-type',
    'transform:t-v-single-spa-sample-sex',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
