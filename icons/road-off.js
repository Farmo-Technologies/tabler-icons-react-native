import Svg, { Path } from "react-native-svg";

function IconRoadOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-road-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M4 19l3.332 -11.661" /><Path d="M16 5l2.806 9.823" /><Path d="M12 8v-2" /><Path d="M12 13v-1" /><Path d="M12 18v-2" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconRoadOff;