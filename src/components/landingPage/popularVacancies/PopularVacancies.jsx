import React from 'react'
import VacancyCard from './VacancyCard'

const PopularVacancies = () => {
  return (
    <div className='m-12 py-5'>
        <p className='text-purple4 font-bold text-3xl mb-10'>Most Popular Vacancies</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 m-auto'>
          <VacancyCard />
          <VacancyCard />
          <VacancyCard />
          <VacancyCard />
          <VacancyCard />
          <VacancyCard />
          <VacancyCard />
          <VacancyCard />
        </div>
    </div>
  )
}

export default PopularVacancies