import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('parent', function() {
    this.route('child');
  });
  this.route('cp-obj');
  this.route('update');
});

export default Router;
