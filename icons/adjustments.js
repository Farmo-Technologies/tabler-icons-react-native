import Svg, { Path, Circle, Line } from "react-native-svg";

function IconAdjustments({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-adjustments" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={6} cy={10} r={2} /><Line x1={6} y1={4} x2={6} y2={8} /><Line x1={6} y1={12} x2={6} y2={20} /><Circle cx={12} cy={16} r={2} /><Line x1={12} y1={4} x2={12} y2={14} /><Line x1={12} y1={18} x2={12} y2={20} /><Circle cx={18} cy={7} r={2} /><Line x1={18} y1={4} x2={18} y2={5} /><Line x1={18} y1={9} x2={18} y2={20} /></Svg>;
}

export default IconAdjustments;