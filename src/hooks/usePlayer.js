import { useState } from 'react';

import { randomRustomino } from '../rustominos';

export const usePlayer = () => {
    const [player, setPlayer] = useState({
        pos: { x: 0, y: 0 },
        rustomino: randomRustomino().shape,
        collided: false,
    });

    return [player];
}