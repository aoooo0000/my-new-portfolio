'use client';

import { useEffect, useState } from 'react';
import { supabase } from '@/utils/supabase/client';

type Holding = {
  id: string;
  stock_name: string;
  quantity: number;
  buy_price: number;
  buy_date: string;
};

export default function HoldingList() {
  const [holdings, setHoldings] = useState<Holding[]>([]);

  useEffect(() => {
    async function fetchHoldings() {
      const { data, error } = await supabase.from('holdings').select('*').order('buy_date', { ascending: false });

      if (error) {
        alert('載入資料失敗：' + error.message);
      } else {
        setHoldings(data as Holding[]);
      }
    }

    fetchHoldings();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">持股列表</h2>
      <table className="w-full text-left table-auto">
        <thead>
          <tr>
            <th className="border px-4 py-2">股票名稱</th>
            <th className="border px-4 py-2">數量</th>
            <th className="border px-4 py-2">買入價格</th>
            <th className="border px-4 py-2">買入日期</th>
          </tr>
        </thead>
        <tbody>
          {holdings.map((holding) => (
            <tr key={holding.id}>
              <td className="border px-4 py-2">{holding.stock_name}</td>
              <td className="border px-4 py-2">{holding.quantity}</td>
              <td className="border px-4 py-2">{holding.buy_price}</td>
              <td className="border px-4 py-2">{holding.buy_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
