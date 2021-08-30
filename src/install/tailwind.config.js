module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {},
        extend: {
            colors: {
                primary: {
                    light: '#689fea',
                    DEFAULT: '#0984e3',
                    dark: '#2452a1'
                },
                secondary: {
                    light: '#4aecec',
                    DEFAULT: '#2dbccf',
                    dark: '#2893a1'
                },
                ternary: {
                    light: '#55efc4',
                    DEFAULT: '#16e497',
                    dark: '#16c894'
                },
                black: '#262626',
                white: '#fef6f6'
            },
        },
    },
    variants: {
        extend: {
            display: ['group-hover'],
        },
    },
    plugins: [],
}
