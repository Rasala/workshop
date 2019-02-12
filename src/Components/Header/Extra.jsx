import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import {getWeatherByLocation} from "../../Containers/Weather/Weather.service";

export class Cmp1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            text: 'Text'
        }

        this.inputChange = this.inputChange.bind(this);
    }

    inputChange(e) {
        this.setState({text: e.target.value});
    }

    render () {
        const { text } = this.state;

        return (
            <input className={styles.input} value={text} onChange={this.inputChange} />
        );
    }
}

export class Cmp2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null
        }
    }

    componentDidMount() {
        getWeatherByLocation({latitude: 54.207139, longitude: 16.0769203})
            .then((data) => this.setState({data}))
    }

    render() {
        const { data } = this.state;

        if (!data) return null;

        return (<span>{data.name}</span>)
    }
}

export const Cmp11 = () => {

}

export const Cmp22 = () => {

}