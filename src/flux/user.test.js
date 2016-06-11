import * as Actions from './user';
import {createAppStore} from 'store';

const STORE_ID = 'user';

let store;

const getState = () =>
    store.getState()[STORE_ID];

describe('User Store', () => {
    beforeEach(() => {
        store = createAppStore();
    });

    it('should update name', () => {
        store.dispatch(Actions.updateName('Alexey'));
        expect(getState().name).to.equal('Alexey');
    });
});
