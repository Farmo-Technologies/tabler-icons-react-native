import Svg, { Path, Circle } from "react-native-svg";

function IconPokeball({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pokeball" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Circle cx={9} cy={9} r={9} transform="translate(3 3)" /><Circle cx={12} cy={12} r={3} /><Path d="M3 12h6m6 0h6" /></Svg>;
}

export default IconPokeball;