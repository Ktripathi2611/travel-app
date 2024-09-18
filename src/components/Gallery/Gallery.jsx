import React from 'react';
import Lightbox from 'react-lightbox-gallery'; // Correct import
import GalleryImg1 from "../../assets/images/gallery/g1.jpg";
import GalleryImg3 from "../../assets/images/gallery/g3.jpg";
import GalleryImg4 from "../../assets/images/gallery/g4.jpg";
import GalleryImg6 from "../../assets/images/gallery/g6.jpg";
import GalleryImg7 from "../../assets/images/gallery/g7.jpg";

const Gallery = () => {
    const images = [
        {
            src: GalleryImg1,
            desc: "Person wearing shoes",
            sub: "Gift Habeshaw"
        },
        {
            src: GalleryImg3,
            desc: "Blonde woman wearing sunglasses smiling at the camera",
            sub: "Dmitriy Frantsev"
        },
        {
            src: GalleryImg6,
            sub: "Harry Cunningham"
        },
        {
            src: GalleryImg4,
            desc: "Jaipur, Rajasthan India",
            sub: "Liam Baldock"
        },
        {
            src: GalleryImg7,
            sub: "Verne Ho"
        },
        {
            src: GalleryImg6,
            desc: "Rann of Kutch, India",
            sub: "Hari Nandakumar"
        },
    ];

    const settings = {
        columnCount: {
            default: 3,
            mobile: 2,
            tab: 3
        },
        mode: "dark",
        enableZoom: false,
    };

    return (
        <Lightbox images={images} settings={settings} />
    );
}

export default Gallery;
