import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export interface AccordionItem {
  id: string;
  title: string;
  content: string;
  icon?: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  allowMultiple?: boolean;
  className?: string;
}

const Accordion: React.FC<AccordionProps> = ({ 
  items, 
  allowMultiple = true, 
  className = '' 
}) => {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const { isRTL } = useLanguage();

  const toggleItem = (itemId: string) => {
    const newExpandedItems = new Set(expandedItems);
    
    if (expandedItems.has(itemId)) {
      newExpandedItems.delete(itemId);
    } else {
      if (!allowMultiple) {
        newExpandedItems.clear();
      }
      newExpandedItems.add(itemId);
    }
    
    setExpandedItems(newExpandedItems);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {items.map((item) => {
        const isExpanded = expandedItems.has(item.id);
        
        return (
          <div 
            key={item.id}
            className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <button
              className={`w-full px-6 py-4 text-left bg-white hover:bg-gray-50 rounded-lg transition-colors duration-200 flex items-center justify-between ${
                isRTL ? 'text-right flex-row-reverse' : ''
              } ${isExpanded ? 'rounded-b-none' : ''}`}
              onClick={() => toggleItem(item.id)}
              aria-expanded={isExpanded}
              aria-controls={`accordion-content-${item.id}`}
            >
              <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                {item.icon && (
                  <div className="flex-shrink-0">
                    {item.icon}
                  </div>
                )}
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>
              </div>
              
              <div className="flex-shrink-0">
                {isExpanded ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </div>
            </button>
            
            <div
              id={`accordion-content-${item.id}`}
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4 pt-2 bg-gray-50 rounded-b-lg">
                <div className={`text-gray-700 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                  {item.content}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;