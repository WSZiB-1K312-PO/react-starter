import React from 'react';

interface CounterProps {
    initialValue?: number;
    minValue?: number;
    maxValue?: number;
}

interface CounterState {
    count: number;
}

export class Counter extends React.Component<CounterProps, CounterState> {

    constructor(props: Readonly<CounterProps> | CounterProps) {
        super(props);

        this.state = {
            count: props.initialValue ? props.initialValue : 0
        }
    }

    render() {
        return <div>
            <button onClick={() => this.minusOne()} disabled={!!this.props.minValue && this.state.count === this.props.minValue}>-1</button>
            { this.state.count }
            <button onClick={() => this.plusOne()} disabled={!!this.props.maxValue && this.state.count === this.props.maxValue}>+1</button>
        </div>;
    }

    minusOne() {
        if(this.props.minValue && this.props.minValue < this.state.count) {
            this.setState({
                count: this.state.count - 1
            })
        }
    }

    plusOne() {
        if(this.props.maxValue && this.props.maxValue > this.state.count) {
            this.setState({
                count: this.state.count + 1
            })
        }
    }
}