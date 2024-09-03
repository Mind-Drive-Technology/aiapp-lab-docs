"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[308],{9108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(7624),i=n(4552);const r={},o="Basic Prompting",s={id:"Prompt-engineering-techniques/part-1/Basic-Prompting",title:"Basic Prompting",description:"Prompt engineering is a concept in Natural Language Processing (NLP) that involves embedding descriptions of tasks in input to prompt the model to output the desired results.",source:"@site/docs/00-Prompt-engineering-techniques/part-1/1-Basic-Prompting.md",sourceDirName:"00-Prompt-engineering-techniques/part-1",slug:"/Prompt-engineering-techniques/part-1/Basic-Prompting",permalink:"/aiapp-lab-docs/ko/Prompt-engineering-techniques/part-1/Basic-Prompting",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Summary",permalink:"/aiapp-lab-docs/ko/summary"},next:{title:"Prompt engineering techniques",permalink:"/aiapp-lab-docs/ko/Prompt-engineering-techniques/part-1/Prompt-engineering-techniques"}},l={},c=[{value:"Generating novel content",id:"generating-novel-content",level:2},{value:"Information extraction",id:"information-extraction",level:2},{value:"Structured data extraction",id:"structured-data-extraction",level:2},{value:"Text Classification",id:"text-classification",level:2},{value:"Text summarization",id:"text-summarization",level:2},{value:"Conversation History",id:"conversation-history",level:2},{value:"Less-useful prompts",id:"less-useful-prompts",level:2},{value:"Generative AI models can&#39;t perform actions",id:"generative-ai-models-cant-perform-actions",level:2},{value:"Completions are not facts",id:"completions-are-not-facts",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"basic-prompting",children:"Basic Prompting"}),"\n",(0,a.jsx)(t.admonition,{title:"What is prompt engineering?",type:"tip",children:(0,a.jsxs)(t.p,{children:["Prompt engineering is a concept in Natural Language Processing (NLP) that involves ",(0,a.jsx)(t.strong,{children:"embedding descriptions of tasks"})," in input to ",(0,a.jsx)(t.strong,{children:"prompt the model"})," to output the ",(0,a.jsx)(t.strong,{children:"desired results"}),"."]})}),"\n",(0,a.jsx)(t.p,{children:"Lets start with a few prompts and observe the response using the chat interface."}),"\n",(0,a.jsx)(t.p,{children:"Here are some examples to try, but get creative with your own prompts and see what happens!"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What are the different types of road bikes?\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"How much does a mountain bike cost?\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What are the top 5 mountain bike brands?\nList the brand name and the country of origin.\nRank the brands from 1 to 5 in the list.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"generating-novel-content",children:"Generating novel content"}),"\n",(0,a.jsx)(t.p,{children:"Even though the outputs are generated based on frequencies of similar content in the training data, generative AI models are still capable of generating novel content that has never existed before."}),"\n",(0,a.jsx)(t.p,{children:"Try a prompt like this:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Write a limerick about a bike.\n"})}),"\n",(0,a.jsx)(t.p,{children:"How was the limerick? If you didn't like it, you can always ask the chat session to generate a new one."}),"\n",(0,a.jsx)(t.p,{children:"Next lets check out the parameters we have available: Use the Temperature field on the right column of the chat interface, and set Temperature to zero. What do you observe when you retry the prompt?"}),"\n",(0,a.jsx)(t.p,{children:'The Temperature parameter controls how "creative" the model is allowed to be. At low values of "Temperature", the model is very likely to respond with the completion with the highest weight, limiting the variability in the responses. At higher values of Temperature, low-weighted completions become more likely to be generated, allowing for more creative (but less precise) responses.'}),"\n",(0,a.jsx)(t.p,{children:"Here is another prompt to try with different Temperature values:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What is a unique and long name for a new bike brand?\n"})}),"\n",(0,a.jsxs)(t.blockquote,{children:["\n",(0,a.jsx)(t.p,{children:"Note: When dealing with LLMs, the results can be unpredictable. Changing the temperature here might or might not work as expected. Also, we are using a relatively old version of GPT3.5. The temperature effect is more visible in more recent LLMs such as GPT4."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"Make sure the Temperature parameter is reset to 0.7 before you continue."})}),"\n",(0,a.jsx)(t.h2,{id:"information-extraction",children:"Information extraction"}),"\n",(0,a.jsx)(t.p,{children:"The example below shows how you can combine a prompt with data to extract information using natural-language instructions. In this case, the completion extracts the bicycle model, company name, and country. Modify the prompt and the source data to extract different information."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Extract the bicycle model, company name, country from the text below.\n\nSpecialized Tarmac, produced by Specialized Bicycle Components, an American company based in Morgan Hill, California. First introduced in 2003, the Tarmac has become renowned for its performance and innovation in the competitive cycling world. The bike features a lightweight carbon fiber frame, advanced aerodynamics, and cutting-edge engineering designed to enhance speed and handling. Over the years, the Tarmac has undergone numerous updates and refinements, consistently earning accolades for its performance in professional racing, including several victories in prestigious events like the Tour de France. The Specialized Tarmac remains a top choice for serious road cyclists and professional racers globally.\n"})}),"\n",(0,a.jsx)(t.h2,{id:"structured-data-extraction",children:"Structured data extraction"}),"\n",(0,a.jsx)(t.p,{children:"In this example, we provide freeform narrative about different bicycle types and ask the model to create a markdown table and a JSON array summarizing the information."}),"\n",(0,a.jsx)(t.p,{children:'In this example, we "primed" the model with the desired output format: a header row, and a couple of examples.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Road bikes, known for their speed and efficiency on paved roads, are crafted by Italian companies like Bianchi, Pinarello, and Colnago, as well as American brands such as Trek, Specialized, and Cannondale. Mountain bikes, built for rough terrain, are produced by American firms like Specialized and Santa Cruz, Canadian brands Rocky Mountain and Norco, and German companies Canyon and Cube. Hybrid bikes, versatile for commuting and leisure, are made by American brands like Trek and Cannondale, UK companies Boardman and Raleigh, and German manufacturers Cube and Canyon. Gravel bikes, suited for mixed terrain, are crafted by American brands like Trek and Cannondale, UK companies Ribble and Genesis, and German manufacturers Canyon and Cube. Cyclocross bikes, designed for cyclocross racing, are produced by American brands Trek and Cannondale, Belgian company Ridley, and French brand Look. BMX bikes, small and robust for stunts and racing, are made by American companies Haro and Mongoose, UK brand WeThePeople, and Australian company Colony.\n\nPlease create a table summarizing the bikes in a markdown table shown as code. The header row should include the columns: Type, Company, Country.\n"})}),"\n",(0,a.jsx)(t.p,{children:"Try extending the prompt by appending the following text:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"Please also make a JSON array summarizing the bikes:\n"})}),"\n",(0,a.jsx)(t.p,{children:"The model will now return a JSON array of the bikes and their attributes."}),"\n",(0,a.jsx)(t.h2,{id:"text-classification",children:"Text Classification"}),"\n",(0,a.jsx)(t.p,{children:"In this example, we provide one example of a text classification task: classifying a piece of text as a good or bad review of a bike."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"\nClassify the following text as a good or bad review of a bike:\n\n\"The Contoso 1482 is a fantastic bike. It's incredibly fast and responsive, with a lightweight frame that makes climbing hills a breeze. The bike is also very comfortable, even on long rides. I've been riding the Tarmac for a few months now, and I couldn't be happier with it.\"\nCategory: Good review\n\n\"The Contoso 1482 is a terrible bike. It's slow and unresponsive, with a heavy frame that makes climbing hills a nightmare.\"\n"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"\"The Contoso 1482 met all my expectations. It's a great bike for the price, and I've had a lot of fun riding it.\"\n\n"})}),"\n",(0,a.jsx)(t.h2,{id:"text-summarization",children:"Text summarization"}),"\n",(0,a.jsx)(t.p,{children:'Text summarization is a well known capability of ChatGPT - it creates a short summary of a larger piece of text. Add tl;dr (for "too long; didn\'t read") to gain a summary of the article below.'}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"\nContoso Bike was found in 1999 by John Doe. The company has grown to become one of the leading bike manufacturers in the world. The company is known for its innovative designs and high-quality products.\nThe company uses eco-friendly materials and manufacturing processes to reduce its carbon footprint. Contoso Bike is also involved in various community projects and charities to give back to the community.\n\nAt Contoso Bikes, we're committed to providing the best cycling experience for our customers. Our bikes are designed with the latest technology and materials to ensure optimal performance and comfort. Whether you're a professional racer or a casual rider, we have the perfect bike for you. Our team of experts is dedicated to helping you find the right bike for your needs and budget. We also offer a wide range of accessories and gear to enhance your cycling experience. Visit us today to see our latest models and take a test ride. We look forward to helping you find the perfect bike for your cycling adventures.\n\n"})}),"\n",(0,a.jsx)(t.h2,{id:"conversation-history",children:"Conversation History"}),"\n",(0,a.jsx)(t.p,{children:"Natural language generative AI models like GPT-3.5 are stateless, meaning they don't have memory of prior interactions. This means that each prompt is treated as a standalone request, and the model doesn't have context from previous prompts. This can lead to inconsistent or unexpected responses, especially in a conversational context."}),"\n",(0,a.jsx)(t.p,{children:"Try the following prompts:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What is the model of the bicycle I bought last year?\n"})}),"\n",(0,a.jsx)(t.p,{children:"You will get a response like this:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Response from the model:"',children:"I\u2019m sorry, but I don\u2019t have access to specific customer purchase history or personal data.\n"})}),"\n",(0,a.jsx)(t.p,{children:"Now, clear the chat and try the following prompt:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"I bought the Contoso 1482 last year. It's a great bike.\n"})}),"\n",(0,a.jsx)(t.p,{children:"And then continue with the following prompts:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What is the model of the bicycle I bought last year?\n"})}),"\n",(0,a.jsx)(t.p,{children:"What do you observe? You will now see that the model is able to respond with the model of the bike you mentioned in the previous prompt. This is because the application is sending all the previous chat history to the model as part of the prompt."}),"\n",(0,a.jsx)(t.h2,{id:"less-useful-prompts",children:"Less-useful prompts"}),"\n",(0,a.jsx)(t.p,{children:"Natural language generative AI models have a number of limitations:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"They are limited by their training data, which was frozen at a fixed point in time in the past."}),"\n",(0,a.jsx)(t.li,{children:"They generate text that resembles human language, but are not capable of reasoning or cognition."}),"\n",(0,a.jsx)(t.li,{children:"They have no memory of prior prompts (if chat is cleared), and no capability to learn or change their behavior."}),"\n"]}),"\n",(0,a.jsx)(t.p,{children:"Here are some example prompts that demonstrate these weaknesses:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Where did the last Olympics take place?\n"})}),"\n",(0,a.jsx)(t.p,{children:"In this case, the model is limited by training data, which is current only up to June 2021."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What is the square root of 98765?\n"})}),"\n",(0,a.jsx)(t.p,{children:"The model will generate an answer to math questions, but there's no guarantee it will be correct. The correct answer here (to 3 dp) is 314.269. Try clearing the Chat and then submitting the same prompt again and see if you get the same answer. (If you do get the correct response to a math question from a foundational GPT model, it's only because the question and answer are well represented in the training data.)"}),"\n",(0,a.jsx)(t.p,{children:"But you could ask the model to write Python code to calculate the square root of 98765, and it would probably do a good job. (Try it!)."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Write Python code to calculate the square root of 98765\n"})}),"\n",(0,a.jsx)(t.h2,{id:"generative-ai-models-cant-perform-actions",children:"Generative AI models can't perform actions"}),"\n",(0,a.jsx)(t.p,{children:"Clear the contents of the chat box. Enter the following text:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"What are the 5 stocks listed on https://finance.yahoo.com/trending-tickers with the largest market cap?\n"})}),"\n",(0,a.jsx)(t.p,{children:"Although the model will respond with a plausible answer, look closely: those aren't actually the 5 largest stocks today. Foundational AI models are not capable of performing actions, so they can't actually visit the web page and read the list of stocks. Instead, they generate a plausible response based on the prompt and the training data."}),"\n",(0,a.jsx)(t.h2,{id:"completions-are-not-facts",children:"Completions are not facts"}),"\n",(0,a.jsx)(t.p,{children:"Clear the contents of the prompt box. Enter the following text, then click Generate."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-text",metastring:'title="Enter in the user prompt:"',children:"Write a short summary of the famous cyclist, Harold Bloomsbury. Please include references.\n"})}),"\n",(0,a.jsx)(t.p,{children:"There has never been a cyclist (nor indeed any person, according to web search) named Harold Bloomsbury. As a result, the model will generate a fictional summary of a fictional person.\nAs we've seen, natural language Generative AI models can produce unexpected or unwanted responses to prompts. This can be caused by any number of factors, including:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Insufficient information in the training data"}),"\n",(0,a.jsx)(t.li,{children:"Insufficient context in the prompt"}),"\n",(0,a.jsx)(t.li,{children:"Lack of capability of the model itself"}),"\n",(0,a.jsx)(t.li,{children:'Hostile intent by the user providing the prompt ("jailbreaking")'}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["Prompt Engineering is a complex and rapidly-evolving practice. ",(0,a.jsx)(t.a,{href:"https://learn.microsoft.com/azure/cognitive-services/openai/concepts/advanced-prompt-engineering",children:"This article"})," on Microsoft Learn provides the latest guidance."]}),"\n",(0,a.jsx)(t.p,{children:"In the next labs we are going to learn how to steer the models to create the response we want."}),"\n",(0,a.jsx)(t.admonition,{title:"Hackathon Challenge",type:"info",children:(0,a.jsx)(t.p,{children:"TODO: Add a hackathon challenge here"})})]})}function h(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>s,M:()=>o});var a=n(1504);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);