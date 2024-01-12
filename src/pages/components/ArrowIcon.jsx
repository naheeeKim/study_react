import React from "react";
import styles from "./ArrowIcon.module.scss";
import colorSet from "./ColorSet.module.scss";

// Libraries - Styles - Icons
export default function ArrowIcon({type, direction="left", size="16", color, strokeWidth="2"}) {
  return (
    <i className={`${styles["arrow-icon"]} ${color !== undefined ? colorSet[color] : ""}`}>
      {type == "arrow-left" ?
      <svg className={`${styles[direction]}`} width={size} height={size} viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 8.00059H13M13 8.00059L7.99941 3M13 8.00059L7.99941 13.0012" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square"/>
      </svg>
      :
      type == "arrow-out" ?
      <svg className={`${styles[direction]}`} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none">
        <path d="M4.46467 11.5361L11.5357 4.46507M11.5357 4.46507L4.46382 4.46507M11.5357 4.46507L11.5357 11.537" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square"/>
      </svg>
       :
      type == "chevron-left" ?
      <svg className={`${styles[direction]}`} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none">
        <path d="M10 13L4.99941 7.9994L10 2.99881" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square"/>
      </svg>
       :
      type == "chevron-right" ?
      <svg className={`${styles[direction]}`} xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" fill="none">
        <path d="M6 3L11.0006 8.0006L6 13.0012" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="square"/>
      </svg>
       :
      null}
    </i>
  );
}
