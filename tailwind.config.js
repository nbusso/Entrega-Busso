/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        synthwave: {
          cleanPoolBlue: "#59CBE8",
          maldives: "#00BCE1",
          pinkBite: "#E93CAC",
          sapphireSplendour: "#1E22AA",
          shadownPlanet: "#201547",
          midnightDreams: "#051C2C",
        },
        vaporwave: {
          vanishingPurple: "#3C1053",
          loveVesselPink: "#E10098",
          gustoGold: "#F4AF23",
          poolBlue: "#4AC9E3",
          barelyBloomed: "#D7A9E3",
          cardinalPink: "#890C58",
        },
      },
      fontFamily: {
        roboto: ["'Roboto Mono'", "monospace"],
      },
    },
  },
  plugins: [],
});
