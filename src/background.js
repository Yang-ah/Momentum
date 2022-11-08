const imgs = [
  "https://images.wallpaperscraft.com/image/single/forest_trees_pines_415217_1600x900.jpg",
  "https://images.wallpaperscraft.com/image/single/forest_fog_trees_132037_1600x900.jpg",
  "https://images.wallpaperscraft.com/image/single/lake_forest_snow_130421_1600x900.jpg",
  "https://images.wallpaperscraft.com/image/single/autumn_forest_trees_129892_1600x900.jpg",
  "https://images.wallpaperscraft.com/image/single/forest_fog_trees_128751_1600x900.jpg",
  "https://images.wallpaperscraft.com/image/single/trees_river_reflection_134973_1600x900.jpg",
  "https://images.wallpaperscraft.com/image/single/ocean_water_underwater_126683_1600x900.jpg",
  "https://images.wallpaperscraft.com/image/single/ocean_surf_foam_sea_water_117846_1600x900.jpg",
];
const body = document.querySelector("#body");
const randomIMG = imgs[Math.floor(Math.random() * imgs.length)];

body.style.backgroundImage = `url("${randomIMG}")`;
