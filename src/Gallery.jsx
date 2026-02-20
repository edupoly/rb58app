import React, { useState } from "react";

function Gallery() {
  var [index, setIndex] = useState(0);
  var [images, setImages] = useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcZyAw7tyt8voKgLrmBHGTSV-4M1smBmMaaA&s",
    "https://img.freepik.com/free-photo/closeup-scarlet-macaw-from-side-view-scarlet-macaw-closeup-head_488145-3540.jpg",
    "https://www.bigfootdigital.co.uk/wp-content/uploads/2020/07/image-optimisation-scaled.jpg",
  ]);
  function nextImg() {
    if (index === images.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  function prevImg() {
    if (index == 0) {
      setIndex(images.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  return (
    <div className="border border-success border-2 m-2 p-2 rounded">
      <img src={images[index]} style={{ height: "200px" }} alt="" />
      <br />
      <button
        onClick={() => {
          nextImg();
        }}
        className="btn btn-info m-2 px-2 py-1"
      >
        Next
      </button>
      <button
        className="btn btn-secondary m-2 px-2 py-1"
        onClick={() => {
          prevImg();
        }}
      >
        Prev
      </button>
    </div>
  );
}

export default Gallery;
