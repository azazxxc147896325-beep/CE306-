import React from 'react';
import Navbar from './Component/Navbar';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <Navbar />
            
            <main className="flex-grow p-8">
                <div className="shadow rounded-lg p-8 mb-8">
                    <h1 className="text-3xl font-bold mb-4 text-black">เนื้อหาหลักของหน้าเว็บ</h1>
                    <p className='text-black'>
                        นี่คือส่วนเนื้อหาของหน้าเว็บที่อยู่ใต้ Navigation Bar ลองปรับขนาดหน้าจอเพื่อดูการทำงานของ Responsive Navbar
                    </p>
                </div>
            </main>
        </div>
    );
};

export default App;