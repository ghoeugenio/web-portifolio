/// <reference types="vite/client" />
declare module "*.svg" {
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

declare module "*.png" {
  const content: ImageURISource;
  export default content;
}

declare module "*.jpg" {
  const content: ImageURISource;
  export default content;
}
