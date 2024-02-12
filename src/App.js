import { useState } from "react";

import MainComponent from "./components/MainComponent/MainComponent";
import Funnel from "./images/Funnel";
import Brain from "./images/Brain";
import Icon1 from "./images/Icon1";
import Icon2 from "./images/Icon2";
import Icon3 from "./images/Icon3";
import Icon4 from "./images/Icon4";
import DoctorIcon from "./images/Doctor";
import Patient from "./images/Patient";
import CareModel from "./images/CareModel";
import MembershipPlans from "./images/MembershipPlans";
import HealthCare from "./images/HealthCare";

function App() {
  const [allData, setAllData] = useState({
    fontFamily: "'Lato', sans-serif",
    mainBg: "#FFF",

    funnel: {
      img: <Funnel topColor="#78CCE6" bottomColor="#F2F4F7" opacity={0.29} />,
      innerCirlceColor: "#78CCE6",
      outerCircleColor: "rgba(117, 205, 230, 0.20)",
    },
    topDiv: {
      heading: "APP",
      headingColor: "#78CCE6",
      leftIcon: <DoctorIcon color="#fff" bg="#22275A" />,
      leftText: "Doctor",
      rightText: "Patient",
      rightIcon: <Patient color="#fff" bg="#22275A" />,
      textColor: "#344054",
      border: "1px solid #B9C0D4",
    },
    mainDiv: {
      title: "Data Analysis",
      titleColor: "#344054",
      bg: "#F2F4F7",
      icon: <Brain color="#78CCE6" />,
      iconBg: "#FFF",
    },
    customerWearables: {
      wearables: [
        {
          icon: <Icon1 color="#22275A" />,
          border: "1px solid #22275A",
          arrowLineColor: "#22275A",
          bg: "#fff",
        },
        {
          icon: <Icon2 color="#22275A" />,
          border: "1px solid #22275A",
          arrowLineColor: "#22275A",
          bg: "#fff",
        },
        {
          icon: <Icon3 color="#22275A" />,
          border: "1px solid #22275A",
          arrowLineColor: "#22275A",
          bg: "#fff",
        },
        {
          icon: <Icon4 color="#22275A" />,
          border: "1px solid #22275A",
          arrowLineColor: "#22275A",
          bg: "#fff",
        },
      ],

      title: "Consumer Wearables",
      titleColor: "#344054",
    },
    facilities: [
      {
        icon: <CareModel color="#78CCE6" />,
        info: "Preventive Care Model",
        infoColor: "#344054",
        border: "1px solid var(--Gray-cool-100, #EFF1F5)",
        boxShadow: "1px 1px 14px 0px rgba(0, 0, 0, 0.05)",
        bg: "#fff",
      },
      {
        icon: <MembershipPlans color="#78CCE6" />,
        info: "Membership <br/> Plans",
        infoColor: "#344054",
        border: "1px solid var(--Gray-cool-100, #EFF1F5)",
        boxShadow: "1px 1px 14px 0px rgba(0, 0, 0, 0.05)",
        bg: "#fff",
      },
      {
        icon: <HealthCare color="#78CCE6" />,
        info: "Modern Healthcare Delivery",
        infoColor: "#344054",
        border: "1px solid var(--Gray-cool-100, #EFF1F5)",
        boxShadow: "1px 1px 14px 0px rgba(0, 0, 0, 0.05)",
        bg: "#fff",
      },
    ],
  });

  return (
    <>
      <div
        style={{
          "--mainBg": allData.mainBg,
          fontFamily: allData.fontFamily,
        }}
      >
        <MainComponent {...allData} />
      </div>
    </>
  );
}

export default App;
