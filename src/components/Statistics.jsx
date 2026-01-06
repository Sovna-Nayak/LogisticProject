import React from 'react';
import { Users, Package, ShoppingBag } from 'lucide-react';

const Statistics = () => {
  const stats = [
    {
      icon: Users,
      value: '5000',
      label: 'Trusted Clients',
      suffix: 'K+'
    },
    {
      icon: Package,
      value: '10000',
      label: 'Orders Delivered',
      suffix: 'K+'
    },
    {
      icon: ShoppingBag,
      value: '50000',
      label: 'Sellers',
      suffix: '+'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-emerald-500 to-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          
        Shopy Courier Superiority
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-white/20 rounded-full flex items-center justify-center">
                  <Icon className="w-10 h-10" />
                </div>
                <div className="text-5xl font-bold mb-2">
                  {stat.value.slice(0, -3)}{stat.suffix}
                </div>
                <div className="text-xl font-medium opacity-90">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;