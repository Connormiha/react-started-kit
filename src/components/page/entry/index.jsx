import {connect} from 'react-redux';
import * as userActions from 'flux/user';
import './index.sss';

@connect(
    ({user}) => ({user}),
    (dispatch) => {
        return {
            onUpdateUserName(value) {
                dispatch(userActions.updateName(value));
            }
        };
    }
)
export default class PageEntry extends React.Component {
    handleChangeName({target: {value}}) {
        this.props.onUpdateUserName(value);
    }

    render() {
        let {name} = this.props.user;

        return (
            <div>
                <h2>Hello {name || 'Anonym'}</h2>
                <form>
                    <input value={name} onChange={this.handleChangeName.bind(this)} placeholder="Your name" />
                </form>
            </div>
        );
    }
}
