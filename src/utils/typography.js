import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'

fairyGatesTheme.overrideThemeStyles = ({ rhythm }, options) => ({
  'h2,h3': {
    marginBottom: rhythm(1 / 3),
    marginTop: rhythm(4),
    
  },
  "p": {
    fontSize: "45%",
  },
})

const typography = new Typography(fairyGatesTheme)

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
