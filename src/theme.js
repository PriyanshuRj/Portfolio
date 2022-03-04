// Theme Presets
const AccentColor = [
  ['#9AD0EC', '#1572A1'],
  ['#d34235', '#eb6559'],
  ['#E3405F', '#FC1056'],
  ['#4FBDBA', '#24A19C'],
  ['#FFCC1D', '#FC9918']
];
function randomcolor(AccentColor) {
  return AccentColor[Math.floor(Math.random() * AccentColor.length)];
}
// let baseColor = randomcolor(AccentColor);
const lightTheme = {
  name: 'light',
  body: '#FFFFFF',
  text: '#343434',
  dark: '#000000',
  secondaryText: '#7F8DAA',
  accentColor: randomcolor(AccentColor),
  projectCard: '#DCE4F2',
  skinColor: '#F7B799',
  skinColor2: '#FCB696',
  imageDark: '#dce4f2',
  imageClothes: '#dce4f2',
  avatarMisc: '#e9ecf2',
  avatarShoes: '#ccd2e3'
};

const darkTheme = {
  name: 'dark',
  body: '#1D1D1D',
  text: '#FFFFFF',
  dark: '#000000',
  secondaryText: '#8D8D8D',
  accentColor: randomcolor(AccentColor),
  projectCard: '#292A2D',
  skinColor: '#F7B799',
  skinColor2: '#FCB696',
  imageDark: '#292A2D',
  imageClothes: '#000000',
  avatarMisc: '#212121',
  avatarShoes: '#2B2B2B'
};

export const themes = { light: lightTheme, dark: darkTheme };
