import React from 'react';
import {Counter} from "./Counter";


export class Counters extends React.Component<{}, {}> {

    constructor(props: Readonly<{}> | {}) {
        super(props);

    }

    render() {
        const sum = 0;
        return <div>
            <p>Sum: {sum}</p>
            <Counter initialValue={5}/>
            <Counter minValue={-5}/>
            <Counter minValue={-10} initialValue={10} maxValue={20}/>
        </div>;
    }
}