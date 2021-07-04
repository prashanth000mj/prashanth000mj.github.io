import React from 'react';

const maxRadius = 40;
const RandomCircle = ({boundaryStartX, boundaryStartY, objectSpace}) => {
    const getRandomRadius = () => {
        let radius = Math.floor(Math.random() * 100) % maxRadius;
        radius = radius < 10 ? radius + 10 : radius;
        return radius;
    }
    const getRandomCircleCenterX = () => {
        let x = Math.floor(Math.random() * 100) % objectSpace;
        x = x < 10 ? x + 10 : x;
        x = x + boundaryStartX;
        return x;
    }

    const getRandomCircleCenterY = () => {
        let y = Math.floor(Math.random() * 100) % objectSpace;
        y = y < 10 ? y + 10 : y;
        y = y + boundaryStartY;
        return y;
    }

    return (
        <circle 
            cx={getRandomCircleCenterX()} 
            cy={getRandomCircleCenterY()} 
            r={getRandomRadius()} 
            stroke="lightgray" 
            stroke-width="1" 
            fill="none" />
    );
};

export default React.memo(RandomCircle);