import React from 'react';
import './UptimeInput.css'


class UptimeInput extends React.Component {

    constructor(props) {
        super(props);
        this.uptime = this.props.uptime;
    }

    onChange = (event) => {
        this.uptime = event.target.value;
        this.props.onChange(this.uptime)
    }

    render() {
        return (
            <div className="uptime-input">
                <div className="ui right labeled input" >
                    <button className="ui teal labeled icon button">
                        <i className="chart line icon"></i>
                        Uptime
                    </button>
                    <input
                        type="text"
                        value={this.uptime}
                        onChange={this.onChange} />
                    <div className="ui basic label">%</div>
                </div>
            </div>
        );
    }

}

export default UptimeInput;