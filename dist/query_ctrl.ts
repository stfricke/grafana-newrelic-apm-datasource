///<reference path="../typings/tsd.d.ts" />
import {QueryCtrl} from 'app/plugins/sdk';

class NewRelicQueryCtrl extends QueryCtrl {
  static templateUrl = 'partials/query.editor.html';
  metric_types: any;
  datasource: any;
  type: any;

  /** @ngInject **/
  constructor($scope, $injector) {
    super($scope, $injector);
    this.metric_types = [
      { value: 'applications', label: 'Application' },
      { value: 'servers', label: 'Server'}
    ];
    if (!this.target.type) {
      this.target.type = this.metric_types[0].value;
    };
    if (!this.target.app_id) {
      this.target.app_id = this.datasource.appId;
    }
  };
}

export {NewRelicQueryCtrl};
