"use client";
import { useRef, useState } from "react";
import classes from "./image-picker.module.css";
import Image from "next/image";

function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInputRef = useRef();

  const handleClick = () => {
    imageInputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div classNam e={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && "No Image Selected"}
          {pickedImage && <Image src={pickedImage} fill alt='Selected Image' />}
        </div>
        <input
          className={classes.input}
          type='file'
          ref={imageInputRef}
          id={name}
          accept='image/png, image/jpeg'
          name={name}
          onChange={handleImageChange}
        />
        <button className={classes.button} type='button' onClick={handleClick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
