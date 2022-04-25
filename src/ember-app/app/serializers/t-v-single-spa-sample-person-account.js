import { Serializer as PersonAccountSerializer } from
  '../mixins/regenerated/serializers/t-v-single-spa-sample-person-account';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(PersonAccountSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
