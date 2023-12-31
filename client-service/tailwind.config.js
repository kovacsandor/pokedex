/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/index.html', './src/**/*.tsx'],
  theme: {
    colors: {
      'pokedex-black': '#000000',
      'pokedex-gray-light': '#EEEEEE',
      'pokedex-gray': '#C4C4C4',
      'pokedex-red': '#FA0606',
      'pokedex-type-bug': 'olive',
      'pokedex-type-dark': 'darkblue',
      'pokedex-type-dragon': 'darkmagenta',
      'pokedex-type-electric': '#FCE72E',
      'pokedex-type-fairy': 'pink',
      'pokedex-type-fighting': 'orange',
      'pokedex-type-fire': '#FA0606',
      'pokedex-type-flying': 'lightskyblue',
      'pokedex-type-ghost': 'violet',
      'pokedex-type-grass': '#35FD61',
      'pokedex-type-ground': 'peru',
      'pokedex-type-ice': 'lightgray',
      'pokedex-type-normal': 'beige',
      'pokedex-type-poison': 'mediumspringgreen',
      'pokedex-type-psychic': 'deeppink',
      'pokedex-type-rock': 'gray',
      'pokedex-type-steel': 'steelblue',
      'pokedex-type-water': 'blue',
      'pokedex-white': '#ffffff',
    },
    fontFamily: {
      pokedex: ['Inter'],
    },
    extend: {},
  },
  plugins: [],
};
