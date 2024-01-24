import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";
import Image from 'next/image'
import Medicalimage1 from "../public/img/Medicalimage1.jpg";
import Medicalimage2 from "../public/img/Medicalimage2.jpg";

const benefitOne = {
  title: "Highlight BlueSky Network",
  desc: "BlueSky network has access across the United States",
  image: Medicalimage1,
  bullets: [
    {
      title: "Find what kind of therapy is right for you.",
      desc: "Start your new year now.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "BlueSky Is Here",
        desc: "Finding professional, compassionate psychiatric providers should be easy. BlueSky is here to support you on your mental healthcare journey.",
      icon: <ChartBarSquareIcon />,
    },
    {
        title: "Same day appoints available",
      desc: "Evidence-based psychiatric treatment from a team that cares.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Our providers specialize in a wide range of disorders",
    desc: "Get support for ADHD, ADD, anxiety, anger management, bipolar disorder, depression, grief bereavement, medication management, panic disorder, personality disorder, psychotic disorder, PTSD, and more.        .",
    image: Medicalimage2,
  bullets: [
    {
      title: "Mobile Responsive Website",
      desc: "designed as a mobile first responsive Site.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "BlueSky Service Areas",
      desc: "BlueSky has an extensive network of licensed providers throughout the US.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Avaliable in 12 States:",
      desc: "Arizona, Colorado, Connecticut, Kentucky, Illinois, Maryland, Massachusetts, Minnesota, New Mexico, North Carolina, Ohio, Oregon, Texas, Washington. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
