import React from 'react'

const ImageList = (props) => {

    const pulledImages = props.images.map(({ id, alt_description, urls }) => { // <- Destructured the image into some properties
        return <img key={id} alt={alt_description} src={urls.regular} />
    });

    return (
        <div>{pulledImages}</div>
    );
};


export default ImageList;