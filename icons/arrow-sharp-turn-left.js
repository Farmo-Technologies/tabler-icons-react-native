import Svg, { Path } from "react-native-svg";

function IconArrowSharpTurnLeft({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-sharp-turn-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M17 18v-11.31a0.7 .7 0 0 0 -1.195 -.495l-9.805 9.805" /><Path d="M11 16h-5v-5" /></Svg>;
}

export default IconArrowSharpTurnLeft;