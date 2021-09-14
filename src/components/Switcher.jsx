import React from 'react';

import ThemeOn from '../img/lampadaOn.png';
import ThemeOff from '../img/lampadaOff.png';

const claro = <img src={ThemeOn} alt="Tema Claro" />;
const escuro = <img src={ThemeOff} alt="Tema Laranja" />;

export default ({ themess }) => (themess ? escuro : claro);
