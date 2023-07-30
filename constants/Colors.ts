const white = '#FFFFFF';
const paleGray = '#F7F6F4';
const goldenrod = '#FFC720';
const paleYellow = '#FCEDC6';
const peach = '#FCD9C2';
const darkPink = '#FCDEDE';
const paleLavender = '#D6CAE8';
const darkPurple = '#4F3A75';
const darkGrayishBlue = '#544B64';

const tintColorLight = darkPurple;
const tintColorDark = goldenrod;

export default {
  light: {
    text: darkGrayishBlue,
    background: white,
    tint: tintColorLight,
    tabIconDefault: paleLavender,
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: white,
    background: darkPurple,
    tint: tintColorDark,
    tabIconDefault: paleYellow,
    tabIconSelected: tintColorDark,
  },
};
