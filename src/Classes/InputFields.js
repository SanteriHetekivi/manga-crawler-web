let React = require('react');
import Select from './InputFields/Select.js';
import Input from './InputFields/Input.js';

import MangaCrawlerCommand from './MangaCrawlerCommand.js';

class InputFields extends React.Component{

    constructor(props) {
        super(props);
        this.command = new MangaCrawlerCommand();
        this.state = {command: this.command.cmd()};
    }

    fieldChanged(name, value)
    {
        this.command.set(name, value);
        this.printCommand();
    }

    printCommand()
    {
        this.setState({
            command: this.command.cmd()
        });
    }

    render(){
        return(
            <div>
                <form>
                    <Select
                        label="Find"
                        name="find"
                        value={null}
                        options={this.command.finds}
                        onChange={this.fieldChanged.bind(this)}
                    />
                    <Select
                        label="Site"
                        name="site"
                        value={null}
                        options={this.command.sites}
                        onChange={this.fieldChanged.bind(this)}
                    />
                    <Input
                        label="Verbose"
                        value={false}
                        name="v"
                        type="checkbox"
                        onChange={this.fieldChanged.bind(this)}
                    />
                    <Input
                        label="Help"
                        value={false}
                        name="help"
                        type="checkbox"
                        onChange={this.fieldChanged.bind(this)}
                    />
                    <Input
                        label="Min Chapters"
                        value={0}
                        name="min_chapters"
                        type="number"
                        onChange={this.fieldChanged.bind(this)}
                    />
                    <Input
                        label="Manga XML-file"
                        value=""
                        name="manga_xml_file"
                        type="text"
                        onChange={this.fieldChanged.bind(this)}
                    />
                    <Input
                        label="Azure account key"
                        value=""
                        name="azure_account_key"
                        type="text"
                        onChange={this.fieldChanged.bind(this)}
                    />
                    <Input
                        label="Output File"
                        value=""
                        name="output_file"
                        type="text"
                        onChange={this.fieldChanged.bind(this)}
                    />
                </form>
                <br />
                <code>{this.state.command}</code>
            </div>
        );
}   }

module.exports = InputFields;