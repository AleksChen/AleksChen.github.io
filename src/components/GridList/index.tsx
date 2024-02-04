import React, { CSSProperties } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import { GridItemType } from "@site/src/data";
import { isMobile } from "@site/src/utils/index";

type GridListProps = {
  data?: Array<GridItemType>;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

export default function GridList({
  data = [],
  wrapperClassName,
  wrapperStyle,
}: GridListProps): JSX.Element {
  return (
    <div
      style={wrapperStyle}
      className={clsx(styles.listWrapper, wrapperClassName)}
    >
      {data.map((item) => {
        return (
          <Link
            key={item.title}
            className={
              !isMobile() ? styles.cardWrapper : styles.mobileCardWrapper
            }
            to={item.link}
          >
            <img
              className={clsx(styles.image)}
              src={item.src}
              alt={item.title}
            />
            {!isMobile() && (
              <div
                className={clsx(
                  styles.title,
                  item.fontSize === "md" && styles.title_md,
                  item.fontSize === "sm" && styles.title_sm
                )}
              >
                {item.title}
              </div>
            )}
          </Link>
        );
      })}
    </div>
  );
}
