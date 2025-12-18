export default {
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
    theme: {
      extend: {
        colors: {
          // Artistic white and light blue palette
          primary: {
            50: '#f0f9ff',   // Very light blue-white
            100: '#e0f2fe',  // Light sky blue
            200: '#bae6fd',  // Soft sky blue
            300: '#7dd3fc',  // Medium sky blue
            400: '#38bdf8',  // Bright sky blue
            500: '#0ea5e9',  // Vibrant blue
            600: '#0284c7',  // Deep sky blue
            700: '#0369a1',  // Rich blue
            800: '#075985',  // Dark blue
            900: '#0c4a6e',  // Deep blue
          },
          accent: {
            50: '#f8fafc',   // Soft white
            100: '#f1f5f9',  // Light gray-blue
            200: '#e2e8f0',  // Pale blue-gray
            300: '#cbd5e1',  // Cool gray
            400: '#94a3b8',  // Medium gray-blue
            500: '#64748b',  // Slate
          },
          // Pure whites for contrast
          white: {
            DEFAULT: '#ffffff',
            soft: '#fefefe',
            warm: '#fafafa',
            cool: '#f8fafc',
          },
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'gradient-artistic': 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 25%, #ffffff 50%, #e0f2fe 75%, #bae6fd 100%)',
          'gradient-soft': 'linear-gradient(to bottom right, #ffffff 0%, #f0f9ff 50%, #e0f2fe 100%)',
          'gradient-card': 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(240,249,255,0.8) 100%)',
          'gradient-overlay': 'linear-gradient(to bottom, transparent 0%, rgba(224,242,254,0.3) 100%)',
        },
        boxShadow: {
          'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
          'glow': '0 0 20px rgba(14, 165, 233, 0.15)',
          'glow-lg': '0 0 30px rgba(14, 165, 233, 0.2)',
          'card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 10px 15px -3px rgba(0, 0, 0, 0.08)',
          'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 20px 40px -5px rgba(0, 0, 0, 0.08)',
          'inner-soft': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.05)',
        },
        animation: {
          'fade-in': 'fadeIn 0.5s ease-in-out',
          'fade-in-up': 'fadeInUp 0.6s ease-out',
          'fade-in-down': 'fadeInDown 0.6s ease-out',
          'slide-in-right': 'slideInRight 0.5s ease-out',
          'slide-in-left': 'slideInLeft 0.5s ease-out',
          'scale-in': 'scaleIn 0.4s ease-out',
          'float': 'float 3s ease-in-out infinite',
          'gradient-shift': 'gradientShift 8s ease infinite',
          'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          fadeInUp: {
            '0%': { opacity: '0', transform: 'translateY(20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          fadeInDown: {
            '0%': { opacity: '0', transform: 'translateY(-20px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          slideInRight: {
            '0%': { opacity: '0', transform: 'translateX(-20px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          slideInLeft: {
            '0%': { opacity: '0', transform: 'translateX(20px)' },
            '100%': { opacity: '1', transform: 'translateX(0)' },
          },
          scaleIn: {
            '0%': { opacity: '0', transform: 'scale(0.95)' },
            '100%': { opacity: '1', transform: 'scale(1)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          gradientShift: {
            '0%, 100%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
          },
          glowPulse: {
            '0%, 100%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.15)' },
            '50%': { boxShadow: '0 0 30px rgba(14, 165, 233, 0.3)' },
          },
        },
        backdropBlur: {
          xs: '2px',
        },
        typography: {
          DEFAULT: {
            css: {
              a: {
                color: '#0ea5e9',
                '&:hover': {
                  color: '#0284c7',
                  textDecoration: 'underline',
                },
              },
            },
          },
        },
      },
    },
    plugins: [require('@tailwindcss/typography')],
  }