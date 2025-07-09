'use client'
import React from 'react';
import { ArrowDown, TrendingUp, Users, Award, Search, Link, Globe, PenTool } from 'lucide-react';


const KeywordRankings = () => {
    const keywordData = [
        { keyword: "Best Resorts in Telangana", march24: 20, march25: 5 },
        { keyword: "Best Resorts in Hyderabad", march24: 44, march25: 9 },
        { keyword: "Resorts in Hyderabad", march24: 20, march25: 10 },
        { keyword: "Day Outing Resorts in Hyderabad", march24: 15, march25: 2 },
        { keyword: "Day Resorts in Hyderabad", march24: 12, march25: 2 },
        { keyword: "Resort Stay in Hyderabad", march24: 23, march25: 8 },
        { keyword: "Corporate Outing Resort", march24: 64, march25: 4 },
        { keyword: "Family Resorts in Hyderabad", march24: 36, march25: 5 },
        { keyword: "Wedding Resort in Hyderabad", march24: "Not Ranking", march25: 2 },
        { keyword: "Best Resorts for Corporate Outing", march24: 80, march25: 5 }
    ];

    return (
        <section className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Keyword Ranking</h2>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b-2 border-gray-200">
                            <th className="text-left py-4 px-4 font-semibold text-gray-900">Keyword</th>
                            <th className="text-center py-4 px-4 font-semibold text-gray-900">Mar-24</th>
                            <th className="text-center py-4 px-4 font-semibold text-gray-900">Mar-25</th>
                        </tr>
                    </thead>
                    <tbody>
                        {keywordData.map((item, index) => (
                            <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                                <td className="py-4 px-4 font-medium text-gray-800">
                                    {item.keyword}
                                </td>
                                <td className="py-4 px-4 text-center">
                                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                                        item.march24 === "Not Ranking" 
                                            ? "bg-gray-100 text-gray-600" 
                                            : "bg-red-100 text-[#9a0c28]"
                                    }`}>
                                        {item.march24}
                                    </span>
                                </td>
                                <td className="py-4 px-4 text-center">
                                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-600">
                                        {item.march25}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}


export default KeywordRankings
