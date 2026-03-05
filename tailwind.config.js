/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                mono: ['JetBrains Mono', 'monospace'],
            },
            colors: {
                primary: {
                    50: '#f0f4ff',
                    100: '#e0eaff',
                    200: '#c7d7fd',
                    300: '#a5bbfb',
                    400: '#8099f8',
                    500: '#6272f2',
                    600: '#4d55e6',
                    700: '#3f43cc',
                    800: '#3438a5',
                    900: '#2e3383',
                },
                accent: {
                    400: '#fb923c',
                    500: '#f97316',
                    600: '#ea580c',
                },
                dark: {
                    900: '#0a0a0f',
                    800: '#0f0f1a',
                    700: '#14141f',
                    600: '#1a1a2e',
                    500: '#1e1e35',
                    400: '#252540',
                    300: '#2d2d55',
                },
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
                'streak': 'streak 3s linear infinite',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                fadeInUp: {
                    from: { opacity: '0', transform: 'translateY(30px)' },
                    to: { opacity: '1', transform: 'translateY(0)' },
                },
                streak: {
                    '0%': { transform: 'translateX(-100%) translateY(100%) rotate(-45deg)' },
                    '100%': { transform: 'translateX(300%) translateY(-300%) rotate(-45deg)' },
                },
            },
        },
    },
    plugins: [],
}
