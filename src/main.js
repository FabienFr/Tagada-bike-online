import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import VueViewer from "v-viewer";
import "@/styles/index.css";
import "@/styles/app.css";
import "viewerjs/dist/viewer.css";

createApp(App).use(router).use(VueViewer).use(createPinia()).mount("#app");

/* parallax */
// Losanges
let l1,l2,l3,l4,l5,l6,l7,l8,l9;
let tl1,tl2,tl3,tl4,tl5,tl6,tl7,tl8,tl9;

// // Etoiles
// let e1,e2,e3,e4,e5,e6,e7,e8,e9,e10,e11,e12;
// let te1,te2,te3,te4,te5,te6,te7,te8,te9,te10,te11,te12;

//Points verts
let pv1,pv2,pv3,pv4,pv5,pv6,pv7;
let tpv1,tpv2,tpv3,tpv4,tpv5,tpv6,tpv7;

// //Points blancs
// let pb1,pb2,pb3,pb4,pb5,pb6,pb7,pb8,pb9,pb10,pb11,pb12,pb13,pb14,pb15,pb16;
// let tpb1,tpb2,tpb3,tpb4,tpb5,tpb6,tpb7,tpb8,tpb9,tpb10,tpb11,tpb12,tpb13,tpb14,tpb15,tpb16;

//Losanges jaunes
let la,lb,lc,ld;
let tla,tlb,tlc,tld;

window.addEventListener("DOMContentLoaded", (event) => {
  const dom = (str) => document.getElementById(str);

  //losanges roses
  l1 = dom("losangeRoseUp");
  tl1 = l1.offsetTop;
  l2 = dom("losangeRoseMidLeft");
  tl2 = l2.offsetTop;
  l3 = dom("losangeRoseMidRight");
  tl3 = l3.offsetTop;
  l4 = dom("losangeRoseDown");
  tl4 = l4.offsetTop;
  l5 = dom("losangeRoseUpLeft")
  tl5 = l5.offsetTop;
  l6 = dom("losangeRoseUpRight")
  tl6 = l6.offsetTop;
  l7 = dom("losangeRoseDownLeft")
  tl7 = l7.offsetTop;
  l8 = dom("losangeRoseDownRight")
  tl8 = l8.offsetTop;

//   //étoiles blanches
//   e1 = dom('etoile1');
//   te1 = e1.offsetTop;
//   // e3 = dom('etoile3');
//   // te3 = e3.offsetTop;
//   // e5 = dom('etoile5');
//   // te5 = e5.offsetTop;

//   //points verts
  // pv1 = dom("point1");
  // tpv1 = pv1.offsetTop;
  // pv2 = dom("point2");
  // tpv2 = pv2.offsetTop;
  // pv3 = dom("point3");
  // tpv3 = pv3.offsetTop;
  // pv4 = dom("point4");
  // tpv4 = pv4.offsetTop;
  // pv5 = dom("point5");
  // tpv5 = pv5.offsetTop;
  // pv6 = dom("point6");
  // tpv6 = pv6.offsetTop;
  // pv7 = dom("point7");
  // tpv7 = pv7.offsetTop;

//   //points blancs

//   //losanges jaunes
  // la = dom("losangeA");
  // tla = la.offsetTop;
  // lb = dom("losangeB");
  // tlb = lb.offsetTop;
  // lc = dom("losangeC");
  // tlc = lc.offsetTop;
  // ld = dom("losangeD");
  // tld = ld.offsetTop;


});

window.addEventListener("scroll", function () {
  if (!l1) {
    return;
  }
  const y = window.pageYOffset;

  //losanges roses
  l1.style.top = tl1 + y * 1.1 + "px";
  l2.style.top = tl2 + y * 0.5 + "px";
  l3.style.top = tl3 + y * 0.5 + "px";
  l4.style.top = tl4 + y * -1.4 + "px";
  l5.style.top = tl5 + y * 1.53 + "px";
  l6.style.top = tl6 + y * 1.53 + "px";
  l7.style.top = tl7 + y * -0.5 + "px";
  l8.style.top = tl8 + y * -0.5 + "px";

//   //étoiles blanches
//   e1.style.top = te1 + (y - 1480) * 0.6 + "px";
//   // e3.style.top = te3 + (y - 1480) * 0.6 + "px";
//   // e5.style.top = te5 + (y - 1480) * 0.6 + "px";

//   //points verts
  // pv1.style.top = tpv1 + (y - 3000) * 0.3 + "px";
  // pv2.style.top = tpv2 + (y - 3000) * 0.3 + "px";
  // pv3.style.top = tpv3 + (y - 3000) * 0.3 + "px";
  // pv4.style.top = tpv4 + (y - 3000) * 0.3 + "px";
  // pv5.style.top = tpv5 + (y - 3000) * 0.3 + "px";
  // pv6.style.top = tpv6 + (y - 3000) * -0.3 + "px";
  // pv7.style.top = tpv7 + (y - 3000) * -0.3 + "px";

//     //points blancs

//   //losanges jaunes
  // la.style.top = tla + (y - 6623) * 0.4 + "px";
  // lb.style.top = tlb + (y - 6623) * 0.4 + "px";
  // lc.style.top = tlc + (y - 7223) * -0.3 + "px";
  // ld.style.top = tld + (y - 7223) * -0.3 + "px";

//   e1.style.top = t17 + (y - 7723) * 0.4 + "px";
//   e2.style.top = t18 + (y - 7723) * 0.4 + "px";
  
  console.log("y =" + y);
  console.log("t12: " + t12);
  console.log("pageYOffset :" + la.style.top);
});
