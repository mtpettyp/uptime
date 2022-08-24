import React from 'react';
import UptimeInput from './UptimeInput'
import DowntimeCalculator from './DowntimeCalculator'

import './App.css'

class App extends React.Component {

    state = { uptime: "99.9" }

    onUptimeChange = (uptime) => {
        var x = Number(uptime);

        if (!isNaN(x) && x <= 100 && x >= 0) {
            this.setState({ uptime: x });
        }
    }

    render() {
        return (
            <div className="app ui two column grid container flex">
                <div className="title">
                    <div>
                        <h2 className="ui icon header teal">
                            <i className="chart line icon"></i>
                            <div className="content">Uptime of {this.state.uptime}%</div>
                        </h2>
                    </div>
                    <br />
                    <br />
                    <UptimeInput uptime={this.state.uptime} onChange={this.onUptimeChange} />
                </div>
                <div className="column">
                    <DowntimeCalculator duration="day" uptime={this.state.uptime} />
                    <DowntimeCalculator duration="week" uptime={this.state.uptime} />
                    <DowntimeCalculator duration="month" uptime={this.state.uptime} />
                    <DowntimeCalculator duration="quarter" uptime={this.state.uptime} />
                    <DowntimeCalculator duration="year" uptime={this.state.uptime} />
                </div>
            </div >
        );
    }
}


export default App;