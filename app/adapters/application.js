import JSONAPIADAPTER from '@ember-data/adapter/json-api';

export default class ApplicationAdapter extends JSONAPIADAPTER {
  namespace = 'api';

  buildURL(...args) {
    return `${super.buildURL(...args)}.json`;
  }
}
