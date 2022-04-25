import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import DataTypeEnum from '../enums/t-v-single-spa-sample-data-type';

export default FlexberryEnum.extend({
  enum: DataTypeEnum,
  sourceType: 'TV.SingleSpaSample.DataType'
});
