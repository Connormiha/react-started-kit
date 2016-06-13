const b = bem.default('work-sheet-table');

import './index.styl';
import capitalize from 'lodash/capitalize';

const IS_NOT_FIELD = 'is not filled';

export default class FormWorkTable extends React.Component {
    render() {
        let {name, surname, sex} = this.props,
            classNameItem = b('item'),
            classNameItemName = b('item-name');

        return (
            <article className={b}>
                <div className={classNameItem}>
                    <span className={classNameItemName}>Name:</span> {capitalize(name) || <i>{IS_NOT_FIELD}</i>}
                </div>

                <div className={classNameItem}>
                    <span className={classNameItemName}>Surname:</span> {capitalize(surname) || <i>{IS_NOT_FIELD}</i>}
                </div>

                <div className={classNameItem}>
                    <span className={classNameItemName}>Sex:</span> {sex || <i>{IS_NOT_FIELD}</i>}
                </div>
            </article>
        );
    }
}
