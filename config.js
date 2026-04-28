// ==========================================
// CHUBB INSURANCE CONFIGURATION DATABASE
// ==========================================

const INSURANCE_CONFIG = {
    "CI Extra Plus": {
        abbr: "CX", 
        desc: "ออมเงิน : ชดเชยโรคร้าย+วงเงินพิเศษ", 
        icon: "fas fa-shield-heart", color: "text-rose-500", bg: "bg-rose-100",
        uiMode: "POPUP", // เปิดป๊อปอัป
        defaultSum: 1000000, 
        actionBtnText: "ดูรายละเอียด",
        planOptions: ['10CX', '20CX'], 
        hideBottomActions: false
    },
    "Life Protector 20": {
        abbr: "LPB", 
        desc: "เปลี่ยนทุนประกัน เป็นบำนาญ", 
        icon: "fas fa-piggy-bank", color: "text-emerald-500", bg: "bg-emerald-100",
        uiMode: "TABLE", // ไปหน้าตาราง
        defaultSum: 1000000, 
        actionBtnText: "ตารางมูลค่า",
        planOptions: ['20LPB'], 
        hideBottomActions: true // ซ่อนปุ่มกรอบแดง
    },
    "Supreme Life Protector": {
        abbr: "SLPA", 
        desc: "เปลี่ยนทุนประกัน เป็นบำนาญ", 
        icon: "fas fa-piggy-bank", color: "text-emerald-500", bg: "bg-emerald-100",
        uiMode: "TABLE", 
        defaultSum: 1000000, 
        actionBtnText: "ตารางมูลค่า",
        planOptions: ['20SLPA'], 
        hideBottomActions: true // ซ่อนปุ่มกรอบแดง
    },
    "Signature Legacy": {
        abbr: "SLB", 
        desc: "แผนมรดก ลูกค้ามูลค่าสูง", 
        icon: "fas fa-crown", color: "text-amber-500", bg: "bg-amber-100",
        uiMode: "TABLE", 
        defaultSum: 5000000, // ทุนเริ่มต้น 5 ล้าน
        actionBtnText: "ตารางมูลค่า",
        planOptions: ['5SLB', '10SLB'], // มี 5SLB และ 10SLB
        hideBottomActions: false
    },
    "Convertable Term": {
        abbr: "TLA", 
        desc: "จองสิทธิ เปลี่ยนแบบประกันได้", 
        icon: "fas fa-umbrella", color: "text-blue-500", bg: "bg-blue-100",
        uiMode: "POPUP", 
        defaultSum: 1000000, 
        actionBtnText: "ดูรายละเอียด",
        planOptions: ['10TLA', '20TLA'], 
        hideBottomActions: false
    },
    "Century Life + TPD": {
        abbr: "CLA", 
        desc: "แผนมรดก 100 ปี + TPD", 
        icon: "fas fa-gem", color: "text-amber-500", bg: "bg-amber-100",
        uiMode: "POPUP", 
        defaultSum: 1000000, 
        actionBtnText: "ดูรายละเอียด",
        planOptions: ['10CL', '20CL', '60CL', '90CL'], // มี 4 ตัวเลือก
        hideBottomActions: false
    },
    "3D Health Excellence": {
        abbr: "3D", 
        desc: "ประกันสุขภาพ ที่เข้าใจทุกช่วงชีวิต", 
        icon: "fas fa-hand-holding-medical", color: "text-teal-500", bg: "bg-teal-100",
        uiMode: "POPUP_3D", 
        defaultSum: 1000000, 
        actionBtnText: "ดูรายละเอียด",
        planOptions: ['10CL', '20CL', '60CL', '90CL'], // ใช้ CL เป็นสัญญาหลัก
        hideBottomActions: false
    },
    "Whole Life Extra": {
        abbr: "WXN", 
        desc: "สินทรัพย์กระแสเงินสด", 
        icon: "fas fa-money-bill-trend-up", color: "text-indigo-500", bg: "bg-indigo-100",
        uiMode: "TABLE_CASHFLOW", 
        defaultSum: 1000000, 
        actionBtnText: "ตารางมูลค่า",
        planOptions: ['WXN10', 'WXN15'], 
        hideBottomActions: false
    },
    "24 TX": {
        abbr: "TX", 
        desc: "สินทรัพย์กระแสเงินสด", 
        icon: "fas fa-money-bill-trend-up", color: "text-indigo-500", bg: "bg-indigo-100",
        uiMode: "TABLE_CASHFLOW", 
        defaultSum: 1000000, 
        actionBtnText: "ตารางมูลค่า",
        planOptions: ['12TXM', '24TXN'], 
        hideBottomActions: true // ซ่อนปุ่มกรอบแดง
    },
    "868 / 818 Elite Saving": {
        abbr: "Elite", 
        desc: "สินทรัพย์กระแสเงินสด", 
        icon: "fas fa-money-bill-trend-up", color: "text-indigo-500", bg: "bg-indigo-100",
        uiMode: "TABLE_CASHFLOW", 
        defaultSum: 1000000, 
        actionBtnText: "ตารางมูลค่า",
        planOptions: ['868', '818'], 
        hideBottomActions: true // ซ่อนปุ่มกรอบแดง
    }
};

// ==========================================
// RATES DATABASE (รอใส่ข้อมูล)
// ==========================================

const TPD_RATES = {
    "male": { 30: 1.5, 40: 2.0 }, // ตัวอย่าง รอใส่เรทจริง
    "female": { 30: 1.2, 40: 1.8 }
};

const BASE_RATES = {
    // โครงสร้างตัวอย่าง รอใส่ของจริง
};

const CV_RATES = {
    // โครงสร้างตัวอย่าง รอใส่ของจริง
};
