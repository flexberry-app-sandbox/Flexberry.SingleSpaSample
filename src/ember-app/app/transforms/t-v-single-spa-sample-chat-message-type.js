import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ChatMessageTypeEnum from '../enums/t-v-single-spa-sample-chat-message-type';

export default FlexberryEnum.extend({
  enum: ChatMessageTypeEnum,
  sourceType: 'TV.SingleSpaSample.ChatMessageType'
});
