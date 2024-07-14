import { FunctionComponent, useState } from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { LayoutProps } from "./Layout.props";
import cn from "classnames";
import styles from "./Layout.module.scss";
import BurgerMenu from "./Burger/BurgerMenu/BurgerMenu";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  const [showedBurgerMenu, setShowedBurgerMenu] = useState(false);
  const router = useRouter()
  console.log(router.locale)

  const changeShowBurgerMenu = () => {
    //TODO this is bad but I have no choise
    setShowedBurgerMenu(!showedBurgerMenu);
    if (!showedBurgerMenu) {
      document.body.classList.add("hidden");
      window.scrollTo(0, 0);
    } else {
      document.body.classList.remove("hidden");
    }
  };

  return (
    <div className={cn(styles["layout"])}>
      <Header
        setBurgerMenu={changeShowBurgerMenu}
        isShowedBurger={showedBurgerMenu}
      />
      <motion.div
        className={cn(styles["burger-menu"])}
        initial={{ translateX: "100%" }}
        animate={
          showedBurgerMenu
            ? {
                translateX: "0%",
              }
            : { translateX: "100%" }
        }
        transition={{ duration: 0.25 }}
      >
        <BurgerMenu setBurgerMenu={changeShowBurgerMenu} />
      </motion.div>
      {children}
      <Footer />
    </div>
  );
};

//HOC
export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
