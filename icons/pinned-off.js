import Svg, { Path, Line } from "react-native-svg";

function IconPinnedOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pinned-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Line x1={3} y1={3} x2={21} y2={21} /><Path d="M15 4.5l-3.249 3.249m-2.57 1.433l-2.181 .818l-1.5 1.5l7 7l1.5 -1.5l.82 -2.186m1.43 -2.563l3.25 -3.251" /><Line x1={9} y1={15} x2={4.5} y2={19.5} /><Line x1={14.5} y1={4} x2={20} y2={9.5} /></Svg>;
}

export default IconPinnedOff;