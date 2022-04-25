import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import TVSingleSpaSampleChatBotMessageLForm from './forms/t-v-single-spa-sample-chat-bot-message-l';
import TVSingleSpaSamplePersonLForm from './forms/t-v-single-spa-sample-person-l';
import TVSingleSpaSamplePersonMetaDataLForm from './forms/t-v-single-spa-sample-person-meta-data-l';
import TVSingleSpaSampleRequestPersonDataLForm from './forms/t-v-single-spa-sample-request-person-data-l';
import TVSingleSpaSampleSocialNetworkLForm from './forms/t-v-single-spa-sample-social-network-l';
import TVSingleSpaSampleChatBotMessageEForm from './forms/t-v-single-spa-sample-chat-bot-message-e';
import TVSingleSpaSamplePersonEForm from './forms/t-v-single-spa-sample-person-e';
import TVSingleSpaSamplePersonMetaDataEForm from './forms/t-v-single-spa-sample-person-meta-data-e';
import TVSingleSpaSampleRequestPersonDataEForm from './forms/t-v-single-spa-sample-request-person-data-e';
import TVSingleSpaSampleSocialNetworkEForm from './forms/t-v-single-spa-sample-social-network-e';
import TVSingleSpaSampleChatBotMessageModel from './models/t-v-single-spa-sample-chat-bot-message';
import TVSingleSpaSamplePersonAccountModel from './models/t-v-single-spa-sample-person-account';
import TVSingleSpaSamplePersonMetaDataModel from './models/t-v-single-spa-sample-person-meta-data';
import TVSingleSpaSamplePersonModel from './models/t-v-single-spa-sample-person';
import TVSingleSpaSampleRequestPersonDataModel from './models/t-v-single-spa-sample-request-person-data';
import TVSingleSpaSampleSocialNetworkModel from './models/t-v-single-spa-sample-social-network';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    't-v-single-spa-sample-chat-bot-message': TVSingleSpaSampleChatBotMessageModel,
    't-v-single-spa-sample-person-account': TVSingleSpaSamplePersonAccountModel,
    't-v-single-spa-sample-person-meta-data': TVSingleSpaSamplePersonMetaDataModel,
    't-v-single-spa-sample-person': TVSingleSpaSamplePersonModel,
    't-v-single-spa-sample-request-person-data': TVSingleSpaSampleRequestPersonDataModel,
    't-v-single-spa-sample-social-network': TVSingleSpaSampleSocialNetworkModel
  },

  'application-name': 'Metaverse',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Metaverse',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Metaverse',
          title: 'Metaverse'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        metaverse: {
          caption: 'Metaverse',
          title: 'Metaverse',
          't-v-single-spa-sample-chat-bot-message-l': {
            caption: 'Chat bot message',
            title: ''
          },
          't-v-single-spa-sample-request-person-data-l': {
            caption: 'Request person data',
            title: ''
          },
          't-v-single-spa-sample-social-network-l': {
            caption: 'Social network',
            title: ''
          },
          't-v-single-spa-sample-person-meta-data-l': {
            caption: 'Person meta data',
            title: ''
          },
          't-v-single-spa-sample-person-l': {
            caption: 'Person',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    't-v-single-spa-sample-chat-bot-message-l': TVSingleSpaSampleChatBotMessageLForm,
    't-v-single-spa-sample-person-l': TVSingleSpaSamplePersonLForm,
    't-v-single-spa-sample-person-meta-data-l': TVSingleSpaSamplePersonMetaDataLForm,
    't-v-single-spa-sample-request-person-data-l': TVSingleSpaSampleRequestPersonDataLForm,
    't-v-single-spa-sample-social-network-l': TVSingleSpaSampleSocialNetworkLForm,
    't-v-single-spa-sample-chat-bot-message-e': TVSingleSpaSampleChatBotMessageEForm,
    't-v-single-spa-sample-person-e': TVSingleSpaSamplePersonEForm,
    't-v-single-spa-sample-person-meta-data-e': TVSingleSpaSamplePersonMetaDataEForm,
    't-v-single-spa-sample-request-person-data-e': TVSingleSpaSampleRequestPersonDataEForm,
    't-v-single-spa-sample-social-network-e': TVSingleSpaSampleSocialNetworkEForm
  },

});

export default translations;
