import React from 'react';
import { Duration } from 'luxon'
import './DowntimeCalculator.css'

const durationConfig = {
    day: {
        display: 'Daily',
        milliseconds: '86400000'
    },
    week: {
        display: 'Weekly',
        milliseconds: '604800000'
    },
    month: {
        display: 'Monthly',
        milliseconds: '2592000000'
    },
    quarter: {
        display: 'Quarterly',
        milliseconds: '7884000000'
    },
    year: {
        display: 'Yearly',
        milliseconds: '31536000000'
    }
}


class DowntimeCalculator extends React.Component {

    constructor(props) {
        super(props);
        this.label = durationConfig[props.duration].display;
    }

    render() {
        const downtime = 1 - this.props.uptime / 100;

        const duration = Duration.fromMillis(downtime * durationConfig[this.props.duration].milliseconds)
            .shiftTo('days', 'hours', 'minutes', 'seconds');

        return (
            <div className="downtime-calculator ui card fluid">
                <div className="content">
                    <div className="ui teal label">{this.label}</div>
                    <div className="ui statistics">
                        <div className="statistic">
                            <div className="value">
                                {duration.days}
                            </div>
                            <div className="label">
                                Days
                        </div>
                        </div>
                        <div className="statistic">
                            <div className="value">
                                {duration.hours}
                            </div>
                            <div className="label">
                                Hours
                        </div>
                        </div>
                        <div className="statistic">
                            <div className="value">
                                {duration.minutes}
                            </div>
                            <div className="label">
                                Minutes
                        </div>
                        </div>
                        <div className="statistic">
                            <div className="value">
                                {Math.round(duration.seconds)}
                            </div>
                            <div className="label">
                                Seconds
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default DowntimeCalculator;