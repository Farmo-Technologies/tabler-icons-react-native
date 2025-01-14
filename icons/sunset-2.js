import Svg, { Path } from "react-native-svg";

function IconSunset2({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sunset-2" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 13h1" /><Path d="M20 13h1" /><Path d="M5.6 6.6l.7 .7" /><Path d="M18.4 6.6l-.7 .7" /><Path d="M8 13a4 4 0 1 1 8 0" /><Path d="M3 17h18" /><Path d="M7 20h5" /><Path d="M16 20h1" /><Path d="M12 5v-1" /></Svg>;
}

export default IconSunset2;