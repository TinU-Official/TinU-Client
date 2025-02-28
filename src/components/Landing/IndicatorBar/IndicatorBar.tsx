import React from "react";
import { motion } from "framer-motion";
import * as styles from "./indicatorBar.css";

export const IndicatorBar = ({ activeIndicator }: { activeIndicator: number }) => {
  return (
    <div className={styles.indicatorBarWrapper}>
      <motion.div
        className={styles.indicatorWrapper}
        animate={{
          backgroundColor: activeIndicator === 1 ? "yellow" : "purple",
          height: activeIndicator === 1 ? "3rem" : "1.2rem",
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={styles.indicatorWrapper}
        animate={{
          backgroundColor: activeIndicator === 2 ? "yellow" : "purple",
          height: activeIndicator === 2 ? "3rem" : "1.2rem",
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={styles.indicatorWrapper}
        animate={{
          backgroundColor: activeIndicator === 3 ? "yellow" : "purple",
          height: activeIndicator === 3 ? "3rem" : "1.2rem",
        }}
        transition={{ duration: 0.3 }}
      />
    </div>
  );
};
