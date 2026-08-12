module.exports = [
"[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AdminAdmissionsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const statuses = [
    "pending",
    "contacted",
    "accepted",
    "rejected"
];
function DocumentCard({ label, url }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-xl border border-slate-200 bg-white p-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs font-semibold text-slate-400",
                children: label
            }, void 0, false, {
                fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                lineNumber: 22,
                columnNumber: 75
            }, this),
            url ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                href: url,
                target: "_blank",
                rel: "noreferrer",
                className: "mt-2 inline-block text-sm font-bold text-secondary hover:underline",
                children: "View / Download"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                lineNumber: 22,
                columnNumber: 145
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "mt-2 text-sm text-slate-400",
                children: "Not uploaded"
            }, void 0, false, {
                fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                lineNumber: 22,
                columnNumber: 293
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
function AdminAdmissionsClient() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [items, setItems] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pending, setPending] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [notificationEnabled, setNotificationEnabled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const knownIds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(new Set());
    const firstLoad = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(true);
    async function load() {
        try {
            const response = await fetch("/api/admin/admissions", {
                cache: "no-store"
            });
            if (response.status === 401) {
                router.replace("/admin/login");
                return;
            }
            const data = await response.json();
            if (!response.ok) throw new Error(data.error || "Could not load admissions.");
            const incoming = data.admissions || [];
            const newItems = incoming.filter((item)=>!knownIds.current.has(item.id));
            incoming.forEach((item)=>knownIds.current.add(item.id));
            setItems(incoming);
            setPending(Number(data.stats?.pending ?? incoming.filter((item)=>item.status === "pending").length));
            if (!firstLoad.current && newItems.length && "Notification" in window && Notification.permission === "granted") {
                for (const item of newItems)new Notification("New admission application 🎉", {
                    body: `Student: ${item.studentName}\nParent: ${item.parentName}\nClass: ${item.classToAdmit}\nPhone: ${item.parentPhone}`,
                    icon: "/logo.jpg"
                });
                document.title = `(${newItems.length}) New Admission • Ever Blooming`;
                setTimeout(()=>{
                    document.title = "Principal Admissions • Ever Blooming";
                }, 8000);
            }
            firstLoad.current = false;
            setError("");
        } catch (err) {
            setError(err instanceof Error ? err.message : "Could not load admissions.");
        } finally{
            setLoading(false);
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        load();
        const timer = window.setInterval(load, 5000);
        return ()=>window.clearInterval(timer);
    }, []);
    async function enableNotifications() {
        if (!("Notification" in window)) {
            setError("This browser does not support desktop notifications.");
            return;
        }
        const permission = await Notification.requestPermission();
        setNotificationEnabled(permission === "granted");
        if (permission === "granted") new Notification("Ever Blooming Admissions", {
            body: "New admission notifications are enabled.",
            icon: "/logo.jpg"
        });
    }
    async function updateStatus(id, status) {
        const response = await fetch("/api/admin/admissions", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                id,
                status
            })
        });
        const data = await response.json();
        if (!response.ok) {
            setError(data.error || "Could not update application.");
            return;
        }
        setItems((prev)=>prev.map((item)=>item.id === id ? data.admission : item));
        setPending(data.admission.status === "pending" ? items.filter((item)=>item.status === "pending").length + (items.find((item)=>item.id === id)?.status === "pending" ? 0 : 1) : Math.max(0, pending - (items.find((item)=>item.id === id)?.status === "pending" ? 1 : 0)));
    }
    async function logout() {
        await fetch("/api/auth/admin-logout", {
            method: "POST"
        });
        router.replace("/admin/login");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-warm-gray px-4 py-8 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "mb-8 rounded-3xl bg-primary p-7 text-white shadow-xl",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs font-bold uppercase tracking-[0.2em] text-accent",
                                        children: "Ever Blooming School"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                        lineNumber: 81,
                                        columnNumber: 171
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "mt-1 text-3xl font-extrabold",
                                        children: "Principal Admissions Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                        lineNumber: 81,
                                        columnNumber: 267
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2 max-w-2xl text-sm text-slate-300",
                                        children: "Private view of every admission application, including separately uploaded documents."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                        lineNumber: 81,
                                        columnNumber: 347
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                lineNumber: 81,
                                columnNumber: 166
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: enableNotifications,
                                        className: "rounded-xl bg-accent px-4 py-3 text-sm font-bold text-primary hover:bg-accent-light",
                                        children: notificationEnabled ? "✓ Desktop Notifications On" : "Enable Notifications"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                        lineNumber: 81,
                                        columnNumber: 533
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: logout,
                                        className: "rounded-xl border border-white/20 px-4 py-3 text-sm font-semibold text-white hover:bg-white/10",
                                        children: "Log out"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                        lineNumber: 81,
                                        columnNumber: 753
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                lineNumber: 81,
                                columnNumber: 495
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                        lineNumber: 81,
                        columnNumber: 82
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                    lineNumber: 81,
                    columnNumber: 9
                }, this),
                error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-5 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700",
                    children: error
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                    lineNumber: 82,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-7 grid gap-4 sm:grid-cols-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl bg-white p-5 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-wider text-slate-400",
                                    children: "Total Applications"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                    lineNumber: 83,
                                    columnNumber: 109
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-3xl font-extrabold text-primary",
                                    children: items.length
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                    lineNumber: 83,
                                    columnNumber: 208
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                            lineNumber: 83,
                            columnNumber: 57
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl bg-white p-5 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-wider text-slate-400",
                                    children: "Needs Attention"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                    lineNumber: 83,
                                    columnNumber: 341
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-3xl font-extrabold text-accent-dark",
                                    children: pending
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                    lineNumber: 83,
                                    columnNumber: 437
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                            lineNumber: 83,
                            columnNumber: 289
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl bg-white p-5 shadow-sm",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs font-semibold uppercase tracking-wider text-slate-400",
                                    children: "Last Checked"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                    lineNumber: 83,
                                    columnNumber: 569
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm font-bold text-primary",
                                    children: new Date().toLocaleTimeString()
                                }, void 0, false, {
                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                    lineNumber: 83,
                                    columnNumber: 662
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                            lineNumber: 83,
                            columnNumber: 517
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl bg-white p-12 text-center shadow-sm",
                    children: "Loading applications..."
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                    lineNumber: 84,
                    columnNumber: 20
                }, this) : items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-3xl bg-white p-12 text-center shadow-sm",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-5xl",
                            children: "📥"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                            lineNumber: 84,
                            columnNumber: 203
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "mt-4 text-xl font-bold text-primary",
                            children: "No applications yet"
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                            lineNumber: 84,
                            columnNumber: 237
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-1 text-sm text-slate-500",
                            children: "New applications will appear here automatically."
                        }, void 0, false, {
                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                            lineNumber: 84,
                            columnNumber: 313
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                    lineNumber: 84,
                    columnNumber: 138
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-5",
                    children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-col gap-3 border-b border-slate-100 pb-5 lg:flex-row lg:items-start lg:justify-between",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-wrap items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "rounded-full bg-primary/5 px-3 py-1 text-xs font-bold text-primary",
                                                            children: [
                                                                "APPLICATION #",
                                                                item.id
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 727
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `rounded-full px-3 py-1 text-xs font-bold capitalize ${item.status === "accepted" ? "bg-emerald-50 text-emerald-700" : item.status === "rejected" ? "bg-red-50 text-red-700" : item.status === "contacted" ? "bg-blue-50 text-blue-700" : "bg-amber-50 text-amber-700"}`,
                                                            children: item.status
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                            lineNumber: 84,
                                                            columnNumber: 841
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 676
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: "mt-3 text-2xl font-extrabold text-primary",
                                                    children: item.studentName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 1150
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm text-slate-500",
                                                    children: [
                                                        "Class ",
                                                        item.classToAdmit,
                                                        " • Submitted ",
                                                        new Date(item.createdAt).toLocaleString()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 1231
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                            lineNumber: 84,
                                            columnNumber: 671
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-wrap gap-2",
                                            children: statuses.map((status)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>updateStatus(item.id, status),
                                                    className: `rounded-lg px-3 py-2 text-xs font-bold capitalize ${item.status === status ? "bg-primary text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"}`,
                                                    children: status
                                                }, status, false, {
                                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 1424
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                            lineNumber: 84,
                                            columnNumber: 1360
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                    lineNumber: 84,
                                    columnNumber: 557
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl bg-warm-gray p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-400",
                                                    children: "Parent / Guardian"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 1797
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 font-semibold text-primary",
                                                    children: item.parentName
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 1856
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                            lineNumber: 84,
                                            columnNumber: 1752
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl bg-warm-gray p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-400",
                                                    children: "Phone"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 1975
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `tel:${item.parentPhone}`,
                                                    className: "mt-1 block font-semibold text-primary hover:underline",
                                                    children: item.parentPhone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 2022
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                            lineNumber: 84,
                                            columnNumber: 1930
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "rounded-xl bg-warm-gray p-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-xs text-slate-400",
                                                    children: "Class"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 2197
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 font-semibold text-primary",
                                                    children: item.classToAdmit
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 2244
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                            lineNumber: 84,
                                            columnNumber: 2152
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                    lineNumber: 84,
                                    columnNumber: 1689
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-5",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "mb-3 text-sm font-extrabold text-primary",
                                            children: "Submitted Documents"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                            lineNumber: 84,
                                            columnNumber: 2348
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid gap-3 md:grid-cols-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DocumentCard, {
                                                    label: "Aadhaar Card",
                                                    url: item.aadharDocument
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 2472
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DocumentCard, {
                                                    label: "Birth Certificate",
                                                    url: item.birthCertificate
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 2535
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DocumentCard, {
                                                    label: "Transfer Certificate (TC)",
                                                    url: item.transferCertificate
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 2605
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                            lineNumber: 84,
                                            columnNumber: 2429
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                                    lineNumber: 84,
                                    columnNumber: 2326
                                }, this)
                            ]
                        }, item.id, true, {
                            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                            lineNumber: 84,
                            columnNumber: 465
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
                    lineNumber: 84,
                    columnNumber: 417
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
            lineNumber: 80,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/admin/admissions/AdminAdmissionsClient.tsx",
        lineNumber: 79,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=src_app_admin_admissions_AdminAdmissionsClient_tsx_1028v7j._.js.map