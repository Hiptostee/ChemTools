import Head from "next/head";
import Image from "next/image";
import data from "../data.json";
import { useState } from "react";
import React from "react";

import Navbar from "../components/navbar";
const colors = {
  color1:
    "bg-red-600",
  color2:
    "bg-blue-700",
  color3:
    "bg-blue-500",
  color4:
    "bg-teal-600",
  color5:
    "bg-red-500",
  color6:
    "bg-yellow-500",
  color7:
    "bg-orange-500",
  color8:
    "bg-green-400",
  color9:
    "bg-teal-700 ",
  color10:
    "bg-blue-800",
  color11:
    "bg-gray-200",
  color12:
    "bg-gray-400 ",
  reference:
    "bg-teal-600 hover:none  pointer-events-none",
  reference2:
    "bg-blue-800 hover:none  pointer-events-none",
  heading: "font-xl",
  none: "border-t border-gray-800 bg-gray-800 cursor-default",
};
const style = " border-2 border-gray-200 dark:border-gray-800 rounded-lg text-center font-bold align-middle w-12 hover:brightness-150 hover:text-black";

const fiftyseven71 = [
  {
    number: 57,
    symbol: "La",
    name: "Lanthanum",
    color: (colors.color4 + style),
    mass: 138.91,
  },
  {
    number: 58,
    symbol: "Ce",
    name: "Cerium",
    color: (colors.color4 + style),
    mass: 140.12,
  },
  {
    number: 59,
    symbol: "Pr",
    name: "Praseodymium",
    color: (colors.color4 + style),
    mass: 140.91,
  },
  {
    number: 60,
    symbol: "Nd",
    name: "Neodymium",
    color: (colors.color4 + style),
    mass: 144.24,
  },
  {
    number: 61,
    symbol: "Pm",
    name: "Promethium",
    color: (colors.color4 + style),
    mass: 150,
  },
  {
    number: 62,
    symbol: "Sm",
    name: "Samarium",
    color: (colors.color4 + style),
    mass: 150.36,
  },
  {
    number: 63,
    symbol: "Eu",
    name: "Europium",
    color: (colors.color4 + style),
    mass: 151.96,
  },
  {
    number: 64,
    symbol: "Gd",
    name: "Gadolinium",
    color: (colors.color4 + style),
    mass: 157.25,
  },
  {
    number: 65,
    symbol: "Tb",
    name: "Terbium",
    color: (colors.color4 + style),
    mass: 158.93,
  },
  {
    number: 66,
    symbol: "Dy",
    name: "Dysprosium",
    color: (colors.color4 + style),
    mass: 162.5,
  },
  {
    number: 67,
    symbol: "Ho",
    name: "Holmium",
    color: (colors.color4 + style),
    mass: 164.93,
  },
  {
    number: 68,
    symbol: "Er",
    name: "Erbium",
    color: (colors.color4 + style),
    mass: 167.26,
  },
  {
    number: 69,
    symbol: "Tm",
    name: "Thulium",
    color: (colors.color4 + style),
    mass: 168.93,
  },
  {
    number: 70,
    symbol: "Yb",
    name: "Ytterbium",
    color: (colors.color4 + style),
    mass: 173.05,
  },
  {
    number: 71,
    symbol: "Lu",
    name: "Lutetium",
    color: (colors.color4 + style),
    mass: 174.97,
  },
];

