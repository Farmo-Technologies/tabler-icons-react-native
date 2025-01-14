import Svg, { Path, Rect, Line } from "react-native-svg";

function IconMouse({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mouse" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={6} y={3} width={12} height={18} rx={4} /><Line x1={12} y1={7} x2={12} y2={11} /></Svg>;
}

export default IconMouse;