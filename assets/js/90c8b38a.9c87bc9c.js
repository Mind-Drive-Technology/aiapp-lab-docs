"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[868],{9536:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=t(7624),i=t(4552);const r={},a="Add knowledge",s={id:"Part-2-labs/Add-Knowledge",title:"Add knowledge",description:"Retrieval-Augmented Generation (RAG) is an AI technique that retrieves relevant information from a database and then uses it to help generate more informed and contextually accurate text responses.",source:"@site/docs/05-Part-2-labs/5-Add-Knowledge.md",sourceDirName:"05-Part-2-labs",slug:"/Part-2-labs/Add-Knowledge",permalink:"/aiapp-lab-docs/Part-2-labs/Add-Knowledge",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:5,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"System Message",permalink:"/aiapp-lab-docs/Part-2-labs/System-Message"},next:{title:"Function Calling",permalink:"/aiapp-lab-docs/Part-2-labs/Function-Calling"}},d={},l=[{value:"Adding current information:",id:"adding-current-information",level:2},{value:"Retrieval-Augmented Generation",id:"retrieval-augmented-generation",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"add-knowledge",children:"Add knowledge"}),"\n",(0,o.jsx)(n.admonition,{title:"Retrieval Augmented Generation",type:"tip",children:(0,o.jsx)(n.p,{children:"Retrieval-Augmented Generation (RAG) is an AI technique that retrieves relevant information from a database and then uses it to help generate more informed and contextually accurate text responses."})}),"\n",(0,o.jsx)(n.p,{children:"In this lab we are going to add new knowledge to the conversation. This is to illustrate how the process of adding your own data would work in a production scenario. We are going to add the data manually, but you can use many different techniques and tools to retrieve the data and add it to the conversation with the assistant."}),"\n",(0,o.jsx)(n.h2,{id:"adding-current-information",children:"Adding current information:"}),"\n",(0,o.jsx)(n.p,{children:"Let's imagine that we are making a assistant for our outdoor hiking company to enable user to ask questions and get recommendations about the products the company is selling."}),"\n",(0,o.jsx)(n.p,{children:"For a trip in the muddy mountains a customer is looking for hiking shoes."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Can you recommend me a hiking shoe for a muddy trip?\n"})}),"\n",(0,o.jsx)(n.p,{children:"You will see that the model will return a lot of great suggestions, but none of them are being sold by our company."}),"\n",(0,o.jsx)(n.p,{children:"Let's start and fix that problem by giving the model the right information on runtime and without fine-tuning."}),"\n",(0,o.jsx)(n.p,{children:"First we start with giving the assistant a specific task."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",metastring:'title="Enter in the system message:"',children:"## Task\nYou are an Trailwalker Hiking shoe store AI assistant. \nYou help users answer questions about our shoe products.\nYou will be given search results as retrieved Documents that contain product information.\nYour answer should be as precise as possible.\nYour answer should only come from the retrieved Documents with product information.\nIf the Retrieved Documents do not contain sufficient information to answer user message completely, you do not answer the question and inform the user you do not have enough information.\n\n## Retrieved Documents\nNo information found.\n"})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Can you recommend me a hiking shoe for a muddy trip?\n"})}),"\n",(0,o.jsx)(n.p,{children:"Notice that the assistant will respond that it has not enough information to answer the question."}),"\n",(0,o.jsx)(n.p,{children:"Now let's add some product information to the prompt. Imagine here that you have done a search query in a database and got the products below back."}),"\n",(0,o.jsx)(n.p,{children:"Update the System Message with Retrieved documents:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",metastring:'title="Enter in the system message:"',children:"You are an Trailwalker Hiking shoe store AI assistant. \nYou help users answer questions about our shoe products.\nYou will be given search results as retrieved Documents that contain product information.\nYour answer should be as precise as possible.\nYour answer should only come from the retrieved Documents with product information.\nIf the Retrieved Documents do not contain sufficient information to answer user message completely, you do not answer the question and inform the user you do not have enough information.\n\n## Retrieved Documents\n\nProduct name: Trailwalker X1\nProduct description:\nHarness the power of enduring comfort on your hikes with our expertly designed hiking shoes. Featuring cushioned insoles, supportive ankle collars, and breathable materials, they ensure your feet are cradled in comfort with every step on the trail. Say goodbye to blisters and fatigue, and hello to enjoyable long-distance treks\n\nProduct name: Sandwalker T7\nProduct description:\n\nCrafted with versatility and durability in mind, these hiking shoes feature a lightweight design with breathable materials that provide comfort on warm, sandy beach hikes. Their specialized soles offer excellent traction on loose surfaces, while quick-drying uppers and sand-resistant closures keep feet protected and debris-free during your coastal adventures.\n\nProduct name: Mudmaster P9\nProduct description:\nConstructed with advanced waterproof materials and an aggressive, multi-directional tread pattern, these hiking shoes provide exceptional grip and stability on slippery, muddied terrains. Their durable upper and reinforced toe cap offer protection against abrasions, while the cushioned midsole ensures comfort during the most challenging hikes. Designed with breathability in mind, they help maintain a dry and comfortable foot environment, even when the conditions are wet and demanding. Ideal for the adventurous hiker who refuses to let mud and rough trails slow them down.\n\nProduct name: Rockclimber U5\nProduct description:\nDesigned with rock enthusiasts in mind, these hiking shoes feature advanced rubber outsoles for unmatched traction on rocky terrains, reinforced toe caps for protection against abrasions, and a snug, supportive fit to ensure stability during your most challenging ascents. Ideal for scaling craggy landscapes, they offer the perfect blend of durability, comfort, and grip to keep you confidently moving upward.\n"})}),"\n",(0,o.jsx)(n.p,{children:"Clear the conversation and ask the question again."}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Can you recommend me a hiking shoe for a muddy trip?\n"})}),"\n",(0,o.jsx)(n.p,{children:"The assistant should recommend you the Mudmaster P9 shoes."}),"\n",(0,o.jsx)(n.h3,{id:"retrieval-augmented-generation",children:"Retrieval-Augmented Generation"}),"\n",(0,o.jsx)(n.p,{children:"Retrieval-Augmented Generation (RAG) combines a language model with a search system to provide more accurate and detailed information. Here are the  steps needed:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Ask a Question"}),": You start by providing the RAG system with a question or prompt that you want more information about."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Find Relevant Information"}),": The RAG system searches a large database of texts, like Wikipedia, to find passages that contain useful information related to your question."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Choose the Best Bits"}),": The system picks the most relevant pieces of information it found during the search to help answer the question."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Generate an Answer"}),": Using the chosen information, the language model creates a response that includes details from the texts it found, making the answer more accurate and informative."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Deliver the Response"}),": You receive an answer that's been enhanced with specific information from the search, giving you a better, well-informed reply to your question."]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Retrieval-Augmented Generation",src:t(1588).c+"",width:"3000",height:"1136"})}),"\n",(0,o.jsx)(n.admonition,{title:"Want to learn more?",type:"info",children:(0,o.jsxs)(n.p,{children:['Join the workshop: "Build your RAG Application in Promptflow in Azure AI Studio".\n',(0,o.jsx)(n.a,{href:"https://envision.microsoft.com/home",children:"Find the Microsoft AI Tour Schedule here"})]})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},1588:(e,n,t)=>{t.d(n,{c:()=>o});const o=t.p+"assets/images/rag-09d22ae057c849b6bd1ca01e22f051ee.png"},4552:(e,n,t)=>{t.d(n,{I:()=>s,M:()=>a});var o=t(1504);const i={},r=o.createContext(i);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);