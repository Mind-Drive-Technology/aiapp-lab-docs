"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[684],{1532:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var s=t(7624),l=t(4552);const i={title:"\ub300\uaddc\ubaa8 \uc5b8\uc5b4 \ubaa8\ub378(LLM)",slug:"/llms"},r=void 0,d={id:"concepts/Understand-LLMs",title:"\ub300\uaddc\ubaa8 \uc5b8\uc5b4 \ubaa8\ub378(LLM)",description:"\uc774 \ud398\uc774\uc9c0\ub294 \uae30\uacc4 \ubc88\uc5ed\uc744 \ud1b5\ud574 \ud55c\uad6d\uc5b4\ub85c \ubc88\uc5ed\ud588\uc2b5\ub2c8\ub2e4. \uc5b4\uc0c9\ud55c \ud45c\ud604\uc774 \uc788\uc744 \uc218 \uc788\uc73c\ub2c8 \uc591\ud574 \ubc14\ub78d\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/06-concepts/2-Understand-LLMs.md",sourceDirName:"06-concepts",slug:"/llms",permalink:"/aiapp-lab-docs/ko/llms",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"\ub300\uaddc\ubaa8 \uc5b8\uc5b4 \ubaa8\ub378(LLM)",slug:"/llms"},sidebar:"tutorialSidebar",previous:{title:"AI \ubaa8\ub378 \ubc0f \ubc30\ud3ec",permalink:"/aiapp-lab-docs/ko/ai-models"},next:{title:"\uc9d1\uc5d0\uc11c \ud574 \ubcf4\uae30",permalink:"/aiapp-lab-docs/ko/at-home"}},o={},c=[{value:"LLM\uc740 \uc5bc\ub9c8\ub098 \ud070\uac00\uc694?",id:"llm\uc740-\uc5bc\ub9c8\ub098-\ud070\uac00\uc694",level:3},{value:"&quot;\ud30c\uc6b4\ub370\uc774\uc158 \ubaa8\ub378&quot;\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?",id:"\ud30c\uc6b4\ub370\uc774\uc158-\ubaa8\ub378\uc774\ub780-\ubb34\uc5c7\uc778\uac00\uc694",level:3},{value:"LLM\uc740 NLP\uc640 \uc5b4\ub5bb\uac8c \ub2e4\ub978\uac00\uc694?",id:"llm\uc740-nlp\uc640-\uc5b4\ub5bb\uac8c-\ub2e4\ub978\uac00\uc694",level:3},{value:"LLM\uc774 \ud558\uc9c0 \ubabb\ud558\ub294 \uac83\uc740 \ubb34\uc5c7\uc778\uac00\uc694?",id:"llm\uc774-\ud558\uc9c0-\ubabb\ud558\ub294-\uac83\uc740-\ubb34\uc5c7\uc778\uac00\uc694",level:3}];function a(e){const n={admonition:"admonition",em:"em",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.M)(),...e.components},{Head:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Head",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i,{children:(0,s.jsx)("body",{className:"navigation-with-keyboard ko"})}),"\n",(0,s.jsx)(n.admonition,{title:"\uc77c\ub7ec\ub450\uae30",type:"note",children:(0,s.jsx)(n.p,{children:"\uc774 \ud398\uc774\uc9c0\ub294 \uae30\uacc4 \ubc88\uc5ed\uc744 \ud1b5\ud574 \ud55c\uad6d\uc5b4\ub85c \ubc88\uc5ed\ud588\uc2b5\ub2c8\ub2e4. \uc5b4\uc0c9\ud55c \ud45c\ud604\uc774 \uc788\uc744 \uc218 \uc788\uc73c\ub2c8 \uc591\ud574 \ubc14\ub78d\ub2c8\ub2e4."})}),"\n",(0,s.jsx)(n.p,{children:"\ub300\uaddc\ubaa8 \uc5b8\uc5b4 \ubaa8\ub378(LLM)\uc740 \uc790\uc5f0\uc5b4 \ud14d\uc2a4\ud2b8\ub97c \ucc98\ub9ac\ud558\uace0 \uc0dd\uc131\ud560 \uc218 \uc788\ub294 AI\uc758 \ud55c \uc720\ud615\uc785\ub2c8\ub2e4. \ucc45, \uae30\uc0ac, \uc6f9 \ud398\uc774\uc9c0 \ub4f1 \ubc29\ub300\ud55c \uc591\uc758 \ud14d\uc2a4\ud2b8 \ub370\uc774\ud130\uc5d0\uc11c \ud559\uc2b5\ud558\uc5ec \uc5b8\uc5b4\uc758 \ud328\ud134\uacfc \uaddc\uce59\uc744 \ubc1c\uacac\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(n.h3,{id:"llm\uc740-\uc5bc\ub9c8\ub098-\ud070\uac00\uc694",children:"LLM\uc740 \uc5bc\ub9c8\ub098 \ud070\uac00\uc694?"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"LLM \uc124\uba85",src:t(1888).c+"",width:"2030",height:"1128"})}),"\n",(0,s.jsxs)(n.p,{children:["LLM\uc740 ",(0,s.jsx)(n.strong,{children:"\uc2e0\uacbd\ub9dd \uc544\ud0a4\ud14d\ucc98"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uad6c\ucd95\ub429\ub2c8\ub2e4. \uc785\ub825\uc744 \ubc1b\uace0, \uc5b8\uc5b4\uc758 \uc5ec\ub7ec \uce21\uba74\uc744 \uc138\ubd84\ud654\ud558\ub294 \uc5ec\ub7ec \uac1c\uc758 \uc228\uaca8\uc9c4 \ub808\uc774\uc5b4\uc640 \ucd9c\ub825 \ub808\uc774\uc5b4\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc0ac\ub78c\ub4e4\uc740 \uc885\uc885 \ub2e4\uc74c \uae30\ubcf8 \ubaa8\ub378\uc774 \uc774\uc804 \ubaa8\ub378\ubcf4\ub2e4 \ub354 \ud06c\ub2e4\uace0 \ubcf4\uace0\ud558\ub294\ub370, \uc774\uac83\uc774 \ubb34\uc5c7\uc744 \uc758\ubbf8\ud560\uae4c\uc694? \ubaa8\ub378\uc5d0 \ub9e4\uac1c\ubcc0\uc218\uac00 \ub9ce\uc744\uc218\ub85d \ucc98\ub9ac\ud558\uace0, \ud559\uc2b5\ud558\uace0, \uc0dd\uc131\ud560 \uc218 \uc788\ub294 \ub370\uc774\ud130\uac00 \ub9ce\uc544\uc9d1\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.p,{children:["\uc2e0\uacbd\ub9dd \uc544\ud0a4\ud14d\ucc98\uc758 \ub450 \ub274\ub7f0 \uc0ac\uc774\uc758 \uac01 \uc5f0\uacb0\uc5d0\ub294 \ud568\uc218\uac00 \uc788\uc2b5\ub2c8\ub2e4. \ud568\uc218\uc2dd: ",(0,s.jsx)(n.em,{children:"\uac00\uc911\uce58 * \uc785\ub825 + \ubc14\uc774\uc5b4\uc2a4"}),". \uc774 \ud568\uc218\ub294 \ubaa8\ub378\uc774 \uc5b8\uc5b4\ub97c \ucc98\ub9ac\ud558\ub294 \ubc29\uc2dd\uc744 \uacb0\uc815\ud558\ub294 \uc218\uce58 \uac12\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. 2018\ub144\uc5d0\ub294 \uc218\ubc31\ub9cc \uac1c\uc758 \ub9e4\uac1c\ubcc0\uc218\uc5d0\uc11c 2023\ub144\uc5d0 \uacc4\uc0b0\ub41c \uc218\uc870 \uac1c\uc758 \ub9e4\uac1c\ubcc0\uc218(GPT4 \uae30\uc900)\ub97c \ubcf4\uace0\ud558\ub294 \ub4f1 \uadf8 \uaddc\ubaa8\uac00 \uc0c1\ub2f9\ud788 \ud07d\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"\ud30c\uc6b4\ub370\uc774\uc158-\ubaa8\ub378\uc774\ub780-\ubb34\uc5c7\uc778\uac00\uc694",children:'"\ud30c\uc6b4\ub370\uc774\uc158 \ubaa8\ub378"\uc774\ub780 \ubb34\uc5c7\uc778\uac00\uc694?'}),"\n",(0,s.jsxs)(n.p,{children:["\ud30c\uc6b4\ub370\uc774\uc158 \ubaa8\ub378\uc740 \ub300\uaddc\ubaa8 \ud14d\uc2a4\ud2b8 \ub610\ub294 \ucf54\ub4dc \ub9d0\ubb49\uce58(\ucf54\ub371\uc2a4 \ubaa8\ub378\uc758 \uacbd\uc6b0)\uc5d0 \ub300\ud574 \ud559\uc2b5\ub418\uace0 \ubbf8\uc138 \uc870\uc815\ub41c GPT-3, GPT-4 \ub610\ub294 Codex\uc640 \uac19\uc740 LLM\uc758 \ud2b9\uc815 \uc778\uc2a4\ud134\uc2a4 \ub610\ub294 \ubc84\uc804\uc744 \ub9d0\ud569\ub2c8\ub2e4. \uc774 \ubaa8\ub378\uc740 \ub2e4\uc591\ud55c \ud615\uc2dd\uc758 \ud559\uc2b5 \ub370\uc774\ud130\ub97c \ubc1b\uc544\ub4e4\uc774\uace0 ",(0,s.jsx)(n.strong,{children:"\ud2b8\ub79c\uc2a4\ud3ec\uba38 \uc544\ud0a4\ud14d\ucc98"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc77c\ubc18 \ubaa8\ub378\uc744 \uad6c\ucd95\ud569\ub2c8\ub2e4. \uac70\uae30\uc5d0\uc11c \ud504\ub86c\ud504\ud2b8\ub098 \ud30c\uc778\ud29c\ub2dd\uc744 \ud1b5\ud574 \ud2b9\uc815 \uc791\uc5c5\uc744 \uc218\ud589\ud558\uae30 \uc704\ud55c \uc801\uc751 \ubc0f \uc804\ubb38\ud654\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(n.h3,{id:"llm\uc740-nlp\uc640-\uc5b4\ub5bb\uac8c-\ub2e4\ub978\uac00\uc694",children:"LLM\uc740 NLP\uc640 \uc5b4\ub5bb\uac8c \ub2e4\ub978\uac00\uc694?"}),"\n",(0,s.jsx)(n.p,{children:"\ub300\uaddc\ubaa8 \uc5b8\uc5b4 \ubaa8\ub378\uc740 \uae30\uc874 \uc790\uc5f0\uc5b4 \ucc98\ub9ac(NLP) \uc194\ub8e8\uc158\uacfc \uc5b4\ub5bb\uac8c \ub2e4\ub978\uac00\uc694? \uc544\ub798 \ud45c\ub294 \ube44\uad50\ub97c \uc704\ud55c \uba87 \uac00\uc9c0 \ucc99\ub3c4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\uae30\uc874 NLP"}),(0,s.jsx)(n.th,{children:"\ub300\uaddc\ubaa8 \uc5b8\uc5b4 \ubaa8\ub378"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\uae30\ub2a5\ub2f9 \ud558\ub098\uc758 \ubaa8\ub378\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),(0,s.jsx)(n.td,{children:"\uc5ec\ub7ec NLP \uc0ac\uc6a9 \uc0ac\ub840\uc5d0 \ub2e8\uc77c \ubaa8\ub378 \uc7ac\uc0ac\uc6a9"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\ud55c\uc815\ub41c \ub808\uc774\ube14 \ub370\uc774\ud130 \uc138\ud2b8\uc5d0\uc11c \ud559\uc2b5\ub41c \ubaa8\ub378"}),(0,s.jsx)(n.td,{children:"\uc218 TB\uc5d0 \ub2ec\ud558\ub294 \ub808\uc774\ube14\uc774 \uc5c6\ub294 \ub370\uc774\ud130\uc5d0\uc11c \ud559\uc2b5\ub41c \uae30\ucd08 \ubaa8\ub378"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"\ud2b9\uc815 \uc0ac\uc6a9 \uc0ac\ub840\uc5d0 \uace0\ub3c4\ub85c \ucd5c\uc801\ud654\ub428"}),(0,s.jsx)(n.td,{children:"\uac1c\ubc29\ud615 \uc0ac\uc6a9 - \uc790\uc5f0\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubaa8\ub378\uc5d0 \ubb34\uc5b8\uac00\ub97c '\ud504\ub86c\ud504\ud2b8'\ud558\ub3c4\ub85d \ud568"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"llm\uc774-\ud558\uc9c0-\ubabb\ud558\ub294-\uac83\uc740-\ubb34\uc5c7\uc778\uac00\uc694",children:"LLM\uc774 \ud558\uc9c0 \ubabb\ud558\ub294 \uac83\uc740 \ubb34\uc5c7\uc778\uac00\uc694?"}),"\n",(0,s.jsx)(n.p,{children:"\ub300\uaddc\ubaa8 \uc5b8\uc5b4 \ubaa8\ub378\uc740 \ud48d\ubd80\ud558\uace0 \uac15\ub825\ud55c \uc81c\ub108\ub808\uc774\ud2f0\ube0c AI \uacbd\ud5d8\uc744 \uc81c\uacf5\ud558\uc9c0\ub9cc, LLM\uc740 \ub2e4\uc74c\uacfc \uac19\uc740 \uae30\ub2a5\uc744 \uc218\ud589\ud558\uc9c0 \ubabb\ud55c\ub2e4\ub294 \uc810\uc744 \uae30\uc5b5\ud574\uc57c \ud569\ub2c8\ub2e4:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\uc5b8\uc5b4\ub97c \uc774\ud574\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4"}),": \uc608\uce21 \uc5d4\uc9c4\uc77c \ubfd0\uc785\ub2c8\ub2e4. \uc774\uc804\uc5d0 \ubcf8 \ud14d\uc2a4\ud2b8 \ud328\ud134\uc744 \uae30\ubc18\uc73c\ub85c \uc8fc\uc5b4\uc9c4 \ud14d\uc2a4\ud2b8 \uc785\ub825\uc5d0 \ub300\ud574 \uc644\uc131\uc744 _\uc608\uce21_\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 \ucf58\ud150\uce20\uc758 \ubb38\ub9e5\uc774\ub098 \uc758\ubbf8\ub97c \uc774\ud574\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4(\uc608: \uc218\ud559\uc744 \uc774\ud574\ud558\uc9c0 \ubabb\ud568)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\uc0ac\uc2e4\uc744 \uc774\ud574\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4"}),": _\uc815\ubcf4 \uac80\uc0c9_\uacfc _\ucc3d\uc758\uc801 \uae00\uc4f0\uae30_\ub97c \uc704\ud55c \ubcc4\ub3c4\uc758 '\ubaa8\ub4dc'\ub294 \uc5c6\uc2b5\ub2c8\ub2e4. \uc774 \ubaa8\ub378\uc740 \uc9c4\ud589 \uc911\uc778 \uc2dc\ud000\uc2a4\uc5d0\uc11c \ub2e4\uc74c\uc73c\ub85c \uac00\ub2a5\uc131\uc774 \ub192\uc740 \ud1a0\ud070\uc744 \uc608\uce21\ud560 \ubfd0\uc785\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\ub9e4\ub108, \uac10\uc815 \ub610\ub294 \uc724\ub9ac\ub97c \uc774\ud574\ud558\uc9c0 \ubabb\ud569\ub2c8\ub2e4"})," \uc778\uac04\uc758 \ud2b9\uc131\uc744 \ubd80\uc5ec\ud558\uac70\ub098 \ubb34\uc5b8\uac00\ub97c '\uc774\ud574\ud55c\ub2e4'\uace0 \uc8fc\uc7a5\ud568\uc73c\ub85c\uc368 LLM\uc744 _\uc758\uc778\ud654_\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ucd9c\ub825\uc740 \ub2e8\uc21c\ud788 \uc8fc\uc5b4\uc9c4 \ud504\ub86c\ud504\ud2b8\uc5d0 \ub530\ub77c \ud559\uc2b5 \ub370\uc774\ud130\ub97c \ud559\uc2b5\ud55c \uacb0\uacfc\uc77c \ubfd0\uc785\ub2c8\ub2e4."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1888:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/llm-001-da6e9df83e520a18f43984ad5118b9a7.png"},4552:(e,n,t)=>{t.d(n,{I:()=>d,M:()=>r});var s=t(1504);const l={},i=s.createContext(l);function r(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);