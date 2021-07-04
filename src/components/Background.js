import React, { useEffect, useRef, useState } from 'react';
import RandomCircle from './RandomCircle';
import './Background.css';

const objectSpace = 60;
const Background = () => {
    const background = useRef();
    const [svgObjects, setSVGObjects] = useState([]);
    useEffect(() => {
        calculateObjects();
        window.addEventListener('resize', calculateObjects);
        return () => {
            window.removeEventListener('resize', calculateObjects);
        }
    }, []);
    const calculateObjects = () => {
        const width = background.current.offsetWidth;
        const height = background.current.offsetHeight;
        const noOfHorizontalObjectSpace = Math.ceil(width / objectSpace);
        const noOfVerticalObjectSpace = Math.ceil(height / objectSpace);
        const objects = [];
        Array(noOfHorizontalObjectSpace).fill().forEach((v, hIndex) => {
            Array(noOfVerticalObjectSpace).fill().forEach((v, vIndex) => {
                objects.push(<RandomCircle key={`${hIndex}-${vIndex}`} 
                    boundaryStartX = {hIndex * objectSpace}
                    boundaryStartY = {vIndex * objectSpace}
                    objectSpace = {objectSpace}/>);
            });
        });
        return setSVGObjects(objects);
    }
    return (
        <div className="background" ref={background}>
            <svg width="100vw" height="100vh">
                {svgObjects}
            </svg>
        </div>
    );
};

export default Background;