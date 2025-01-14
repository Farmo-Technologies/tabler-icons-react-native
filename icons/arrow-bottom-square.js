import Svg, { Path } from "react-native-svg";

function IconArrowBottomSquare({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-bottom-square" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M12 7v14" /><Path d="M9 18l3 3l3 -3" /><Path d="M14 3v4h-4v-4z" /></Svg>;
}

export default IconArrowBottomSquare;