import Svg, { Path, Circle, Rect } from "react-native-svg";

function IconBrandUber({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-uber" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={12} cy={12} r={9} /><Rect x={9} y={9} width={6} height={6} rx={1} /><Path d="M3 12h6" /></Svg>;
}

export default IconBrandUber;