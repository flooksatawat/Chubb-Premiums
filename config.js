const INSURANCE_CONFIG = {
    "CI Extra Plus": {
        abbr: "CX", desc: "ออมเงิน : ชดเชยโรคร้าย+วงเงินพิเศษ", icon: "fas fa-shield-heart", color: "text-rose-500", bg: "bg-rose-100",
        uiMode: "POPUP", defaultSum: 1000000, actionBtnText: "ดูรายละเอียด",
        planOptions: ["10CX", "20CX"]
    },
    "Life Protector 20": {
        abbr: "LPB", desc: "เปลี่ยนทุนประกัน เป็นบำนาญ", icon: "fas fa-piggy-bank", color: "text-emerald-500", bg: "bg-emerald-100",
        uiMode: "TABLE", defaultSum: 1000000, actionBtnText: "ตารางมูลค่า",
        planOptions: [] 
    },
    "Supreme Life Protector": {
        abbr: "SLPA", desc: "เปลี่ยนทุนประกัน เป็นบำนาญ", icon: "fas fa-piggy-bank", color: "text-emerald-500", bg: "bg-emerald-100",
        uiMode: "TABLE", defaultSum: 1000000, actionBtnText: "ตารางมูลค่า",
        planOptions: [] 
    },
    "Signature Legacy": {
        abbr: "SLB", desc: "แผนมรดก ลูกค้ามูลค่าสูง", icon: "fas fa-crown", color: "text-amber-500", bg: "bg-amber-100",
        uiMode: "TABLE", defaultSum: 5000000, actionBtnText: "ตารางมูลค่า",
        planOptions: ["5SLB", "10SLB"]
    },
    "Convertable Term": {
        abbr: "TLA", desc: "จองสิทธิ เปลี่ยนแบบประกันได้", icon: "fas fa-umbrella", color: "text-blue-500", bg: "bg-blue-100",
        uiMode: "POPUP", defaultSum: 1000000, actionBtnText: "ดูรายละเอียด",
        planOptions: [] 
    },
    "Century Life + TPD": {
        abbr: "CLA", desc: "แผนมรดก 100 ปี + TPD", icon: "fas fa-gem", color: "text-amber-500", bg: "bg-amber-100",
        uiMode: "POPUP", defaultSum: 1000000, actionBtnText: "ดูรายละเอียด",
        planOptions: ["10CL", "20CL", "60CL", "90CL"]
    },
    "3D Health Excellence": {
        abbr: "3D", desc: "ประกันสุขภาพ ที่เข้าใจทุกช่วงชีวิต", icon: "fas fa-hand-holding-medical", color: "text-teal-500", bg: "bg-teal-100",
        uiMode: "POPUP_3D", defaultSum: 1000000, actionBtnText: "ดูรายละเอียด",
        planOptions: ["10CL", "20CL", "60CL", "90CL"] 
    },
    "Whole Life Extra": {
        abbr: "WXN", desc: "สินทรัพย์กระแสเงินสด", icon: "fas fa-money-bill-trend-up", color: "text-indigo-500", bg: "bg-indigo-100",
        uiMode: "TABLE_CASHFLOW", defaultSum: 1000000, actionBtnText: "ตารางมูลค่า",
        planOptions: ["WXN10", "WXN15"]
    },
    "24 TX": {
        abbr: "TX", desc: "สินทรัพย์กระแสเงินสด", icon: "fas fa-money-bill-trend-up", color: "text-indigo-500", bg: "bg-indigo-100",
        uiMode: "TABLE_CASHFLOW", defaultSum: 1000000, actionBtnText: "ตารางมูลค่า",
        planOptions: [] 
    },
    "868 / 818 Elite Saving": {
        abbr: "Elite", desc: "สินทรัพย์กระแสเงินสด", icon: "fas fa-money-bill-trend-up", color: "text-indigo-500", bg: "bg-indigo-100",
        uiMode: "TABLE_CASHFLOW", defaultSum: 1000000, actionBtnText: "ตารางมูลค่า",
        planOptions: [] 
    }
};

const BASE_RATES = {};
const CV_RATES = {};
const COM_RATES = {};
