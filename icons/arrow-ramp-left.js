import Svg, { Path, Line } from "react-native-svg";

function IconArrowRampLeft({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-ramp-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={17} y1={3} x2={17} y2={11.707} /><Path d="M13 7l4 -4l4 4" /><Path d="M7 14l-4 -4l4 -4" /><Path d="M17 21a11 11 0 0 0 -11 -11h-3" /></Svg>;
}

export default IconArrowRampLeft;