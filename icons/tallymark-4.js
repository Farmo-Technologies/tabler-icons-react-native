import Svg, { Path, Line } from "react-native-svg";

function IconTallymark4({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-tallymark-4" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={6} y1={5} x2={6} y2={19} /><Line x1={10} y1={5} x2={10} y2={19} /><Line x1={14} y1={5} x2={14} y2={19} /><Line x1={18} y1={5} x2={18} y2={19} /></Svg>;
}

export default IconTallymark4;