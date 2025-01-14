import Svg, { Path, Rect, Line } from "react-native-svg";

function IconFloatNone({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-float-none" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect width={6} height={6} x={4} y={5} rx={1} /><Line x1={4} y1={15} x2={20} y2={15} /><Line x1={4} y1={19} x2={20} y2={19} /></Svg>;
}

export default IconFloatNone;