import Svg, { Path } from "react-native-svg";

function IconParachuteOff({
  size = 24,
  color = "#232e46",
  stroke = 2,
  ...props
}) {
  return <Svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-parachute-off" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M22 12c0 -5.523 -4.477 -10 -10 -10c-1.737 0 -3.37 .443 -4.794 1.222m-2.28 1.71a9.969 9.969 0 0 0 -2.926 7.068" /><Path d="M22 12c0 -1.66 -1.46 -3 -3.25 -3c-1.63 0 -2.973 1.099 -3.212 2.54m-.097 -.09c-.23 -1.067 -1.12 -1.935 -2.29 -2.284m-3.445 .568c-.739 .55 -1.206 1.36 -1.206 2.266c0 -1.66 -1.46 -3 -3.25 -3c-1.8 0 -3.25 1.34 -3.25 3" /><Path d="M2 12l10 10l-3.5 -10" /><Path d="M14.582 14.624l-2.582 7.376l4.992 -4.992m2.014 -2.014l2.994 -2.994" /><Path d="M3 3l18 18" /></Svg>;
}

export default IconParachuteOff;