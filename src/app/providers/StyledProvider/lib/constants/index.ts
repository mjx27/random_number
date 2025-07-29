import { type ITheme } from '../../models/interfaces';

export const constTheme: ITheme = {
  gaps: {
    gapLittle: '5px',
    gapMedium: '20px',
    gapBig: '40px',
  },
  paddings: {
    paddingLittle1: '5px',
    paddingLittle2: '10px',
    paddingMedium: '20px',
    paddingBig: '40px',
  },
  borderRadiuses: {
    borderRadiusLittle: '5px',
    borderRadiusMedium: '10px',
    borderRadiusBig: '20px',
  },
  transitions: {
    transitionDefaultSlow: 'all .3s linear',
    transitionDefaultFast: 'all .15s linear',
  },
  colorMain: ' #191919',
  colorTextMain: ' #ffffffff',
  colorTextAdd1: ' #bababaff',
  colorTextAdd2: ' #000000ff',
  colorTextAdd3: ' #009253ff',
  colorAdd1: ' #131313ff',
  colorAdd2: ' #9e9e9eff',
  colorAdd3: ' #00ff8fff',
};

//<<----- CALMA THEME ----->>
// colorMain: '#eee2dc',
//; colorText: '#b57a62',
//; colorAdd1: '#bab2b5',
//; colorAdd2: '#123c69',
//; colorAdd3: '#ac3b61',

// <<----- NOT CALMA THEME ----->>
//   colorMain: ' #191919',
//   colorText: ' #ffffff',
//   colorAdd1: ' #131313',
//   colorAdd2: ' #9e9e9e',
//   colorAdd3: ' #00ff8f',
