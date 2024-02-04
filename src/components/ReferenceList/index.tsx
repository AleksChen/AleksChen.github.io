import React, { CSSProperties } from "react";
import styles from "./styles.module.css";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import ThemedImage from "@theme/ThemedImage";
import LinkSVG from "@site/static/svg/link.svg";
import DefaultImg from "@site/static/img/icon/chrome.png";
import type LinkItemType from "@components/LinkItem";

type ReferenceListProps = {
  data: Array<LinkItemType>;
  wrapperClassName?: string;
  wrapperStyle?: CSSProperties;
};

export default function ReferenceList({
  data = [],
  wrapperClassName,
  wrapperStyle,
}: ReferenceListProps): JSX.Element {
  return (
    <div
      style={wrapperStyle}
      className={clsx(styles.unorderedList, wrapperClassName)}
    >
      <ul>
        {data.map((item: LinkItemType, index: number) => {
          return (
            <li className={styles.listItem} key={index}>
              <ThemedImage
                sources={{
                  light: item.src || DefaultImg,
                  dark: item.srcDark ? item.srcDark : item.src || DefaultImg,
                }}
                alt={item.title}
                loading="lazy"
              />
              <Link to={item.link} className={styles.titleArea}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.linkSVG}>
                  <LinkSVG />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
