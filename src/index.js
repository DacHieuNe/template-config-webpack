import wallpaper from "./assets/img.jpg";

const domHandler = () => {
  console.log(wallpaper);
  document.body.style.backgroundImage = `url(${wallpaper})`;
};

domHandler();
