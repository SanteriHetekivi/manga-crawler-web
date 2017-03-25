let React = require('react');



class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value};
    }

    updateState(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            value: value
        });

        if(this.props.onChange) this.props.onChange(name, value)
    }

    styles =
    {
        label:
        {
            textAlign: 'left',
            clear: 'both',
            float: 'left',
            width: '150px',

        },
        input: {
        }
    };


    render(){
        return(
            <div>
                <label
                    style={this.styles.label}
                    htmlFor={this.props.name}
                >
                    {this.props.label}:
                </label>
                <input
                    name={this.props.name}
                    value={this.state.value}
                    type={this.props.type}
                    onChange={this.updateState.bind(this)}
                    style={this.styles.input}
                />
            </div>

        );
    }
}

module.exports = Input;