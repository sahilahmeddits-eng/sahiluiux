import{
r as n,
j as e
}
from"./index-ChPETQ-S.js";
import{
N as p
}
from"./Navbar-T_A-hqS3.js";
import{
c as f,
d as m,
e as j,
f as v,
g as b,
h as y,
i as N,
j as M,
k as z,
G as o,
l as A,
m as S,
n as w,
o as T,
p as I,
q as C,
r as D,
s as F,
C as L,
S as E,
a as P,
b as U
}
from"./ContactForm-DDp3ttSm.js";
import{
g as i,
S as l
}
from"./ScrollTrigger-CiEuWA-R.js";
const k=()=>{
const t=n.useRef(null);
return n.useEffect(()=>{
const s=i.context(()=>{
i.timeline({
defaults:{
ease:"power3.out"
}

}
).fromTo(".about-hero-badge",
{
y:30,
opacity:0
}
,
{
y:0,
opacity:1,
duration:.8
}
).fromTo(".about-hero-heading",
{
y:50,
opacity:0
}
,
{
y:0,
opacity:1,
duration:1
}
,
"-=0.4").fromTo(".about-hero-desc",
{
y:40,
opacity:0
}
,
{
y:0,
opacity:1,
duration:.8
}
,
"-=0.5").fromTo(".about-hero-cta",
{
y:30,
opacity:0
}
,
{
y:0,
opacity:1,
duration:.7
}
,
"-=0.4").fromTo(".about-hero-highlight",
{
y:20,
opacity:0
}
,
{
y:0,
opacity:1,
duration:.6,
stagger:.1
}
,
"-=0.3")
}
,
t);
return()=>s.revert()
}
,
[]),
e.jsxs("section",
{
className:"about-hero",
ref:t,
children:[e.jsx("div",
{
className:"about-hero-bg",
children:e.jsx("img",
{
src:"/images/about-banner.png",
alt:"Sahil Ahmed — UI/UX Designer",
onError:s=>{
const a=s.target;
a.src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
}

}
)
}
),
e.jsxs("div",
{
className:"about-hero-content",
children:[e.jsx("div",
{
className:"about-hero-badge",
children:"UI/UX Design That Connects"
}
),
e.jsxs("h1",
{
className:"about-hero-heading",
children:["Hello,
 I Am",
e.jsx("span",
{
children:"Sahil Ahmed"
}
)]
}
),
e.jsx("p",
{
className:"about-hero-desc",
children:"I'm a UI/UX Designer and Freelancer who helps brands turn ideas into beautiful,
 functional and user-centered digital experiences."
}
),
e.jsxs("div",
{
className:"about-hero-cta",
children:[e.jsxs("a",
{
href:"#contact-form",
className:"about-btn-primary",
children:["Let's Work Together",
e.jsx("span",
{
className:"arrow",
children:"→"
}
)]
}
),
e.jsxs("div",
{
className:"about-btn-secondary",
children:[e.jsx("span",
{
className:"label",
children:"Available For Projects"
}
),
e.jsx("span",
{
className:"sublabel",
children:"Open For Work"
}
)]
}
)]
}
),
e.jsxs("div",
{
className:"about-hero-highlights",
children:[e.jsxs("div",
{
className:"about-hero-highlight",
children:[e.jsx("span",
{
className:"icon",
children:e.jsx(f,
{

}
)
}
),
"Pixel-Perfect Designs"]
}
),
e.jsxs("div",
{
className:"about-hero-highlight",
children:[e.jsx("span",
{
className:"icon",
children:e.jsx(m,
{

}
)
}
),
"User-Centered Approach"]
}
),
e.jsxs("div",
{
className:"about-hero-highlight",
children:[e.jsx("span",
{
className:"icon",
children:e.jsx(j,
{

}
)
}
),
"Clean & Modern Interfaces"]
}
),
e.jsxs("div",
{
className:"about-hero-highlight",
children:[e.jsx("span",
{
className:"icon",
children:e.jsx(v,
{

}
)
}
),
"Fast & Reliable Delivery"]
}
)]
}
)]
}
)]
}
)
}
;
i.registerPlugin(l);
const B=[{
icon:e.jsx(m,
{

}
),
title:"UI/UX Design",
desc:"Crafting intuitive,
 beautiful interfaces that users love."
}
,
{
icon:e.jsx(b,
{

}
),
title:"Product Thinking",
desc:"Aligning design strategy with business goals and user needs."
}
,
{
icon:e.jsx(y,
{

}
),
title:"Web Design",
desc:"Designing responsive,
 modern websites that convert and engage."
}
,
{
icon:e.jsx(N,
{

}
),
title:"App Design",
desc:"Building seamless mobile experiences for iOS and Android."
}
,
{
icon:e.jsx(M,
{

}
),
title:"Freelance Support",
desc:"Dedicated,
 reliable freelance partnership from concept to launch."
}
,
{
icon:e.jsx(z,
{

}
),
title:"Creative Strategy",
desc:"Bringing ideas to life with innovative,
 data-driven approaches."
}
],
R=()=>{
const t=n.useRef(null);
return n.useEffect(()=>{
const s=i.context(()=>{
i.fromTo(".about-intro-text > *",
{
y:40,
opacity:0
}
,
{
y:0,
opacity:1,
duration:.9,
stagger:.15,
scrollTrigger:{
trigger:".about-intro",
start:"top 80%"
}

}
),
i.fromTo(".highlight-card",
{
y:40,
opacity:0,
scale:.95
}
,
{
y:0,
opacity:1,
scale:1,
duration:.7,
stagger:.1,
scrollTrigger:{
trigger:".about-intro-highlights",
start:"top 85%"
}

}
)
}
,
t);
return()=>s.revert()
}
,
[]),
e.jsx("section",
{
className:"about-intro",
ref:t,
children:e.jsxs("div",
{
className:"about-intro-inner",
children:[e.jsxs("div",
{
className:"about-intro-text",
children:[e.jsx("div",
{
className:"subtitle",
children:"Who I Am"
}
),
e.jsxs("h2",
{
children:["A Creative ",
e.jsx("span",
{
children:"Problem Solver"
}
),
" & Digital Designer"]
}
),
e.jsx("p",
{
children:"I'm Sahil Ahmed — a UI/UX Designer and Freelancer,
 a creative thinker,
 and a problem solver. My focus is always on usability,
 modern aesthetics,
 and user-centered design. I believe that great design is not just about how it looks,
 but how it works and feels for the end user."
}
),
e.jsx("p",
{
children:"With a deep understanding of human-computer interaction and a keen eye for detail,
 I craft digital experiences that not only meet business goals but also leave a lasting impression on users. From wireframes to high-fidelity prototypes,
 I deliver designs that are both beautiful and functional."
}
)]
}
),
e.jsx("div",
{
className:"about-intro-highlights",
children:B.map((s,
a)=>e.jsxs("div",
{
className:"highlight-card",
children:[e.jsx("span",
{
className:"card-icon",
children:s.icon
}
),
e.jsx("h3",
{
children:s.title
}
),
e.jsx("p",
{
children:s.desc
}
)]
}
,
a))
}
)]
}
)
}
)
}
;
i.registerPlugin(l);
const H=[{
year:"2021 – 2025",
degree:"B.Tech Engineering",
institution:"Maulana Abul Kalam Azad University",
desc:"Studied core engineering,
 computational structures,
 and software methodologies,
 bridging the gap between logic-driven systems and user-centric design."
}
,
{
year:"2023 – 2024",
degree:"UI/UX Designer Certification",
institution:"Webskitters Academy",
desc:"Completed structured training in user research,
 wireframing,
 high-fidelity prototyping,
 usability testing,
 and building clean design systems."
}
,
{
year:"2024",
degree:"AI Prompt Engineering - Advanced",
institution:"Google & IBM",
desc:"Specialized in advanced prompting models,
 context control,
 and integrating AI workflows to design intelligent and automated user interactions."
}
],
W=()=>{
const t=n.useRef(null);
return n.useEffect(()=>{
const s=i.context(()=>{
i.fromTo(".edu-item",
{
x:-30,
opacity:0
}
,
{
x:0,
opacity:1,
duration:.8,
stagger:.2,
scrollTrigger:{
trigger:".edu-timeline",
start:"top 80%"
}

}
)
}
,
t);
return()=>s.revert()
}
,
[]),
e.jsxs("section",
{
className:"about-education",
ref:t,
children:[e.jsxs("div",
{
className:"section-header",
children:[e.jsx("div",
{
className:"section-label",
children:"📚 Learning Journey"
}
),
e.jsxs("h2",
{
children:["Education & ",
e.jsx("span",
{
children:"Certifications"
}
)]
}
)]
}
),
e.jsx("div",
{
className:"edu-timeline",
children:H.map((s,
a)=>e.jsx("div",
{
className:"edu-item",
children:e.jsxs("div",
{
className:"edu-card",
children:[e.jsx("span",
{
className:"edu-year",
children:s.year
}
),
e.jsx("h3",
{
children:s.degree
}
),
e.jsx("div",
{
className:"edu-institution",
children:s.institution
}
),
e.jsx("p",
{
children:s.desc
}
)]
}
)
}
,
a))
}
)]
}
)
}
;
i.registerPlugin(l);
const X=[{
duration:"2025 – Present",
role:"Assistant Software Engineer — Lead Design Team",
company:"Devant IT Solutions Pvt. Ltd.",
desc:"Leading the design team,
 handling client meetings,
 and leveraging UI/UX,
 automation,
 and prompt engineering to deliver final digital products."
}
,
{
duration:"May 2025 – Sep 2025",
role:"Junior UI/UX Designer",
company:"Carney Technologies Services",
desc:"Created UI/UX solutions,
 custom layouts,
 and interactive designs,
 managing client requirements and visual standards."
}
,
{
duration:"Apr 2024 – Mar 2025",
role:"UI/UX Designer Intern",
company:"Webskitters Technology Solutions Pvt. Ltd.",
desc:"Worked on various design tasks and learned to implement modern,
 user-friendly digital products for web and mobile."
}
],
V=()=>{
const t=n.useRef(null);
return n.useEffect(()=>{
const s=i.context(()=>{
i.utils.toArray(".exp-item").forEach((r,
c)=>{
i.fromTo(r,
{
opacity:0,
y:40,
x:c%2===0?-30:30
}
,
{
opacity:1,
y:0,
x:0,
duration:.9,
scrollTrigger:{
trigger:r,
start:"top 85%"
}

}
)
}
)
}
,
t);
return()=>s.revert()
}
,
[]),
e.jsxs("section",
{
className:"about-experience",
ref:t,
children:[e.jsxs("div",
{
className:"section-header",
children:[e.jsx("div",
{
className:"section-label",
children:"💼 Career Path"
}
),
e.jsxs("h2",
{
children:["Work ",
e.jsx("span",
{
children:"Experience"
}
)]
}
)]
}
),
e.jsx("div",
{
className:"exp-timeline",
children:X.map((s,
a)=>e.jsx("div",
{
className:"exp-item",
children:e.jsxs("div",
{
className:"exp-card",
children:[e.jsx("span",
{
className:"exp-duration",
children:s.duration
}
),
e.jsx("h3",
{
children:s.role
}
),
e.jsx("h4",
{
children:s.company
}
),
e.jsx("p",
{
children:s.desc
}
)]
}
)
}
,
a))
}
)]
}
)
}
;
function O(t){
return o({
attr:{
role:"img",
viewBox:"0 0 24 24"
}
,
child:[{
tag:"path",
attr:{
d:"M12 1.25l6.75 6.637V2L12 1.25zm0 0l-6.05 7h12.1l-6.05-7zm0 0L5.25 2v5.887L12 1.25zM5.25 2L0 9l4.416-.68L5.25 2zM0 9l11.959 13.703.008-.014L4.443 9H0zm18.75-7l.834 6.32L24 9l-5.25-7zM24 9h-4.506l-7.523 13.69.029.06L24 9zM12 22.75l-.031-.057-.008.012.039.045zM5.436 9l6.533 13.686L18.564 9H5.436Z"
}
,
child:[]
}
]
}
)(t)
}
function q(t){
return o({
attr:{
role:"img",
viewBox:"0 0 24 24"
}
,
child:[{
tag:"path",
attr:{
d:"M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z"
}
,
child:[]
}
]
}
)(t)
}
function G(t){
return o({
attr:{
role:"img",
viewBox:"0 0 24 24"
}
,
child:[{
tag:"path",
attr:{
d:"M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632z"
}
,
child:[]
}
]
}
)(t)
}
function Z(t){
return o({
attr:{
role:"img",
viewBox:"0 0 24 24"
}
,
child:[{
tag:"path",
attr:{
d:"M17.392 0H13.9L17 4.808 10.444 0H6.949l3.102 6.3L3.494 0H0l3.05 8.131L0 24h3.494L10.05 6.985 6.949 24h3.494L17 5.494 13.899 24h3.493L24 3.672 17.392 0z"
}
,
child:[]
}
]
}
)(t)
}
function J(t){
return o({
attr:{
role:"img",
viewBox:"0 0 24 24"
}
,
child:[{
tag:"path",
attr:{
d:"M5.265 15.108a4.715 4.715 0 0 0-.124 1.036c0 1.215.658 2.021 2.058 2.021 1.16 0 2.102-.69 2.78-1.803l-.415 1.661h2.304l1.319-5.28c.329-1.338.966-2.032 1.934-2.032.761 0 1.235.473 1.235 1.255a2.46 2.46 0 0 1-.103.742l-.679 2.427a3.63 3.63 0 0 0-.144 1.03c0 1.151.679 1.996 2.099 1.996 1.214 0 2.182-.781 2.716-2.654l-.905-.35c-.453 1.255-.844 1.482-1.152 1.482-.308 0-.474-.206-.474-.618a2.737 2.737 0 0 1 .103-.638l.66-2.366a5.23 5.23 0 0 0 .226-1.5c0-1.771-1.07-2.695-2.368-2.695-1.214 0-2.449 1.096-3.066 2.249L13.721 9h-3.518l-.495 1.824h1.648l-1.014 4.055c-.797 1.77-2.26 1.799-2.443 1.758-.302-.068-.494-.183-.494-.576a3.847 3.847 0 0 1 .144-.942l1.544-6.124H5.184l-.493 1.824h1.625zm2.902-7.385a1.38 1.38 0 1 0-1.4-1.38 1.384 1.384 0 0 0 1.4 1.38zM0 0h24v24H0Z"
}
,
child:[]
}
]
}
)(t)
}
function K(t){
return o({
attr:{
role:"img",
viewBox:"0 0 24 24"
}
,
child:[{
tag:"path",
attr:{
d:"M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z"
}
,
child:[]
}
]
}
)(t)
}
function $(t){
return o({
attr:{
role:"img",
viewBox:"0 0 24 24"
}
,
child:[{
tag:"path",
attr:{
d:"M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.014-4.49-4.49S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51a3.023 3.023 0 0 0-3.019 3.019c0 1.665 1.365 3.019 3.044 3.019 1.705 0 3.093-1.376 3.093-3.068v-2.97H8.148zm7.704 0h-.098c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h.098c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.49-4.49 4.49zm-.097-7.509c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h.098c1.665 0 3.019-1.355 3.019-3.019s-1.355-3.019-3.019-3.019h-.098z"
}
,
child:[]
}
]
}
)(t)
}
function Q(t){
return o({
attr:{
role:"img",
viewBox:"0 0 24 24"
}
,
child:[{
tag:"path",
attr:{
d:"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zM6.962 7.68c.754 0 1.337.549 1.405 1.2.069.583-.171 1.097-.822 1.406-.343.171-.48.172-.549.069-.034-.069 0-.137.069-.206.617-.514.617-.926.548-1.508-.034-.378-.308-.618-.583-.618-1.2 0-2.914 2.674-2.674 4.629.103.754.549 1.646 1.509 1.646.308 0 .65-.103.96-.24.5-.264.799-.47 1.097-.8-.073-.885.704-2.046 1.851-2.046.515 0 .926.205.96.583.068.514-.377.582-.514.582s-.378-.034-.378-.17c-.034-.138.309-.07.275-.378-.035-.206-.24-.274-.446-.274-.72 0-1.131.994-1.029 1.611.035.275.172.549.447.549.205 0 .514-.31.617-.755.068-.308.343-.514.583-.514.102 0 .17.034.205.171v.138c-.034.137-.137.548-.102.651 0 .069.034.171.17.171.092 0 .436-.18.777-.459.117-.59.253-1.298.253-1.357.034-.24.137-.48.617-.48.103 0 .171.034.205.171v.138l-.136.617c.445-.583 1.097-.994 1.508-.994.172 0 .309.102.309.274 0 .103 0 .274-.069.446-.137.377-.309.96-.412 1.474 0 .137.035.274.207.274.171 0 .685-.206 1.096-.754l.007-.004c-.002-.068-.007-.134-.007-.202 0-.411.035-.754.104-.994.068-.274.411-.514.617-.514.103 0 .205.069.205.171 0 .035 0 .103-.034.137-.137.446-.24.857-.24 1.269 0 .24.034.582.102.788 0 .034.035.069.07.069.068 0 .548-.445.89-1.028-.308-.206-.48-.549-.48-.96 0-.72.446-1.097.858-1.097.343 0 .617.24.617.72 0 .308-.103.65-.274.96h.102a.77.77 0 0 0 .584-.24.293.293 0 0 1 .134-.117c.335-.425.83-.74 1.41-.74.48 0 .924.205.959.582.068.515-.378.618-.515.618l-.002-.002c-.138 0-.377-.035-.377-.172 0-.137.309-.068.274-.376-.034-.206-.24-.275-.446-.275-.686 0-1.13.891-1.028 1.611.034.275.171.583.445.583.206 0 .515-.308.652-.754.068-.274.343-.514.583-.514.103 0 .17.034.205.171 0 .069 0 .206-.137.652-.17.308-.171.48-.137.617.034.274.171.48.309.583.034.034.068.102.068.102 0 .069-.034.138-.137.138-.034 0-.068 0-.103-.035-.514-.205-.72-.548-.789-.891-.205.24-.445.377-.72.377-.445 0-.89-.411-.96-.926a1.609 1.609 0 0 1 .075-.649c-.203.13-.422.203-.623.203h-.17c-.447.652-.927 1.098-1.27 1.303a.896.896 0 0 1-.377.104c-.068 0-.171-.035-.205-.104-.095-.152-.156-.392-.193-.667-.481.527-1.145.805-1.453.805-.343 0-.548-.206-.582-.55v-.376c.102-.754.377-1.2.377-1.337a.074.074 0 0 0-.069-.07c-.24 0-1.028.824-1.166 1.373l-.103.445c-.068.309-.377.515-.582.515-.103 0-.172-.035-.206-.172v-.137l.046-.233c-.435.31-.87.508-1.075.508-.308 0-.48-.172-.514-.412-.206.274-.445.412-.754.412-.352 0-.696-.24-.862-.593-.244.275-.523.553-.852.764-.48.309-1.028.549-1.68.549-.582 0-1.097-.309-1.371-.583-.412-.377-.651-.96-.686-1.509-.205-1.68.823-3.84 2.4-4.8.378-.205.755-.343 1.132-.343zm9.77 3.291c-.104 0-.172.172-.172.343 0 .274.137.583.309.755a1.74 1.74 0 0 0 .102-.583c0-.343-.137-.515-.24-.515z"
}
,
child:[]
}
]
}
)(t)
}
function Y(t){
return o({
attr:{
version:"1.1",
viewBox:"0 0 34 32"
}
,
child:[{
tag:"path",
attr:{
d:"M3.556 2.845v27.071h27.53v-27.071h-27.53zM28.896 27.763h-23.151v-22.765h23.151v22.765z"
}
,
child:[]
}
,
{
tag:"path",
attr:{
d:"M16.555 10.442c-0.693-0.599-1.726-0.939-3.173-0.939-1.433 0-3.173 0.046-3.173 0.046l-0 11.103h2.326v-3.568c0 0 0.407-0.005 0.847-0.023 1.593-0.067 2.526-0.549 3.327-1.364 0.616-0.631 0.955-1.53 0.955-2.627s-0.447-2.062-1.109-2.628zM13.32 15.115c-0.375 0.004-0.533 0.016-0.786-0.008v-3.834c0 0 0.493-0.017 0.971 0 1.198 0.044 1.833 0.89 1.833 1.921-0 1.148-0.77 1.906-2.018 1.921z"
}
,
child:[]
}
,
{
tag:"path",
attr:{
d:"M22.205 15.455c-1.005-0.356-1.324-0.559-1.324-0.949 0-0.423 0.352-0.677 0.972-0.677 0.703 0 1.767 0.454 2.136 0.658v-1.871c-0.502-0.254-1.265-0.566-2.22-0.566-2.027 0-3.334 1.169-3.334 2.728-0.017 0.965 0.636 1.655 2.329 2.231 0.955 0.322 1.206 0.767 1.206 1.191s-0.318 0.695-1.089 0.695c-0.754 0-1.86-0.431-2.329-0.718v0 1.847c0.62 0.338 1.518 0.659 2.329 0.684 2.363 0.074 3.551-1.152 3.551-2.694-0.017-1.22-0.67-2.016-2.228-2.558z"
}
,
child:[]
}
]
}
)(t)
}
function _(t){
return o({
attr:{
version:"1.1",
viewBox:"0 0 34 32"
}
,
child:[{
tag:"path",
attr:{
d:"M21.66 10.97c0.695 0 1.264-0.563 1.264-1.253s-0.569-1.253-1.264-1.253c-0.695 0-1.264 0.563-1.264 1.253 0 0.695 0.563 1.253 1.264 1.253z"
}
,
child:[]
}
,
{
tag:"path",
attr:{
d:"M20.425 12.067h2.442v9.183h-2.442v-9.183z"
}
,
child:[]
}
,
{
tag:"path",
attr:{
d:"M12.655 18.171h3.304l0.893 3.076h2.501l-3.632-12.066h-3.036v1.191l-3.185 10.875h2.262l0.893-3.076zM14.292 11.328l1.221 4.733h-2.441l1.22-4.733z"
}
,
child:[]
}
,
{
tag:"path",
attr:{
d:"M3.002 2.316v27.007h27.582v-27.007h-27.582zM28.516 27.197h-23.406v-22.755h23.406l-0 22.755z"
}
,
child:[]
}
]
}
)(t)
}
const d=[{
name:"Figma",
icon:e.jsx($,
{
color:"#F24E1E"
}
)
}
,
{
name:"Adobe XD",
icon:e.jsx("span",
{
style:{
color:"#FF61F6",
fontWeight:"bold",
fontSize:20
}
,
children:"Xd"
}
)
}
,
{
name:"Photoshop",
icon:e.jsx(Y,
{
color:"#31A8FF"
}
)
}
,
{
name:"Illustrator",
icon:e.jsx(_,
{
color:"#FF9A00"
}
)
}
,
{
name:"Framer",
icon:e.jsx(K,
{
color:"#0055FF"
}
)
}
,
{
name:"Miro",
icon:e.jsx(Z,
{
color:"#FFD02F"
}
)
}
,
{
name:"Notion",
icon:e.jsx(G,
{
color:"#fff"
}
)
}
,
{
name:"ChatGPT",
icon:e.jsx(q,
{
color:"#10A37F"
}
)
}
,
{
name:"Claude AI",
icon:e.jsx("span",
{
style:{
color:"#D97757",
fontWeight:"bold",
fontSize:20
}
,
children:"C"
}
)
}
,
{
name:"Sketch",
icon:e.jsx(O,
{
color:"#F7B500"
}
)
}
,
{
name:"Canva",
icon:e.jsx(Q,
{
color:"#00C4CC"
}
)
}
,
{
name:"InVision",
icon:e.jsx(J,
{
color:"#FF3366"
}
)
}
],
ee=()=>{
const t=[...d,
...d,
...d,
...d];
return e.jsxs("section",
{
className:"about-tools",
children:[e.jsxs("div",
{
className:"section-header",
children:[e.jsx("div",
{
className:"section-label",
children:"🛠️ My Toolkit"
}
),
e.jsxs("h2",
{
children:["Tools & ",
e.jsx("span",
{
children:"Technologies"
}
)]
}
)]
}
),
e.jsx("div",
{
className:"tools-marquee",
children:t.map((s,
a)=>e.jsxs("div",
{
className:"tool-card",
children:[e.jsx("span",
{
className:"tool-icon",
children:s.icon
}
),
e.jsx("span",
{
children:s.name
}
)]
}
,
a))
}
)]
}
)
}
;
i.registerPlugin(l);
const te=[{
icon:e.jsx(A,
{

}
),
title:"UI/UX Design",
desc:"Creating intuitive and aesthetically stunning digital experiences that keep users engaged."
}
,
{
icon:e.jsx(S,
{

}
),
title:"Website Design & Dev",
desc:"Building responsive,
 fast,
 and scalable web solutions with modern technologies."
}
,
{
icon:e.jsx(w,
{

}
),
title:"Mobile App Design",
desc:"Designing seamless mobile applications for iOS & Android platforms."
}
,
{
icon:e.jsx(T,
{

}
),
title:"ERP Software Solutions",
desc:"Custom business management and enterprise software tailored to your needs."
}
,
{
icon:e.jsx(I,
{

}
),
title:"AI Automation",
desc:"Integrating AI-powered tools to automate and streamline business workflows."
}
,
{
icon:e.jsx(C,
{

}
),
title:"Business Digital Solutions",
desc:"End-to-end digital transformation for startups and enterprises."
}
,
{
icon:e.jsx(D,
{

}
),
title:"Custom IT Support",
desc:"Reliable technical support and consulting for all your IT infrastructure needs."
}
,
{
icon:e.jsx(F,
{

}
),
title:"Branding & Product Design",
desc:"Comprehensive brand identity,
 logo design,
 and product strategy."
}
],
se=()=>{
const t=n.useRef(null);
return n.useEffect(()=>{
const s=i.context(()=>{
i.fromTo(".about-freelance .section-header",
{
y:30,
opacity:0
}
,
{
y:0,
opacity:1,
duration:.9,
scrollTrigger:{
trigger:".about-freelance",
start:"top 80%"
}

}
),
i.fromTo(".freelance-card",
{
y:50,
opacity:0
}
,
{
y:0,
opacity:1,
duration:.7,
stagger:.08,
scrollTrigger:{
trigger:".freelance-grid",
start:"top 85%"
}

}
)
}
,
t);
return()=>s.revert()
}
,
[]),
e.jsxs("section",
{
className:"about-freelance",
ref:t,
children:[e.jsxs("div",
{
className:"section-header",
children:[e.jsx("div",
{
className:"section-label",
children:"🚀 What I Offer"
}
),
e.jsxs("h2",
{
children:["Freelance ",
e.jsx("span",
{
children:"Services"
}
)]
}
),
e.jsx("p",
{
style:{
color:"rgba(255,
255,
255,
0.5)",
maxWidth:600,
margin:"16px auto 0",
lineHeight:1.7
}
,
children:"We provide complete IT solutions for businesses and clients worldwide,
 from initial concept to final deployment."
}
)]
}
),
e.jsx("div",
{
className:"freelance-grid",
children:te.map((s,
a)=>e.jsxs("div",
{
className:"freelance-card",
children:[e.jsx("div",
{
className:"service-icon",
children:s.icon
}
),
e.jsx("h3",
{
children:s.title
}
),
e.jsx("p",
{
children:s.desc
}
)]
}
,
a))
}
)]
}
)
}
;
i.registerPlugin(l);
const g=[{
target:20,
suffix:"+",
label:"Freelance Projects Completed"
}
,
{
target:100,
suffix:"+",
label:"Total Projects Delivered"
}
,
{
target:2,
suffix:"",
label:"Running Freelance Projects"
}
,
{
target:0,
suffix:"🌎",
label:"Worldwide Service Available",
isEmoji:!0
}
],
ie=()=>{
const t=n.useRef(null),
s=n.useRef(!1),
a=n.useCallback(()=>{
if(s.current)return;
s.current=!0,
document.querySelectorAll(".stat-number").forEach((c,
x)=>{
const h=g[x];
if(h.isEmoji)return;
const u={
val:0
}
;
i.to(u,
{
val:h.target,
duration:2.5,
ease:"power2.out",
onUpdate:()=>{
c.textContent=Math.ceil(u.val)+h.suffix
}

}
)
}
)
}
,
[]);
return n.useEffect(()=>{
const r=i.context(()=>{
i.fromTo(".stats-image",
{
x:-50,
opacity:0
}
,
{
x:0,
opacity:1,
duration:1,
scrollTrigger:{
trigger:t.current,
start:"top 78%"
}

}
),
i.fromTo(".stats-content",
{
x:50,
opacity:0
}
,
{
x:0,
opacity:1,
duration:1,
scrollTrigger:{
trigger:t.current,
start:"top 78%"
}

}
),
i.fromTo(".stat-card",
{
y:30,
opacity:0
}
,
{
y:0,
opacity:1,
duration:.6,
stagger:.12,
scrollTrigger:{
trigger:".stats-grid",
start:"top 85%",
onEnter:a
}

}
)
}
,
t);
return()=>r.revert()
}
,
[a]),
e.jsx("section",
{
className:"about-stats",
ref:t,
children:e.jsxs("div",
{
className:"stats-inner",
children:[e.jsx("div",
{
className:"stats-image",
children:e.jsx("img",
{
src:"/images/style-reference.jpg",
alt:"Sahil Ahmed's Design Achievements"
}
)
}
),
e.jsxs("div",
{
className:"stats-content",
children:[e.jsxs("h2",
{
children:["Achievements & ",
e.jsx("span",
{
children:"Impact"
}
)]
}
),
e.jsx("p",
{
children:"Numbers that reflect years of dedication,
 creativity,
 and a commitment to delivering exceptional digital experiences for clients worldwide."
}
),
e.jsx("div",
{
className:"stats-grid",
children:g.map((r,
c)=>e.jsxs("div",
{
className:"stat-card",
children:[e.jsx("div",
{
className:"stat-number",
children:r.isEmoji?r.suffix:`0${
r.suffix
}
`
}
),
e.jsx("p",
{
children:r.label
}
)]
}
,
c))
}
)]
}
)]
}
)
}
)
}
,
ce=()=>(n.useEffect(()=>{
window.scrollTo(0,
0)
}
,
[]),
e.jsxs("div",
{
className:"container-main",
children:[e.jsx(L,
{

}
),
e.jsx(p,
{

}
),
e.jsx(E,
{

}
),
e.jsx("div",
{
id:"smooth-wrapper",
children:e.jsx("div",
{
id:"smooth-content",
children:e.jsxs("div",
{
className:"container-main about-page-wrapper",
children:[e.jsx(k,
{

}
),
e.jsx(R,
{

}
),
e.jsx(W,
{

}
),
e.jsx(V,
{

}
),
e.jsx(ee,
{

}
),
e.jsx(se,
{

}
),
e.jsx(ie,
{

}
),
e.jsx(P,
{

}
),
e.jsx(U,
{

}
)]
}
)
}
)
}
)]
}
));
export{
ce as default
}
;

