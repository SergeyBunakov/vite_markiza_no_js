/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./build/**/*.html", "./build/**/js/*.js"],
    theme: {
        container: {
            padding: {
                DEFAULT: 'min(5em, 8%)',
            },
        },
        screens: {
            xs: '499.99px',
            sm: '767.99px',
            md: '991.99px',
            lg: '1199.99px',
            xl: '1439.99px',

            'widescreen': {'raw': '(min-aspect-ratio: 3/2)'},
            'tallscreen': {'raw': '(max-aspect-ratio: 13/20)'},
        },
        fontFamily: {
            primary: 'DM Serif Display , serif',
            secondary: 'Plus Jakarta Sans, sans-serif',
        },
        extend: {
            aspectRatio: {
                '9/16': '9 / 16',
            },
            backgroundImage: {
                dropdown: "url('../img/icons/arrows/dropdown.svg')",
                designer: "url('../img/service/konstruktorskyj-viddil.jpg')",
                welding: "url('../img/service/zvaruvalnyj-viddil.jpg')",
                tailoring: "url('../img/service/viddil-poshyttya.jpg')",
                services: "url('../img/service/servisnyj-viddil.jpg')",
                awning: "url('../img/products/awnings/terrace_awning_01.jpg')"
            },
            colors: {
                accent: {
                    DEFAULT: '#EE7828',
                    secondary: '#806D61',
                    third: '#C5BAAA',
                    hover: '#f99e3b',
                    // secondary: '#fea03c',
                },
                primary: {
                    DEFAULT: '#292f36',
                    hover: '#343e4a',
                },
                secondary: '#2C2C2C',
                concrete: '#C5BAAA',
                craft: '#806D61',
                brightBrick: '#EE7828',
                graphite: '#2C2C2C',
                third: '#F5F5DC',
                blueviolet: '#5027B5',
                one: '#03cc65',
                two: '#d7d7d7',
                global_color_primary: '#79366A',
                global_color_secondary: '#FBAF3F',
                global_color_text: '#343134',
                global_color_accent: '#FBAF3F',
                global_color_y: '#3D1C1C',
            },
        },
    },
    plugins: [
        'tailwindcss',
        'tailwind-fmt',
        'autoprefixer',
        'prettier-plugin-tailwindcss',
        'postcss',
        require("@tailwindcss/forms"),
    ],
}