const eightynineonehundredand3 = [
  {
    number: 89,
    symbol: "Ac",
    name: "Actinium",
    color: (colors.color10 + style),
    mass: 227,
  },
  {
    number: 90,
    symbol: "Th",
    name: "Thorium",
    color: (colors.color10 + style),
    mass: 232.04,
  },
  {
    number: 91,
    symbol: "Pa",
    name: "Protactinium",
    color: (colors.color10 + style),
    mass: 231.04,
  },
  {
    number: 92,
    symbol: "U",
    name: "Uranium",
    color: (colors.color10 + style),
    mass: 238.03,
  },
  {
    number: 93,
    symbol: "Np",
    name: "Neptunium",
    color: (colors.color10 + style),
    mass: 237,
  },
  {
    number: 94,
    symbol: "Pu",
    name: "Plutonium",
    color: (colors.color10 + style),
    mass: 244,
  },
  {
    number: 95,
    symbol: "Am",
    name: "Americium",
    color: (colors.color10 + style),
    mass: 243,
  },
  {
    number: 96,
    symbol: "Cm",
    name: "Curium",
    color: (colors.color10 + style),
    mass: 247,
  },
  {
    number: 97,
    symbol: "Bk",
    name: "Berkelium",
    color: (colors.color10 + style),
    mass: 247,
  },
  {
    number: 98,
    symbol: "Cf",
    name: "Californium",
    color: (colors.color10 + style),
    mass: 251,
  },
  {
    number: 99,
    symbol: "Es",
    name: "Einsteinium",
    color: (colors.color10 + style),
    mass: 252,
  },
  {
    number: 100,
    symbol: "Fm",
    name: "Fermium",
    color: (colors.color10 + style),
    mass: 257,
  },
  {
    number: 101,
    symbol: "Md",
    name: "Mendelevium",
    color: (colors.color10 + style),
    mass: 258,
  },
  {
    number: 102,
    symbol: "No",
    name: "Nobelium",
    color: (colors.color10 + style),
    mass: 259,
  },
  {
    number: 103,
    symbol: "Lr",
    name: "Lawrencium",
    color: (colors.color10 + style),
    mass: 266,
  },
];
const fiveTen = [
  { number: 5, symbol: "B", name: "Boron", color: (colors.color6 + style), mass: 10.81 },
  {
    number: 6,
    symbol: "C",
    name: "Carbon",
    color: (colors.color1 + style),
    mass: 12.011,
  },
  {
    number: 7,
    symbol: "N",
    name: "Nitrogen",
    color: (colors.color1 + style),
    mass: 14.007,
  },
  {
    number: 8,
    symbol: "O",
    name: "Oxygen",
    color: (colors.color1 + style),
    mass: 15.999,
  },
  {
    number: 9,
    symbol: "F",
    name: "Fluorine",
    color: (colors.color8 + style),
    mass: 18.998,
  },
  { number: 10, symbol: "Ne", name: "Neon", color: (colors.color9 + style), mass: 20.18 },
];
const eightyseven118 = [
  {
    number: 87,
    symbol: "Fr",
    name: "Francium",
    color: (colors.color2 + style),
    mass: 223,
  },
  { number: 88, symbol: "Ra", name: "Radium", color: (colors.color3 + style), mass: 226 },
  {
    number: "89 - 103",
    name: "",
    color: (colors.reference2 + style),
    mass: 0.0,
  },
  {
    number: 104,
    symbol: "Rf",
    name: "Rutherfordium",
    color: (colors.color5 + style),
    mass: 267,
  },
  {
    number: 105,
    symbol: "Db",
    name: "Dubnium",
    color: (colors.color5 + style),
    mass: 268,
  },
  {
    number: 106,
    symbol: "Sg",
    name: "Seaborgium",
    color: (colors.color5 + style),
    mass: 269,
  },
  {
    number: 107,
    symbol: "Bh",
    name: "Bohrium",
    color: (colors.color5 + style),
    mass: 270,
  },
  {
    number: 108,
    symbol: "Hs",
    name: "Hassium",
    color: (colors.color5 + style),
    mass: 277,
  },
  {
    number: 109,
    symbol: "Mt",
    name: "Meitnerium",
    color: (colors.color5 + style),
    mass: 278,
  },
  {
    number: 110,
    symbol: "Ds",
    name: "Darmstadtium",
    color: (colors.color5 + style),
    mass: 281,
  },
  {
    number: 111,
    symbol: "Rg",
    name: "Roentgenium",
    color: (colors.color5 + style),
    mass: 282,
  },
  {
    number: 112,
    symbol: "Cn",
    name: "Copernicium",
    color: (colors.color5 + style),
    mass: 285,
  },
  {
    number: 113,
    symbol: "Nh",
    name: "Nihonium",
    color: (colors.color12 + style),
    mass: 286,
  },
  {
    number: 114,
    symbol: "Fl",
    name: "Flerovium",
    color: (colors.color12 + style),
    mass: 289,
  },
  {
    number: 115,
    symbol: "Mc",
    name: "Moscovium",
    color: (colors.color12 + style),
    mass: 290,
  },
  {
    number: 116,
    symbol: "Lv",
    name: "Livermorium",
    color: (colors.color12 + style),
    mass: 293,
  },
  {
    number: 117,
    symbol: "Ts",
    name: "Tennessine",
    color: (colors.color12 + style),
    mass: 294,
  },
  {
    number: 118,
    symbol: "Og",
    name: "Oganesson",
    color: (colors.color12 + style),
    mass: 294,
  },
];
const thirteenEighteen = [
  {
    number: 13,
    symbol: "Al",
    name: "Aluminum",
    color: (colors.color7 + style),
    mass: 26.982,
  },
  {
    number: 14,
    symbol: "Si",
    name: "Silicon",
    color: (colors.color6 + style),
    mass: 28.085,
  },
  {
    number: 15,
    symbol: "P",
    name: "Phosphorus",
    color: (colors.color1 + style),
    mass: 20.974,
  },
  {
    number: 16,
    symbol: "S",
    name: "Sulfur",
    color: (colors.color1 + style),
    mass: 32.06,
  },
  {
    number: 17,
    symbol: "Cl",
    name: "Chlorine",
    color: (colors.color8 + style),
    mass: 35.45,
  },
  {
    number: 18,
    symbol: "Ar",
    name: "Argon",
    color: (colors.color9 + style),
    mass: 39.948,
  },
];
const row1 = [
  {
    number: 19,
    symbol: "K",
    name: "Potassium",
    color: (colors.color2 + style),
    mass: 39.098,
  },
  {
    number: 20,
    symbol: "Ca",
    name: "Calcium",
    color: (colors.color3 + style),
    mass: 40.078,
  },
  {
    number: 21,
    symbol: "Sc",
    name: "Scandium",
    color: (colors.color5 + style),
    mass: 44.956,
  },
  {
    number: 22,
    symbol: "Ti",
    name: "Titanium",
    color: (colors.color5 + style),
    mass: 47.867,
  },
  {
    number: 23,
    symbol: "V",
    name: "Vanadium",
    color: (colors.color5 + style),
    mass: 50.942,
  },
  {
    number: 24,
    symbol: "Cr",
    name: "Chromium",
    color: (colors.color5 + style),
    mass: 51.996,
  },
  {
    number: 25,
    symbol: "Mn",
    name: "Manganese",
    color: (colors.color5 + style),
    mass: 54.938,
  },
  {
    number: 26,
    symbol: "Fe",
    name: "Iron",
    color: (colors.color5 + style),
    mass: 55.845,
  },
  {
    number: 27,
    symbol: "Co",
    name: "Cobalt",
    color: (colors.color5 + style),
    mass: 58.933,
  },
  {
    number: 28,
    symbol: "Ni",
    name: "Nickel",
    color: (colors.color5 + style),
    mass: 58.693,
  },
  {
    number: 29,
    symbol: "Cu",
    name: "Copper",
    color: (colors.color5 + style),
    mass: 63.546,
  },
  { number: 30, symbol: "Zn", name: "Zinc", color: (colors.color5 + style), mass: 65.38 },
  {
    number: 31,
    symbol: "Ga",
    name: "Gallium",
    color: (colors.color7 + style),
    mass: 69.723,
  },
  {
    number: 32,
    symbol: "Ge",
    name: "Germanium",
    color: (colors.color6 + style),
    mass: 72.63,
  },
  {
    number: 33,
    symbol: "As",
    name: "Arsenic",
    color: (colors.color1 + style),
    mass: 74.922,
  },
  {
    number: 34,
    symbol: "Se",
    name: "Selenium",
    color: (colors.color1 + style),
    mass: 78.971,
  },
  {
    number: 35,
    symbol: "Br",
    name: "Bromine",
    color: (colors.color8 + style),
    mass: 79.904,
  },
  {
    number: 36,
    symbol: "Kr",
    name: "Krypton",
    color: (colors.color9 + style),
    mass: 83.798,
  },
];

