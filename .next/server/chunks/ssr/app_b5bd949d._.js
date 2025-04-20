module.exports = {

"[project]/app/blog/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Blog)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
const scholarshipData = {
    bachelor: {
        title: "Bachelor",
        description: "Russia has adopted the Bologna Process, which is a three-cycle educational system consisting of an undergraduate degree (4 years) and a master's degree (2 years). During their bachelor's degree, students gain a broad understanding of their chosen specialty...",
        fullDescription: "Russia has adopted the Bologna Process, which is a three-cycle educational system consisting of an undergraduate degree (4 years) and a master's degree (2 years). During their bachelor's degree, students gain a broad understanding of their chosen specialty, with the opportunity to explore various areas of interest. Graduates with a bachelor's degree can immediately begin working in their chosen profession, or they can continue their studies at the next level. Additionally, some universities still offer specialist programs, a level that only exists in Russia. Specialist programs provide a more focused education over 5–6 years that emphasizes practical skills.",
        imageUrl: "https://readymadeui.com/cardImg.webp"
    },
    master: {
        title: "Master",
        description: "The master's degree is the second stage of higher education in the Bologna Process. To be admitted into a master's program, applicants must have a bachelor's or specialist's degree. These programs are generally more research-oriented...",
        fullDescription: "The master's degree is the second stage of higher education in the Bologna Process. To be admitted into a master's program, applicants must have a bachelor's or specialist's degree. These programs are generally more research-oriented, providing students with an in-depth understanding of their chosen subject. Master's programs usually last two years and focus mainly on the student's ability to independently grasp the material.",
        imageUrl: "https://readymadeui.com/prediction.webp"
    },
    doctor: {
        title: "Doctoral",
        description: "Doctoral programs are mainly for training research and teaching personnel. To be admitted into a postgraduate program, applicants must have a master's or specialist's degree. These programs include educational aspects, pedagogical and practical work...",
        fullDescription: "Doctoral programs are mainly for training research and teaching personnel. To be admitted into a postgraduate program, applicants must have a master's or specialist's degree. These programs include educational aspects, pedagogical and practical work, and research. Graduate students must choose a scientific area and research topic for their dissertation. In-person, full-time programs are at least 3 years, while part-time programs are at least 4. At the end of the program, successful candidates receive a postgraduate diploma with a qualification ('Researcher', 'Research Teacher').",
        imageUrl: "https://readymadeui.com/team-image.webp"
    }
};
function Blog() {
    const [expanded, setExpanded] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const toggleDescription = (key)=>{
        setExpanded(expanded === key ? null : key);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-gray-100 px-4 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-5xl max-lg:max-w-3xl max-sm:max-w-sm mx-auto justify-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-bold text-slate-900 mb-8 text-center",
                    children: "SCHOLARSHIP"
                }, void 0, false, {
                    fileName: "[project]/app/blog/page.tsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-sm:gap-8",
                    children: Object.keys(scholarshipData).map((key)=>{
                        const scholarshipKey = key;
                        const { title, description, fullDescription, imageUrl } = scholarshipData[scholarshipKey];
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded overflow-hidden shadow-md",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imageUrl,
                                    alt: `Blog Post ${title}`,
                                    className: "w-full h-52 object-cover"
                                }, void 0, false, {
                                    fileName: "[project]/app/blog/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "text-2xl text-justify font-semibold text-slate-900 mb-3",
                                            children: title
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/page.tsx",
                                            lineNumber: 62,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-slate-600 text-sm leading-relaxed",
                                            children: expanded === scholarshipKey ? fullDescription : description
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/page.tsx",
                                            lineNumber: 65,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>toggleDescription(scholarshipKey),
                                            className: "mt-6 inline-block px-4 py-2 rounded tracking-wider bg-orange-500 hover:bg-orange-600 text-white text-[13px] font-medium",
                                            children: expanded === scholarshipKey ? "Show Less" : "Read More"
                                        }, void 0, false, {
                                            fileName: "[project]/app/blog/page.tsx",
                                            lineNumber: 70,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/blog/page.tsx",
                                    lineNumber: 61,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, key, true, {
                            fileName: "[project]/app/blog/page.tsx",
                            lineNumber: 52,
                            columnNumber: 15
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/app/blog/page.tsx",
                    lineNumber: 46,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/blog/page.tsx",
            lineNumber: 42,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/blog/page.tsx",
        lineNumber: 41,
        columnNumber: 5
    }, this);
}
}}),
"[project]/app/tag/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Tag)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
"use client";
;
;
;
const faqs = [
    {
        question: "Do I need to speak Russian to study in Russia?",
        answer: "While many programs are offered in Russian, there are also a growing number of English-taught programs, especially at the Master's and PhD levels. It's helpful to learn some Russian for daily life."
    },
    {
        question: "Are there scholarships available for international students?",
        answer: "Yes! Russia offers government-funded scholarships (like the Open Doors program) that cover tuition, accommodation, and sometimes a monthly stipend."
    },
    {
        question: "What are the admission requirements for international students?",
        answer: "Admission requirements vary by university and program. Typically, you'll need academic transcripts, a passport copy, and sometimes a language proficiency certificate."
    },
    {
        question: "Can I work while studying in Russia?",
        answer: "Yes, international students can work part-time while studying, but you'll need to obtain a work permit unless the job is at the university."
    },
    {
        question: "Is a Russian degree recognized internationally?",
        answer: "Yes, degrees from many Russian universities are internationally recognized, especially those listed in global university rankings."
    },
    {
        question: "How much does it cost to study in Russia?",
        answer: "Tuition fees vary by university and program, but on average, they range from $1,500 to $6,000 per year. Living costs are also relatively affordable."
    },
    {
        question: "Do universities in Russia provide accommodation?",
        answer: "Yes, most universities offer dormitories or student housing, often at subsidized rates. You can also choose private accommodation."
    }
];
function Tag() {
    const [activeIndex, setActiveIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const contentRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const toggleAccordion = (index)=>{
        setActiveIndex(index === activeIndex ? null : index);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        contentRefs.current.forEach((ref, idx)=>{
            if (ref) {
                ref.style.maxHeight = idx === activeIndex ? `${ref.scrollHeight}px` : "0px";
            }
        });
    }, [
        activeIndex
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: " bg-gray-100 px-4 py-12 ",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-3xl font-bold text-slate-900 mb-8  text-center",
                children: "Frequently asked questions"
            }, void 0, false, {
                fileName: "[project]/app/tag/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-2xl mx-auto mt-8 divide-y-5 divide-gray-500",
                children: faqs.map((faq, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `${index !== faqs.length - 1 ? "border-b border-gray-200" : ""}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>toggleAccordion(index),
                                className: "flex justify-between items-center w-full py-4 text-left font-medium text-gray-900 focus:outline-none",
                                children: [
                                    faq.question,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                        className: `w-5 h-5 transform transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`
                                    }, void 0, false, {
                                        fileName: "[project]/app/tag/page.tsx",
                                        lineNumber: 79,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/tag/page.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                ref: (el)=>contentRefs.current[index] = el,
                                className: "overflow-hidden transition-all duration-300 text-gray-600",
                                style: {
                                    maxHeight: "0px"
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "pb-4",
                                    children: faq.answer
                                }, void 0, false, {
                                    fileName: "[project]/app/tag/page.tsx",
                                    lineNumber: 90,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/tag/page.tsx",
                                lineNumber: 85,
                                columnNumber: 13
                            }, this)
                        ]
                    }, index, true, {
                        fileName: "[project]/app/tag/page.tsx",
                        lineNumber: 68,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/tag/page.tsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/tag/page.tsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=app_b5bd949d._.js.map