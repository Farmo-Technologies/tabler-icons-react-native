import Svg, { Path, Circle } from "react-native-svg";

function IconCategory2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-category-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M14 4h6v6h-6z" /><Path d="M4 14h6v6h-6z" /><Circle cx={17} cy={17} r={3} /><Circle cx={7} cy={7} r={3} /></Svg>;
}

export default IconCategory2;