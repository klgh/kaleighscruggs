import Typography from 'typography'
import fairyGatesTheme from 'typography-theme-fairy-gates'

fairyGatesTheme.overrideThemeStyles = ({}) => ({
  a: {
    backgroundImage: 'none',
    color: '#7fb069ff',
  },
})

const typography = new Typography(fairyGatesTheme)

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
