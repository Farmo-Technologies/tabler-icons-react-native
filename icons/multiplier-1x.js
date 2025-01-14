import Svg, { Path } from "react-native-svg";

function IconMultiplier1x({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-multiplier-1x" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 16v-8l-2 2" /><Path d="M13 16l4 -4" /><Path d="M17 16l-4 -4" /></Svg>;
}

export default IconMultiplier1x;