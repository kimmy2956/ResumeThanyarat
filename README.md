# Resume Website


เว็บไซต์แนะนำตัว (Resume) สร้างด้วย Next.js + Tailwind CSS


## 🚀 วิธีรันในเครื่อง
```bash
npm install
npm run dev
```
เปิดที่ http://localhost:3000


## 🌐 Deploy บน Vercel
1. สร้าง repo ใหม่บน GitHub แล้ว push โปรเจกต์นี้
2. ไปที่ https://vercel.com → Import Project → เลือก repo → Deploy


Vercel จะตรวจจับว่าเป็น Next.js อัตโนมัติ


## ✏️ ปรับแต่ง
- แก้ชื่อ/ข้อมูลส่วนตัวใน `app/page.js`
- ใส่รูปจริงที่ `public/profile.jpg`
- เพิ่มไฟล์ `resume.pdf` ใน `public/` เพื่อให้ดาวน์โหลดได้
```
