import React from 'react';
import ProductCard from './Component/PostCard';
import './App.css';

const products = [
  {
    id: 1,
    imageUrl: 'https://i.pinimg.com/736x/04/32/4b/04324b404e3e68b71e91e3518836dcd5.jpg',
    title: 'Samsung Galaxy S24 Ultra',
    description: 'สมาร์ทโฟนเรือธง มาพร้อมกล้องระดับโปรและชิปเซ็ตทรงพลัง',
    price: 1199,
  },
  {
    id: 2,
    imageUrl: 'https://i.pinimg.com/1200x/bb/97/be/bb97be9f00af7edcc86bcec219f10d9c.jpg',
    title: 'Apple MacBook Air M3',
    description: 'แล็ปท็อปสุดบางเบา ชิป M3 รองรับการทำงานและความบันเทิงได้ลื่นไหล',
    price: 1299,
  },
  {
    id: 3,
    imageUrl: 'https://i.pinimg.com/736x/6f/18/45/6f1845b07eef6c5da648ebb433708524.jpg',
    title: 'Apple Watch Ultra 2',
    description: 'สมาร์ทวอทช์ที่แข็งแกร่ง เหมาะสำหรับนักกีฬาและสายลุย',
    price: 799,
  },
  {
    id: 4,
    imageUrl: 'https://i.pinimg.com/1200x/6e/5b/94/6e5b945e616a0784a8dcf0144cf4fed9.jpg',
    title: 'Sony WH-1000XM5',
    description: 'หูฟังตัดเสียงรบกวนคุณภาพสูง เสียงใส คมชัด',
    price: 399,
  },
  {
    id: 5,
    imageUrl: 'https://i.pinimg.com/1200x/3b/46/a3/3b46a30f2b0a684c15918715827fadd2.jpg',
    title: 'Nintendo Switch OLED',
    description: 'คอนโซลเกมพกพา หน้าจอ OLED สีสดใส เล่นได้ทุกที่ทุกเวลา',
    price: 349,
  },
];

const App: React.FC = () => {
  const handleAddToCart = (title: string) => {
    alert(`เพิ่ม "${title}" เข้าตะกร้าแล้ว!`);
  };

  return (
        <div className='bg-gray-200 min-h-screen py-8'>
          <div className="bg-gray-300 rounded-xl shadow-lg p-6 container mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 text-center mb-8">
              รายการสินค้าของเรา
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
        {products.map((product) => (
        <ProductCard
            key={product.id}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            onAddToCart={() => handleAddToCart(product.title)}
          />
        ))}
        </div>
      </div>
    </div>
  );
};

export default App;
