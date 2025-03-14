import React from 'react'
import { motion } from 'framer-motion'

const CollectionCard = () => {
  return (
    <div className='bg-secondary-light text-sm md:text-base  px-4 py-8 md:py-0 text-primary flex flex-col items-center justify-center min-h-[30vh]'>
      <motion.p 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className='md:text-xs text-[10px]'
      >
        Wir kaufen je nach Zustand:
      </motion.p>
      <motion.p 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className='md:text-2xl text-sm max-w-4xl text-center'
      >
        Möbel . Kunst . Designobjekte . Moderne Kunst . Grafiken . Bronzen . Skulpturen . Kunstobjekte . Kunstsammlungen . Münzen . Münzsammlungen . Glas . Silber . Silberbesteck . Antiquitäten . Schmuck . Weine . Weinsammlungen . Antike Bücher . Komplette Bibliotheken . Leuchten.Gold, wertvolle Spielzeuge, Oldtimer
      </motion.p>
    </div>
  )
}

export default CollectionCard