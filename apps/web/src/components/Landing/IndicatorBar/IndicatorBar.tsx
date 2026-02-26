import React from "react";
import { motion } from "framer-motion";
import { vars } from "@/styles/theme.css";
import * as styles from "./indicatorBar.css";

export const IndicatorBar = ({ activeIndicator }: { activeIndicator: number }) => {
  const indicators = [1, 2, 3];

  return (
    <div className={styles.indicatorBarWrapper}>
      {indicators.map((index) => (
        <motion.div
          key={index}
          className={styles.indicatorWrapper}
          animate={{
            backgroundColor: activeIndicator === index ? vars.color.mint_600 : vars.color.grey_4,
            height: activeIndicator === index ? "3rem" : "1.2rem",
          }}
          transition={{ duration: 0.3 }}
        />
      ))}
    </div>
  );
};
