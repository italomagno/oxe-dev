import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    
    extend: {
      colors: {
        // Background da Página
        backgroundPage: '#f3f8e6', // Verde-amarelado claro

        // Texto Principal sobre fundo claro
        textPrimaryLight: '#000000', // Preto

        // Texto Secundário sobre fundo claro
        textSecondaryLight: '#666666', // Cinza médio

        // Texto Principal sobre fundo verde ou roxo
        textPrimaryDark: '#000000', // Preto

        // Texto Secundário sobre fundo verde ou roxo
        textSecondaryDark: '#666666', // Cinza médio

        // Links
        linkUnvisited: '#84bd00', // Verde lima vibrante
        linkVisited: '#8031a7', // Roxo intenso

        // Inputs (caixas de entrada)
        inputBackground: '#ffffff', // Branco ou #f3f8e6 para contraste
        inputBorder: '#84bd00', // Verde lima vibrante

        // Sobretextos (Tooltips, mensagens de validação)
        tooltipText: '#000000', // Preto
        tooltipBackground: '#666666', // Cinza médio
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
