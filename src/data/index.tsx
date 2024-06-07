import service1 from "../assets/images/service_1.png";
import service2 from "../assets/images/service_2.png";
import service3 from "../assets/images/service_3.png";
import service4 from "../assets/images/service_4.png";

import ccService1 from "../assets/images/cc-cleaning-service_1.png";
import ccService2 from "../assets/images/cc-cleaning-service_2.png";
import ccService3 from "../assets/images/cc-cleaning-service_3.png";
import ccService4 from "../assets/images/cc-cleaning-service_4.png";

export interface Service {
  name: string;
  img: string;
}

export interface CCService {
  name: string;
  img: string;
  description: string;
}
export const services: Service[] = [
  {
    name: "Commercial Services",
    img: service1,
  },
  {
    name: "Janitorial Services",
    img: service2,
  },
  {
    name: "Floor Cleaning",
    img: service3,
  },
  {
    name: "Disinfection Services",
    img: service4,
  },
];

export const ccServices: CCService[] = [
  {
    name: "Window Cleaning",
    img: ccService1,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam excepturi consectetur quod incidunt iste obcaecati?"
  },
  {
    name: "Vacuuming",
    img: ccService2,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam excepturi consectetur quod incidunt iste obcaecati?"
  },
  {
    name: "Bathroom Cleaning",
    img: ccService3,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam excepturi consectetur quod incidunt iste obcaecati?"
  },
  {
    name: "Carpet Cleaning",
    img: ccService4,
    description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam excepturi consectetur quod incidunt iste obcaecati?"
  },
];
