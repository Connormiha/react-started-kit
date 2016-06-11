export default class FormWorkTable extends React.Component {
    render() {
        let {name, surname, sex} = this.props;

        return (
            <article>
                <div>
                    Name: {name}
                </div>

                <div>
                    Surname: {surname}
                </div>

                <div>
                    Sex: {sex}
                </div>
            </article>
        );
    }
}
