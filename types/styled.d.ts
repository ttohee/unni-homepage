interface CustomProps {
  $isVisible?: boolean;
  $isScrolled?: boolean;
  $isvisible?: boolean;
  $direction?: string;
  isvisible?: boolean;
  delay?: number;
}

declare module "styled-components" {
  export interface DefaultTheme extends CustomProps {}
}
