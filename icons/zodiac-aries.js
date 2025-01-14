import Svg, { Path, Line } from "react-native-svg";

function IconZodiacAries({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-zodiac-aries" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 5a5 5 0 1 0 -4 8" /><Path d="M16 13a5 5 0 1 0 -4 -8" /><Line x1={12} y1={21} x2={12} y2={5} /></Svg>;
}

export default IconZodiacAries;