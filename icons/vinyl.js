import Svg, { Path, Circle } from "react-native-svg";

function IconVinyl({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-vinyl" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M16.004 3.937a9 9 0 1 0 4.996 8.063" /><Circle cx={12} cy={12} r={1} /><Circle cx={20} cy={4} r={1} /><Path d="M20 4l-3.5 10l-2.5 2" /></Svg>;
}

export default IconVinyl;