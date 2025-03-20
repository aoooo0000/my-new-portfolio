'use client';

import { useEffect, useState } from 'react';
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import { supabase } from '@/utils/supabase/client';

type ChartData = {
  name: string;
  value: number;
};

export default function PortfolioPieChart() {
  const [data, setData] = useState<ChartData[]>([]);

  useEffect(() => {
    async function fetchData() {
      const { data, error } = await supabase.from('holdings').select('stock_name, quantity, buy_price');

      if (!error && data) {
        const formattedData = data.map(item => ({
          name: item.stock_name,
          value: item.quantity * item.buy_price
        }));
        setData(formattedData);
      }
    }

    fetchData();
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">資產配置比例</h2>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie data={data} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip formatter={(value) => `$${Number(value).toFixed(2)}`} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
