import React, { useState } from 'react';
import Config from "../../Config/Api.config";
import Loader from "../Loader/Loader";
import useHttp from "../../Hooks/http.hook";
import usePosition from "../../Hooks/position.hook";

export default class CurrentUV extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null,
            uv: null,
            pos: {
                x: 0,
                y: 0,
            }
        }
    }

    componentDidMount() {
        navigator.geolocation.getCurrentPosition(position => {
            const {
                latitude,
                longitude,
            } = position.coords;
            fetch(`${Config.url}uvi?appid=${Config.key}&lat=${latitude}&lon=${longitude}`)
                .then(res => res.json())
                .then(res => this.setState({
                    uv: res.value
                }))
                .catch(error => this.setState({
                    error
                }));
        });

        document.addEventListener('mousemove', this.logMousePosition.bind(this));
    }

    componentWillUnmount() {
        document.removeEventListener('mousemove', this.logMousePosition.bind(this));
    }

    logMousePosition({x, y}) {
        this.setState({pos: {x, y}});
    }

    render () {
        if (this.state.error) {
            return this.state.error
        }

        if (!this.state.uv) {
            return <Loader />
        }

        return <div>UVI: {this.state.uv} / 16 <UVIStatus uvi={this.state.uv} /></div>;
    }
}

function UVIStatus(props) {
    if (props.uvi < 3) { return 'Brak zagrożenia'}
    if (props.uvi < 6) { return 'Średnie zagrożenie'}
    if (props.uvi < 8) { return 'Wysokie zagrożenie'}
    if (props.uvi < 11) { return 'Bardzo wysokie zagrożenie'}

    return 'Ekstremalne zagrożenie';
}

export const CurrentUVF = () => {
    const [url, setUrl] = useState('');
    const [error, loadingPosition, position] = usePosition();
    const [loadingData, uvData] = useHttp(url, [url, position]);

    if (error) {
        return <div>{error}</div>
    }

    if (loadingPosition) {
        return <Loader/>
    }

    if (position && !url) {
        setUrl(`${Config.url}uvi?appid=${Config.key}&lat=${position.latitude}&lon=${position.longitude}`);
    }


    if (!uvData || loadingData) {
        return <Loader/>
    }

    return (
        <div>
            <span>UVI: {uvData.value} / 16 <UVIStatus uvi={uvData.value} /></span>
            <span>{this.state.x} {this.state.y}</span>
        </div>
    );
};