const row2 = [
  {
    number: 37,
    symbol: "Rb",
    name: "Rubidium",
    color: (colors.color2 + style),
    mass: 85.468,
  },
  {
    number: 38,
    symbol: "Sr",
    name: "Strontium",
    color: (colors.color3 + style),
    mass: 87.62,
  },
  {
    number: 39,
    symbol: "Y",
    name: "Yttrium",
    color: (colors.color5 + style),
    mass: 88.906,
  },
  {
    number: 40,
    symbol: "Zr",
    name: "Zirconium",
    color: (colors.color5 + style),
    mass: 91.224,
  },
  {
    number: 41,
    symbol: "Nb",
    name: "Niobium",
    color: (colors.color5 + style),
    mass: 92.906,
  },
  {
    number: 42,
    symbol: "Mo",
    name: "Molybdenum",
    color: (colors.color5 + style),
    mass: 95.95,
  },
  {
    number: 43,
    symbol: "Tc",
    name: "Technetium",
    color: (colors.color5 + style),
    mass: 98,
  },
  {
    number: 44,
    symbol: "Ru",
    name: "Ruthenium",
    color: (colors.color5 + style),
    mass: 101.07,
  },
  {
    number: 45,
    symbol: "Rh",
    name: "Rhodium",
    color: (colors.color5 + style),
    mass: 102.91,
  },
  {
    number: 46,
    symbol: "Pd",
    name: "Palladium",
    color: (colors.color5 + style),
    mass: 106.42,
  },
  {
    number: 47,
    symbol: "Ag",
    name: "Silver",
    color: (colors.color5 + style),
    mass: 107.87,
  },
  {
    number: 48,
    symbol: "Cd",
    name: "Cadmium",
    color: (colors.color5 + style),
    mass: 112.41,
  },
  {
    number: 49,
    symbol: "In",
    name: "Indium",
    color: (colors.color7 + style),
    mass: 114.82,
  },
  { number: 50, symbol: "Sn", name: "Tin", color: (colors.color7 + style), mass: 188.71 },
  {
    number: 51,
    symbol: "Sb",
    name: "Antimony",
    color: (colors.color6 + style),
    mass: 121.76,
  },
  {
    number: 52,
    symbol: "Te",
    name: "Tellurium",
    color: (colors.color6 + style),
    mass: 127.6,
  },
  {
    number: 53,
    symbol: "I",
    name: "Iodine",
    color: (colors.color8 + style),
    mass: 126.9,
  },
  {
    number: 54,
    symbol: "Xe",
    name: "Xenon",
    color: (colors.color9 + style),
    mass: 131.29,
  },
];
const row3 = [
  {
    number: 55,
    symbol: "Cs",
    name: "Cesium",
    color: (colors.color2 + style),
    mass: 132.91,
  },
  {
    number: 56,
    symbol: "Ba",
    name: "Barium",
    color: (colors.color3 + style),
    mass: 137.33,
  },
  { number: "57 - 71", color: (colors.reference + style), mass: 0.0 },
  {
    number: 72,
    symbol: "Hf",
    name: "Hafnium",
    color: (colors.color5 + style),
    mass: 87.49,
  },
  {
    number: 73,
    symbol: "Ta",
    name: "Tantalum",
    color: (colors.color5 + style),
    mass: 180.95,
  },
  {
    number: 74,
    symbol: "W",
    name: "Tungsten",
    color: (colors.color5 + style),
    mass: 18384,
  },
  {
    number: 75,
    symbol: "Re",
    name: "Rhenium",
    color: (colors.color5 + style),
    mass: 86.21,
  },
  {
    number: 76,
    symbol: "Os",
    name: "Osmium",
    color: (colors.color5 + style),
    mass: 190.23,
  },
  {
    number: 77,
    symbol: "Ir",
    name: "Iridium",
    color: (colors.color5 + style),
    mass: 192.22,
  },
  {
    number: 78,
    symbol: "Pt",
    name: "Platinum",
    color: (colors.color5 + style),
    mass: 195.08,
  },
  {
    number: 79,
    symbol: "Au",
    name: "Gold",
    color: (colors.color5 + style),
    mass: 196.97,
  },
  {
    number: 80,
    symbol: "Hg",
    name: "Mercury",
    color: (colors.color5 + style),
    mass: 200.59,
  },
  {
    number: 81,
    symbol: "Tl",
    name: "Thallium",
    color: (colors.color7 + style),
    mass: 204.38,
  },
  { number: 82, symbol: "Pb", name: "Lead", color: (colors.color7 + style), mass: 207.2 },
  {
    number: 83,
    symbol: "Bi",
    name: "Bismuth",
    color: (colors.color7 + style),
    mass: 208.98,
  },
  {
    number: 84,
    symbol: "Po",
    name: "Polonium",
    color: (colors.color6 + style),
    mass: 209,
  },
  {
    number: 85,
    symbol: "At",
    name: "Astatine",
    color: (colors.color8 + style),
    mass: 210,
  },
  { number: 86, symbol: "Rn", name: "Radon", color: (colors.color9 + style), mass: 222 },
];

