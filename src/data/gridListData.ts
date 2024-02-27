/* eslint-disable @typescript-eslint/no-explicit-any */
import css from "@site/static/img/icon/css.png";
import javascript from "@site/static/img/icon/javascript.png";
import typescript from "@site/static/img/icon/typescript.png";
import react from "@site/static/img/icon/react.png";
import vue from "@site/static/img/icon/vue.png";
import webpack from "@site/static/img/icon/webpack.png";
import vite from "@site/static/img/icon/vite.png";

import nodejs from "@site/static/img/icon/nodejs.png";
import algorithm from "@site/static/img/icon/algorithm.png";
import pokeball from "@site/static/img/icon/pokeball.png";

import {
  frontendMenuData as frontendData,
  backendMenuData as backendData,
  othersMenuData as othersData,
} from "./index";

export interface GridItemType {
  readonly title: string;
  readonly link: string;
  readonly src: any;
  readonly fontSize: FontSize;
}

type FontSize = "sm" | "md" | "lg";

function gridItem(
  title: string,
  link: string,
  src: any,
  fontSize: FontSize = "lg"
): GridItemType {
  return {
    title: title,
    link: link,
    src: src,
    fontSize: fontSize,
  };
}

const frontendGridList: Array<GridItemType> = [
  gridItem(frontendData.css, "/docs/css", css),
  gridItem(frontendData.javascript, "/docs/javascript", javascript),
  gridItem(frontendData.typescript, "/docs/typescript", typescript),
  gridItem(frontendData.react, "/docs/react", react),
  gridItem(frontendData.rn, "/docs/rn", react),
  gridItem(frontendData.vue, "/docs/vue", vue),
  gridItem(frontendData.webpack, "/docs/webpack", webpack),
  gridItem(frontendData.vite, "/docs/vite", vite),
];

const backendGridList: Array<GridItemType> = [
  gridItem(backendData.nodejs, "/docs/nodejs", nodejs),
];

const othersGridList: Array<GridItemType> = [
  gridItem(othersData.algorithm, "/docs/algorithm", algorithm),
  gridItem(othersData.interview, "/docs/interview", pokeball),
];

export { frontendGridList, backendGridList, othersGridList };
