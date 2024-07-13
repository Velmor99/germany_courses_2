import { useTranslation } from "next-i18next";
import cn from "classnames";
import PaymentButton from "@/components/PaymentButton/ButtonComponent";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.scss";
import LogoComponent from "@/components/Logo/Logo";
import Socials from "@/components/Socials/Socials";
import LocalizationMenu from "@/components/LocalizationMenu/LocalizationMenu";
import BurgerButton from "../Burger/BurgerMenuButton/BurgerMenuButton";
import Link from "next/link";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";
import { routes } from "../../../routes";

export default function Header({
  classname,
  isShowedBurger,
  setBurgerMenu,
  ...props
}: HeaderProps): JSX.Element {
  const { t } = useTranslation();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className={cn(styles["header"])}>
      <div className={cn(styles["container"])}>
        <div className={cn(styles["header__content"])}>
          <div className={cn(styles["header__logo-container"])}>
            <LogoComponent logoType="black" />
          </div>

          <div className={cn(styles["header__burger"])}>
            <BurgerButton
              changeMenu={setBurgerMenu}
              isShowed={isShowedBurger}
            />
          </div>

          <PaymentButton
            apperance="payment"
            classname={cn(styles["header__payment-button"])}
          >
            {t("payment_button")}
          </PaymentButton>

          <div className={cn(styles["header__socials"])}>
            <Socials iconsType="black" />
          </div>

          <div className={cn(styles["header__localization-block"])}>
            <LocalizationMenu classname={cn(styles["header__localization"])} isInBurger={false} />
            
          </div>
        </div>
      </div>
    </header>
  );
}