export default function Home() {
  const [element1Name, setElement1Name] = useState("");
  const [element2Name, setElement2Name] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [element1, setElement1] = useState("");
  const [element2, setElement2] = useState("");
  const [difference, setDifference] = useState("");

  function calculateElectronegativityDifference(element1, element2) {
    const difference = Math.abs(element1 - element2);
    setDifference(difference.toFixed(2));
  }

  return (
    <>
      <div className="h-screen bg-gray-200 dark:bg-gray-800">
        <Head>
          <title>ChemTools | Bond Type</title>
        </Head>{" "}
        <div className="z-0">
          {" "}
          <Navbar
            sidebarOpen={sidebarOpen}
            setSidebarOpen={setSidebarOpen}
            page="Bond Type"
          />
        </div>
        <main className="flex-1">
          <div className="h-full bg-gray-800 py-6 dark:bg-gray-800 text-wrap">
            <div className="bg-gray-800 h-full ml-8 md:ml-48 lg:ml-72 px-3 pb-3 sm:px-6 md:mx-auto md:px-8 text-wrap ">
              <div className="w-full col-md-9 col-sm-8 col-12 smallcenter mx-auto my-auto ml-2 md:m-16">
                <h1 className="text-center mb-6 text-5xl font-bold md:text-7xl">
                  Chemistry Tools
                </h1>
                <p className="text-center text-2xl font-light md:text-3xl">

                </p>
                <hr className="text-white my-16 border-dotted "></hr>
              </div>{" "}
              
              <h1>{element1Name}</h1>
              <h1>{element2Name}</h1>
              {JSON.stringify(difference)}

              <table className="w-11/12 mx-8 bg-gray-800 mt-8 cursor-pointer">
                <tbody>
                  <tr>
                    <td className={`${colors.color1 + style} text-xs sm:text-xl`}>
                      1<br></br>H
                    </td>
                    <td
                      className={`${colors.none} cursor-default text-xs sm:text-xl `}
                      colSpan="16"
                    ></td>
                    <td className={colors.color9 + style}>
                      2<br></br>He
                    </td>
                  </tr>
                  <tr>
                    <td className={colors.color2 + style}>
                      3<br></br>Li
                    </td>
                    <td className={colors.color3 + style}>
                      4<br></br>Be
                    </td>
                    <td
                      className={`${colors.none} cursor-default `}
                      colSpan="10"
                    ></td>
                    {fiveTen.map((element, key) => (
                      <td
                        onClick={() => {
                          element1 && element2
                            ? (calculateElectronegativityDifference(
                                element1,
                                element.en
                              ),
                              setElement2Name(element.name))
                            : (setElement2(""),
                              setElement1(element.en),
                              setElement1Name(element.name));
                        }}
                        key={key}
                        className={element.color}
                      >
                        {element.number}
                        <br></br>
                        {element.symbol}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    <td className={colors.color2 + style}>
                      11<br></br>Na
                    </td>
                    <td className={colors.color3 + style}>
                      12<br></br>Mg
                    </td>

                    <td
                      className={`${colors.none} cursor-default`}
                      colSpan="10"
                    ></td>
                    {thirteenEighteen.map((element, key) => (
                      <td
                        onClick={() => {
                          element1
                            ? (calculateElectronegativityDifference(
                                element1,
                                element.en
                              ),
                              setElement2Name(element.name))
                            : (setElement2(""),
                              setElement1(element.en),
                              setElement1Name(element.name));
                        }}
                        key={key}
                        className={element.color}
                      >
                        {element.number}
                        <br></br>
                        {element.symbol}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {row1.map((element, key) => (
                      <td
                        onClick={() => {
                          element1
                            ? (calculateElectronegativityDifference(
                                element1,
                                element.en
                              ),
                              setElement2Name(element.name))
                            : (setElement2(""),
                              setElement1(element.en),
                              setElement1Name(element.name));
                        }}
                        key={key}
                        className={element.color}
                      >
                        {element.number}
                        <br></br>
                        {element.symbol}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {row2.map((element, key) => (
                      <td
                        onClick={() => {
                          element1
                            ? (calculateElectronegativityDifference(
                                element1,
                                element.en
                              ),
                              setElement2Name(element.name))
                            : (setElement2(""),
                              setElement1(element.en),
                              setElement1Name(element.name));
                        }}
                        key={key}
                        className={element.color}
                      >
                        {element.number}
                        <br></br>
                        {element.symbol}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {row3.map((element, key) => (
                      <td
                        onClick={() => {
                          element1
                            ? (calculateElectronegativityDifference(
                                element1,
                                element.en
                              ),
                              setElement2Name(element.name))
                            : (setElement2(""),
                              setElement1(element.en),
                              setElement1Name(element.name));
                        }}
                        key={key}
                        className={element.color}
                      >
                        {element.number}
                        <br></br>
                        {element.symbol}
                      </td>
                    ))}
                  </tr>
                  <tr>
                    {eightyseven118.map((element, key) => (
                      <td
                        onClick={() => {
                          element1
                            ? (calculateElectronegativityDifference(
                                element1,
                                element.en
                              ),
                              setElement2Name(element.name))
                            : (setElement2(""),
                              setElement1(element.en),
                              setElement1Name(element.name));
                        }}
                        key={key}
                        className={element.color}
                      >
                        {element.number}
                        <br></br>
                        {element.symbol}
                      </td>
                    ))}
                  </tr>

                  <tr>
                    <td
                      className="cursor-default bg-gray-800 border-l border-b border-gray-800 "
                      colSpan="2"
                      rowSpan="2"
                    ></td>
                    {fiftyseven71.map((element, key) => (
                      <td
                        onClick={() => {
                          element1
                            ? (calculateElectronegativityDifference(
                                element1,
                                element.en
                              ),
                              setElement2Name(element.name))
                            : (setElement2(""),
                              setElement1(element.en),
                              setElement1Name(element.name));
                        }}
                        key={key}
                        className={element.color}
                      >
                        {element.number}
                        <br></br>
                        {element.symbol}
                      </td>
                    ))}
                    <td
                      className="bg-gray-800 border cursor-default border-gray-800"
                      colSpan="1"
                      rowSpan="1"
                    ></td>
                  </tr>

                  <tr>
                    {eightynineonehundredand3.map((element, key) => (
                      <td
                        onClick={() => {
                          element1
                            ? (calculateElectronegativityDifference(
                                element1,
                                element.en
                              ),
                              setElement2Name(element.name))
                            : (setElement2(""),
                              setElement1(element.en),
                              setElement1Name(element.name));
                        }}
                        key={key}
                        className={element.color}
                      >
                        {element.number}
                        <br></br>
                        {element.symbol}
                      </td>
                    ))}
                    <td className="cursor-default bg-gray-800"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
