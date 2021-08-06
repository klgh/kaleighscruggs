import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'

// fairyGatesTheme.overrideThemeStyles = ({}) => ({
//   'h1,h2,h3,h4': {
//     fontFamily: 'Work Sans',
//   },
//   p: {
//     fontFamily: 'Quattrocento Sans',
//   },
// })

const typography = new Typography(fairyGatesTheme)

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
