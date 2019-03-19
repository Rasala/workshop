import React, {lazy} from 'react';

const Tile = lazy(() => import('./Tile'));

export function Tiles(props) {
    console.log('RENDERING TILES');

    return props.list.map((part, index) => (
        <Tile
            key={index}
            datetime={part.dt}
            temp={part.main.temp}
            pressure={part.main.pressure}
            humidity={part.main.humidity}
            weather={part.weather[0]}
        />)
    )
}

// export default React.memo(Tiles);
