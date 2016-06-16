import {connect} from 'react-redux';
import * as userActions from 'flux/user';
import PageEntryPure from './index.pure';

export default connect(
    ({user}) => ({user}),
    (dispatch) => {
        return {
            onUpdateUserName(value) {
                dispatch(userActions.updateName(value));
            },

            onUpdateUserSurname(value) {
                dispatch(userActions.updateSurname(value));
            },

            onUpdateUserSex(value) {
                dispatch(userActions.updateSex(value));
            }
        };
    }
)(PageEntryPure);
