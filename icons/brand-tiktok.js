import Svg, { Path } from "react-native-svg";

function IconBrandTiktok({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-tiktok" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" /></Svg>;
}

export default IconBrandTiktok;