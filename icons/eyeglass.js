import Svg, { Path, Line } from "react-native-svg";

function IconEyeglass({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-eyeglass" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 4h-2l-3 10" /><Path d="M16 4h2l3 10" /><Line x1={10} y1={16} x2={14} y2={16} /><Path d="M21 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" /><Path d="M10 16.5a3.5 3.5 0 0 1 -7 0v-2.5h7v2.5" /></Svg>;
}

export default IconEyeglass;