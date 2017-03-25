let React = require('react');

class Select extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: this.props.value};
    }

    updateState(element) {
        this.setState({value: element});
        let value = (element)?element.value:false;
        if(this.props.onChange) this.props.onChange(this.props.name, value)
    }

    render(){
        let Select = require('react-select');
        return(
            <label>
                {this.props.label}:
                <Select
                    name={this.props.name}
                    value={this.state.value}
                    options={this.props.options}
                    onChange={this.updateState.bind(this)}
                />
            </label>

        );
    }
}

module.exports = Select;