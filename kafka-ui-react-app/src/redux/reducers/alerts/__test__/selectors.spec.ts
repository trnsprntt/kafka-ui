import configureStore from 'redux/store/configureStore';
import { createTopicAction } from 'redux/actions';
import * as selectors from '../selectors';
import { failurePayload1, failurePayload2 } from './fixtures';

const store = configureStore();

describe('Alerts selectors', () => {
  describe('Initial State', () => {
    it('returns empty alert list', () => {
      expect(selectors.getAlerts(store.getState())).toEqual([]);
    });
  });

  describe('state', () => {
    beforeAll(() => {
      store.dispatch(createTopicAction.failure({ alert: failurePayload1 }));
      store.dispatch(createTopicAction.failure({ alert: failurePayload2 }));
    });

    it('returns fetch status', () => {
      const alerts = selectors.getAlerts(store.getState());
      expect(alerts.length).toEqual(2);
    });
  });
});
