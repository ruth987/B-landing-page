// components/ExpertCard.tsx
import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

type ExpertCardProps = {
  name: string;
  specialization: string;
  description: string;
  imageUrl: string;
};

const ExpertCard: React.FC<ExpertCardProps> = ({ name, specialization, description, imageUrl }) => {
  return (
    <div className="flex flex-col bg-white rounded-xl shadow-lg p-6 text-primary-text max-w-xs">
      <div className="-mx-6 -mt-6">
        <Image src={imageUrl} alt={name} width={300} height={300} className="w-full rounded-t-xl" />
      </div>
      <h3 className="text-xl font-bold mt-4">{name}</h3>
      <p className="text-secondary-text font-medium text-sm">{specialization}</p>
      <div className='flex-1 flex justify-between items-start'>
        <p className="text-sm mt-5">{description}</p>
      </div>
      <div className='flex justify-center'>
        <Button className=" mt-4 w-4/5 bg-primary hover:bg-primary-text rounded-full text-secondary text-xs">DIREKT KONTAKTIEREN</Button>
      </div>
    </div>
  );
};

export default ExpertCard;
