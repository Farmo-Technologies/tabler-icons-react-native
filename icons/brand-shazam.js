import Svg, { Path, Circle } from "react-native-svg";

function IconBrandShazam({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-shazam" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M10 12l2 -2a2.828 2.828 0 0 1 4 0a2.828 2.828 0 0 1 0 4l-3 3" /><Path d="M14 12l-2 2a2.828 2.828 0 1 1 -4 -4l3 -3" /><Circle cx={12} cy={12} r={9} /></Svg>;
}

export default IconBrandShazam;