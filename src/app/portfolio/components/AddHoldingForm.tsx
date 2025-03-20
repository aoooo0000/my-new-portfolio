'use client';

import { useState } from 'react';
import { supabase } from '@/utils/supabase/client';

export default function AddHoldingForm() {
  const [stockName, setStockName] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [buyPrice, setBuyPrice] = useState(0);
  const [buyDate, setBuyDate] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { error } = await supabase
      .from('holdings')
      .insert([
        { 
          stock_name: stockName,
          quantity,
          buy_price: buyPrice,
          buy_date: buyDate
        },
      ]);

    if (error) {
      alert('發生錯誤：' + error.message);
    } else {
      alert('持股新增成功！');
      setStockName('');
      setQuantity(0);
      setBuyPrice(0);
      setBuyDate('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded shadow-md space-y-4">
      <div>
        <label>股票名稱：</label>
        <input
          className="border p-2 rounded w-full"
          type="text"
          value={stockName}
          onChange={(e) => setStockName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>持股數量：</label>
        <input
          className="border p-2 rounded w-full"
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
          required
        />
      </div>

      <div>
        <label>買入價格：</label>
        <input
          className="border p-2 rounded w-full"
          type="number"
          step="0.01"
          value={buyPrice}
          onChange={(e) => setBuyPrice(parseFloat(e.target.value))}
          required
        />
      </div>

      <div>
        <label>買入日期：</label>
        <input
          className="border p-2 rounded w-full"
          type="date"
          value={buyDate}
          onChange={(e) => setBuyDate(e.target.value)}
          required
        />
      </div>

      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
        新增持股
      </button>
    </form>
  );
}
