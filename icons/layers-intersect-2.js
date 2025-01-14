import Svg, { Path, Rect } from "react-native-svg";

function IconLayersIntersect2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-layers-intersect-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Rect x={8} y={4} width={12} height={12} rx={2} /><Rect x={4} y={8} width={12} height={12} rx={2} /><Path d="M9 15l6 -6" /></Svg>;
}

export default IconLayersIntersect2;