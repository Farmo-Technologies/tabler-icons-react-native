import Svg, { Path, Rect, Line } from "react-native-svg";

function IconBrowser({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-browser" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={4} y={4} width={16} height={16} rx={1} /><Line x1={4} y1={8} x2={20} y2={8} /><Line x1={8} y1={4} x2={8} y2={8} /></Svg>;
}

export default IconBrowser;