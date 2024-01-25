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
  title: "SAME DAY APPOINTMENTS AVAILABLE",
  desc: "Evidence-based psychiatric treatment from a team that cares",
  image: Medicalimage1.src,
  bullets: [
    {
          title: "If you are looking for a caring professional to provide treatment in the comfort of your home, BlueSky is here to help. BlueSky's experienced network of licensed, mental health care professionals have a sincere and authentic commitment to patient-centered care, structured around optimal evidence- based care to patients.",
      desc: "Start your new year now.",
     
    },
    {
      title: "BlueSky Is Here",
        desc: "Finding professional, compassionate psychiatric providers should be easy. BlueSky is here to support you on your mental healthcare journey.",
     
    },
    {
        title: "Same day appoints available",
      desc: "Evidence-based psychiatric treatment from a team that cares.",
     
    },
  ],
};

const benefitTwo = {
    title: "Our providers specialize in a wide range of disorders",
    desc: "Get support for ADHD, ADD, anxiety, anger management, bipolar disorder, depression, grief bereavement, medication management, panic disorder, personality disorder, psychotic disorder, PTSD, and more.        .",
    image: Medicalimage2.src,
  bullets: [
    {
          title: "BLUESKY IS HERE",
          desc: "Finding professional, compassionate psychiatric providers should be easy. BlueSky is here to support you on your mental healthcare journey.",
      
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
