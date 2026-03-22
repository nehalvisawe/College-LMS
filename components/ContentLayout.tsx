import React from 'react';

interface CardItem {
  id: string | number;
  title: string;
  description: string;
  footer?: string;
  tag?: string; // Optional tag for things like "New" or "Required"
}

interface ContentSectionProps {
  heading: string;
  paragraph: string;
  cards: CardItem[];
}

const ContentSection: React.FC<ContentSectionProps> = ({ 
  heading, 
  paragraph, 
  cards 
}) => {
  return (
    <section className="py-8 space-y-8">
      {/* 1. Heading & 2. Paragraph */}
      <div className="max-w-3xl">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl tracking-tight">
          {heading}
        </h2>
        <p className="mt-3 text-base text-gray-600 leading-relaxed">
          {paragraph}
        </p>
      </div>

      {/* 3. Cards with Grid Layout */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {cards.map((card) => (
          <div 
            key={card.id} 
            className="group flex flex-col bg-white border border-gray-200 rounded-xl p-5 hover:border-blue-500 hover:shadow-md transition-all duration-200 cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {card.title}
              </h3>
              {card.tag && (
                <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100">
                  {card.tag}
                </span>
              )}
            </div>
            
            <p className="text-sm text-gray-500 line-clamp-3 flex-1">
              {card.description}
            </p>

            {card.footer && (
              <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between text-xs font-medium text-gray-400">
                <span>{card.footer}</span>
                <span className="text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  View Details →
                </span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentSection;