import Svg, { Path, Line } from "react-native-svg";

function IconLetterY({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-letter-y" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M7 4l5 9l5 -9" /><Line x1={12} y1={13} x2={12} y2={20} /></Svg>;
}

export default IconLetterY;