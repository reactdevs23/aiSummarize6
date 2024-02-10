import React from "react";
import { IoMdArrowDropup } from "react-icons/io";

import classes from "./MainComponent.module.css";
const MainComponent = ({
  topDiv,
  mainDiv,
  customerWearables,
  funnel,
  facilities,
}) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center w-full"
      style={{ background: "var(--mainBg)" }}
    >
      <div className={classes.mainWrapper}>
        <div className={classes.wrapper}>
          <div
            className={classes.topDivContainer}
            style={{
              "--headingColor": topDiv.headingColor,
              "--textColor": topDiv.textColor,
              "--border": topDiv.border,
            }}
          >
            <div className={classes.topDiv}>
              <div className={classes.icon}>{topDiv.leftIcon}</div>
              <p className={classes.heading}>{topDiv.heading}</p>
              <div className={classes.icon}>{topDiv.rightIcon}</div>
            </div>
            <div className={classes.spaceBetween}>
              <p className={classes.text}>{topDiv.leftText}</p>
              <p className={[classes.text, classes.rightText].join(" ")}>
                {topDiv.rightText}
              </p>
            </div>
          </div>
          <div className={classes.mainDivContainer}>
            {" "}
            <div
              className={classes.funnelContainer}
              style={{
                "--innerCirlceColor": funnel.innerCirlceColor,
                "--outerCircleColor": funnel.outerCircleColor,
              }}
            >
              <div className={classes.funnel}>{funnel.img}</div>
            </div>
            <div
              className={classes.mainDiv}
              style={{
                "--bg": mainDiv.bg,
                "--iconBg": mainDiv.iconBg,
                "--titleColor": mainDiv.titleColor,
              }}
            >
              <div className={classes.iconContainer}>
                <div className={classes.icon}>{mainDiv.icon}</div>
              </div>
              <h4 className={classes.title}>{mainDiv.title}</h4>
            </div>
            <div
              className={classes.customerWearable}
              style={{
                "--titleColor": customerWearables.titleColor,
              }}
            >
              <div className={classes.wearables}>
                {customerWearables.wearables.map((wearable, i) => (
                  <div
                    key={i}
                    className={classes.wearable}
                    style={{
                      "--border": wearable.border,
                      "--lineColor": wearable.arrowLineColor,
                      "--bg": wearable.bg,
                    }}
                  >
                    <IoMdArrowDropup className={classes.arrow} />
                    <div className={classes.icon}>{wearable.icon}</div>
                  </div>
                ))}
              </div>

              <p className={classes.title}>{customerWearables.title}</p>
            </div>
          </div>
        </div>

        <div className={classes.facilities}>
          {facilities.map((facility, i) => (
            <div
              className={classes.facility}
              style={{
                "--infoColor": facility.infoColor,
                "--border": facility.border,
                "--boxShadow": facility.boxShadow,
                "--bg": facility.bg,
              }}
            >
              <div className={classes.icon} key={i}>
                {facility.icon}
              </div>
              <p
                className={classes.info}
                dangerouslySetInnerHTML={{ __html: facility.info }}
              ></p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
