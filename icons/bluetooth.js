import Svg, { Path, Polyline } from "react-native-svg";

function IconBluetooth({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bluetooth" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Polyline points="7 8 17 16 12 20 12 4 17 8 7 16" /></Svg>;
}

export default IconBluetooth;