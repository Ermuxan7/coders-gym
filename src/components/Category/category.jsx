import { useState } from "react"
import { ProductData } from "../../mockData/data"

const Category = () => {
    const [activeTab, setActiveTab] = useState('All')

    const tabs = ['All', 'Yoga', 'Fitness', 'Muscles']

    const filteredCards = activeTab === 'All' ? ProductData : ProductData.filter((card) => card.category === activeTab)
    
    return (
        <div className="mx-40 my-20">
            <div className="flex items-center gap-4">
                {tabs.map((tab) =>(
                    <button key={tab} onClick={() =>setActiveTab(tab)} className={`px-3 py-1 rounded ${activeTab === tab ? "bg-orange-500 text-white " : "bg-gray-300 text-black" }`}>
                        {tab}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8  ">
                {filteredCards.map((card) =>(
                    <div className="bg-slate-300 p-4 rounded-lg text-black">
                        <img src={card.image} alt="category-img" className="w-full h-60 rounded-md object-cover" />
                        <h2 className="my-2 text-xl font-bold">{card.title}</h2>
                        <p>{card.category}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Category