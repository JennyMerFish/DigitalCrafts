import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import GalleryCard from './GalleryCard'
export default function Gallery() {
    const photos = useSelector((state) => state.galleryPhotos)
    console.log(photos)
    return (
        <div className="galleryPage">
            <Link to="/">Back Home</Link>
            <h1>Gallery</h1>
            {photos?.map((photo) => (<GalleryCard photo={photo} />))}
        </div>
    )
}
