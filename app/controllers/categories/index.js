import Ember from "ember";

export default Ember.Controller.extend({
	i18n: Ember.inject.service(),
	modelDaos: Ember.inject.service('dao/model-daos'),
	globalNotificationStorage: Ember.inject.service(),

	sortCriteria: ['rootName', 'namePath'],
	sortedCategories: Ember.computed.sort('model', 'sortCriteria'),

	actions: {
		deleteCategory(id){
			const category = this.get('modelDaos.category').getById(id);
			category.delete();

			const i18n = this.get('i18n');
			const globalNotificationStorage = this.get('globalNotificationStorage');
			const message = i18n.t('section.categories.notifications.deleted', {
				name: category.get('namePathForHtml')
			});

			globalNotificationStorage.addWarning(message, 4000);

			return false;
		}
	}
});
