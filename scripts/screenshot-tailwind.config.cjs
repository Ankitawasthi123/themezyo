module.exports = {
  content: ['./public/templates/**/*.html'],
  theme: {
    extend: {
      colors: {
        amberSoft: '#fff7d6',
        coal: '#111111',
        deep: '#0f1720',
        gold: '#ffc400',
        green: '#059447',
        ink: '#0f1533',
        lavender: '#f4f1ff',
        magenta: '#e34bf5',
        muted: '#6f7690',
        soft: '#eefaf3',
        violet: '#6338f4',
        violetDark: '#4a20dd',
      },
      boxShadow: {
        card: '0 12px 35px rgba(35, 42, 92, 0.08)',
        glow: '0 8px 18px rgba(0, 103, 184, 0.18)',
        gold: '0 12px 30px rgba(255, 196, 0, 0.30)',
        lift: '0 12px 30px rgba(79, 70, 229, 0.16)',
        soft: '0 18px 55px rgba(15, 23, 32, 0.10)',
      },
    },
  },
  plugins: [],
}
