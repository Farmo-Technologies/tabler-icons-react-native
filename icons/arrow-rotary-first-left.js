import Svg, { Path, Circle } from "react-native-svg";

function IconArrowRotaryFirstLeft({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-rotary-first-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle transform="matrix(-1 0 0 1 32 0)" cx={16} cy={7} r={3} /><Path d="M16 10v10" /><Path d="M13.5 9.5l-8.5 8.5" /><Path d="M10 18h-5v-5" /></Svg>;
}

export default IconArrowRotaryFirstLeft;