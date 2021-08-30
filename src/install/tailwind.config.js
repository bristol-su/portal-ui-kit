module.exports = {
    purge: [],
    darkMode: false, // or 'media' or 'class'
    theme: {
        fontFamily: {},
        extend: {
            backgroundImage: theme => ({
                'landing-page': "url('/images/landingPage.JPG')",
                'login-page':  "url('/images/loginPage.jpg')",
            }),
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
                success: {
                    light: '#55efc4',
                    DEFAULT: '#16e497',
                    dark: '#16c894'
                },
                info: {
                    light: '#fdcb6e',
                    DEFAULT: '#ffb63d',
                    dark: '#e79d24'
                },
                warning: {
                    light: '#ff7675',
                    DEFAULT: '#ff4757',
                    dark: '#b6253a'
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
