import Svg, { Path, Line } from "react-native-svg";

function IconArrowBarUp({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bar-up" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={12} y1={4} x2={12} y2={14} /><Line x1={12} y1={4} x2={16} y2={8} /><Line x1={12} y1={4} x2={8} y2={8} /><Line x1={4} y1={20} x2={20} y2={20} /></Svg>;
}

export default IconArrowBarUp;