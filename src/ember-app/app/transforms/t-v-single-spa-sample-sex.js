import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import SexEnum from '../enums/t-v-single-spa-sample-sex';

export default FlexberryEnum.extend({
  enum: SexEnum,
  sourceType: 'TV.SingleSpaSample.Sex'
});
