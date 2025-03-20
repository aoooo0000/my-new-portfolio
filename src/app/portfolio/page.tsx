'use client';

import AddHoldingForm from './components/AddHoldingForm';
import HoldingList from './components/HoldingList';
import PortfolioPieChart from './components/PortfolioPieChart';

export default function PortfolioPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">我的投資組合 📈</h1>

      <div className="bg-gray-100 p-4 rounded-lg shadow-sm mb-4">
        這裡會顯示股票、ETF持股
      </div>

      <AddHoldingForm />
      <HoldingList />
      <PortfolioPieChart />
    </div>
  );
}
