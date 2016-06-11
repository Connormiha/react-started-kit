export default class FormWorkSheet extends React.Component {
    render() {
        let {name, surname, sex, onChangeName, onChangeSurname, onChangeSex} = this.props;

        return (
            <form>
                <label>
                    <span>Name:</span>
                    <input value={name} onChange={onChangeName} />
                </label>

                <label>
                    <span>Surname:</span>
                    <input value={surname} onChange={onChangeSurname} />
                </label>

                <label>
                    <span>Sex:</span>
                    <select onChange={onChangeSex} defaultValue={sex}>
                        {['male', 'female'].map((item) => {
                            return (
                                <option key={item} value={item}>{item}</option>
                            );
                        })}
                    </select>
                </label>
            </form>
        );
    }
}
