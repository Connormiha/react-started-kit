import * as Actions from './user';
import {createAppStore} from 'store';
import schema from 'reducers/schema';

let store;

const getState = () =>
    store.getState().user;

describe('User Store', () => {
    beforeEach(() => {
        store = createAppStore();
    });

    it('should update name', () => {
        store.dispatch(Actions.updateName('Alexey'));
        expect(getState().name).to.equal('Alexey');
    });

    it('should initial values', () => {
        expect(getState()).to.deep.equal(schema.user);
    });
});
