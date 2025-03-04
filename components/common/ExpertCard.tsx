// components/ExpertCard.tsx
import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type ExpertCardProps = {
  name: string;
  specialization: string;
  description: string;
  imageUrl: string;
};

const ExpertCard: React.FC<ExpertCardProps> = ({ name, specialization, description, imageUrl }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className={`flex flex-col bg-white rounded-xl shadow-lg p-6 text-primary-text w-full max-w-xs 
                     ${isExpanded ? 'h-auto' : 'h-[500px]'}`}>
      <div className="-mx-6 -mt-6">
        <Image 
          src={imageUrl} 
          alt={name} 
          width={300} 
          height={300} 
          className="w-full rounded-t-xl"
        />
      </div>
      
      <h3 className="md:text-xl text-lg font-bold mt-4">{name}</h3>
      <p className="text-secondary-text font-medium text-sm">{specialization}</p>
      
      <div className="flex-1 flex flex-col justify-between mt-5">
        <div className="space-y-2">
          <p className={`md:text-sm text-xs whitespace-pre-line ${!isExpanded ? 'line-clamp-3' : ''}`}>
            {description}
          </p>
          {description.length > 150 && (
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-primary md:text-sm text-xs hover:underline font-semibold"
            >
              {isExpanded ? 'Show less' : '... Mehr'}
            </button>
          )}
        </div>
        
        <div className='flex justify-center mt-4'>
          <Button className="w-4/5 bg-primary hover:bg-primary-text rounded-full text-secondary text-[10px] md:text-xs">
            DIREKT KONTAKTIEREN
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ExpertCard;
