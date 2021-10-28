import React from 'react'

export default function GalleryCard(props) {
    return (
        <div className="galleryCard">
            <img className="photos" src={props.photo.image} alt="" />
        </div>
    )
}
