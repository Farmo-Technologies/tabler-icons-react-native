import Svg, { Path, Polyline } from "react-native-svg";

function IconChevronsRight({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-chevrons-right" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="7 7 12 12 7 17" /><Polyline points="13 7 18 12 13 17" /></Svg>;
}

export default IconChevronsRight;