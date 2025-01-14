import Svg, { Path, Line } from "react-native-svg";

function IconArrowRightSquare({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-right-square" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={7} y1={12} x2={21} y2={12} /><Path d="M18 15l3 -3l-3 -3" /><Path d="M3 10h4v4h-4z" /></Svg>;
}

export default IconArrowRightSquare;