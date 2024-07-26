import { DetailedHTMLProps, HTMLAttributes } from "react";

export interface HeaderProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  lang: "de" | "en" | "ru";
  classname?: string;
  isShowedBurger: boolean;
  setBurgerMenu: () => void;
}
