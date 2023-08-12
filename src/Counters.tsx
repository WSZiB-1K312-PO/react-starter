import React from 'react';
import {Counter} from "./Counter";
import {CounterData} from "./CounterData";

interface CountersProps {
    counters: CounterData[]
}

interface CountersState {
    values: number[],
    counters: JSX.Element[]
}
export class Counters extends React.Component<CountersProps, CountersState> {

    constructor(props: Readonly<CountersProps> | CountersProps) {
        super(props);

        const values: number[] = [];

        const counters: JSX.Element[] = [];

        for (let i = 0; i < props.counters.length; i++){
            let counter = props.counters[i];

            counters.push(
              <Counter
                key={i}
                initialValue={counter.initialValue}
                minValue={counter.minValue}
                maxValue={counter.maxValue}
                valueChanged={newValue => {
                    const values = this.state.values;

                    values[i] = newValue;

                    this.setState({
                        values: values
                    })
                }}
              />
            );

            values.push(counter.initialValue ? counter.initialValue : 0);
        }

        this.state = {
            values: values,
            counters
        }
    }

    render() {
        const sum = this.state.values.reduce((previousValue, currentValue) => previousValue + currentValue);

        return <div>
            <p>Sum: {sum}</p>
            {this.state.counters}
        </div>;
    }
}