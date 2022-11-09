import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";
import router from "@/router";
import VueViewer from "v-viewer";
import "@/styles/index.css";
import "@/styles/app.css";
import "viewerjs/dist/viewer.css";

createApp(App).use(router).use(VueViewer).use(createPinia()).mount("#app");

// /* parallax */
// let l1,
//   l2,
//   l3,
//   l4,
//   l5,
//   l6,
//   l7,
//   l8,
//   p1,
//   p2,
//   p3,
//   la,
//   lb,
//   lc,
//   ld,
//   e1,
//   e2,
//   t1,
//   t2,
//   t3,
//   t4,
//   t5,
//   t6,
//   t7,
//   t8,
//   t9,
//   t10,
//   t11,
//   t12,
//   t13,
//   t14,
//   t15,
//   t16,
//   t17;

// window.addEventListener("DOMContentLoaded", (event) => {
//   const dom = (str) => document.getElementById(str);
//   l1 = dom("losange1");
//   t1 = l1.offsetTop;
//   l2 = dom("losange2");
//   t2 = l2.offsetTop;
//   l3 = dom("losange3");
//   t3 = l3.offsetTop;
//   l4 = dom("losange4");
//   t4 = l4.offsetTop;
//   l5 = dom("losange5");
//   t5 = l5.offsetTop;
//   l6 = dom("losange6");
//   t6 = l6.offsetTop;
//   l7 = dom("losange7");
//   t7 = l7.offsetTop;
//   l8 = dom("losange8");
//   t8 = l8.offsetTop;
//   p1 = dom("point1");
//   t9 = p1.offsetTop;
//   p2 = dom("point2");
//   t10 = p2.offsetTop;
//   p3 = dom("point3");
//   t11 = p3.offsetTop;
//   la = dom("losangeA");
//   t12 = la.offsetTop;
//   lb = dom("losangeB");
//   t13 = lb.offsetTop;
//   lc = dom("losangeC");
//   t14 = lc.offsetTop;
//   ld = dom("losangeD");
//   t15 = ld.offsetTop;
//   e1 = dom("etoileA");
//   t16 = e1.offsetTop;
//   e2 = dom("etoileB");
//   t17 = e2.offsetTop;
// });

// window.addEventListener("scroll", function () {
//   if (!l1) {
//     return;
//   }
//   const y = window.pageYOffset;
//   l1.style.top = t1 + y * 0.8 + "px";
//   l2.style.top = t2 + y * 0.2 + "px";
//   l3.style.top = t3 + y * 0.2 + "px";
//   l4.style.top = t4 + y * 0.4 + "px";
//   l5.style.top = t5 + y * 0.4 + "px";
//   l6.style.top = t6 + y * 0.4 + "px";
//   l7.style.top = t7 + y * 0.4 + "px";
//   l8.style.top = t8 + y * -0.24 + "px";
//   p1.style.top = t9 + y * 0.3 + "px";
//   p2.style.top = t10 + y * 0.3 + "px";
//   p3.style.top = t11 + y * -0.15 + "px";
//   la.style.top = t12 + (y - 7223) * -0.4 + "px";
//   lb.style.top = t13 + (y - 7223) * -0.4 + "px";
//   lc.style.top = t14 + (y - 7223) * 0.4 + "px";
//   ld.style.top = t15 + (y - 7223) * 0.4 + "px";
//   e1.style.top = t13 + (y - 7723) * 0.4 + "px";
//   e2.style.top = t13 + (y - 7723) * 0.4 + "px";
//   console.log("y =" + y);
//   console.log("t12: " + t12);
//   console.log("pageYOffset :" + la.style.top);
// });
