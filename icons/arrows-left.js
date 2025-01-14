import Svg, { Path, Line } from "react-native-svg";

function IconArrowsLeft({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrows-left" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={7} x2={21} y2={7} /><Path d="M6 20l-3 -3l3 -3" /><Path d="M6 4l-3 3l3 3" /><Line x1={3} y1={17} x2={21} y2={17} /></Svg>;
}

export default IconArrowsLeft;