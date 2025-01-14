import Svg, { Path, Circle } from "react-native-svg";

function IconArrowRotaryLastRight({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-rotary-last-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={9} cy={12} r={3} /><Path d="M9 15v6" /><Path d="M11.5 9.5l6.5 -6.5" /><Path d="M13 3h5v5" /></Svg>;
}

export default IconArrowRotaryLastRight;