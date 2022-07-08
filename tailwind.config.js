module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {},
  },
  //...
  // 0
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
         
          // "primary-focus": "mediumblue",
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff"
        },
      },
    ],
  },
  // // 1
  // daisyui: {
  //   themes: [
  //     {
  //       doctortheme: {
  //         primary: "red",
  //         secondary: "red",
  //         accent: "#37cdbe",
  //         neutral: "#3d4451",
  //         "base-100": "#ffffff",
  //       },
  //     },
  //     "dark",
  //     "cupcake",
  //   ],
  // },
  // 2
//   daisyui: {
//     themes: [
//       {'dark': {
//         "primary": "#793ef9",
//         "primary-focus": "#570df8",
//         "primary-content": "#ffffff",
//         "secondary": "blue",
//         "secondary-focus": "#bd0091",
//         "secondary-content": "#ffffff",
//         "accent": "#37cdbe",
//         "accent-focus": "#2aa79b",
//         "accent-content": "#ffffff",
//         "neutral": "#2a2e37",
//         "neutral-focus": "#16181d",
//         "neutral-content": "#ffffff",
//         "base-100": "#3d4451",
//         "base-200": "#2a2e37",
//         "base-300": "#16181d",
//         "base-content": "#ebecf0",
//         "info": "#66c6ff",
//         "success": "#87d039",
//         "warning": "#e2d562",
//         "error": "#ff6f6f"
//       }},
//       'light',
//     ]
// },
  plugins: [require("daisyui")],
};
