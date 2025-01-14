import Svg, { Path } from "react-native-svg";

function IconHandClick({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-hand-click" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" /><Path d="M11 11.5v-2a1.5 1.5 0 0 1 3 0v2.5" /><Path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" /><Path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7l-.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" /><Path d="M5 3l-1 -1" /><Path d="M4 7h-1" /><Path d="M14 3l1 -1" /><Path d="M15 6h1" /></Svg>;
}

export default IconHandClick;