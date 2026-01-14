import React, { useState } from 'react'
import { foodMenu } from '../assets/assets'
import ItemModal from '../components/ItemModal'
import { Link } from 'react-router-dom'


const Menu = () => {
  const [selectedItem, setSelectedItem] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = (item) => {
    setSelectedItem(item)
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setSelectedItem(null)
    setIsModalOpen(false)
  }

  return (
    <div id="menu" className="py-20 bg-secondary">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl text-dark mb-6 font-bold">Our Menu</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-700 mb-8">
            Crafted with passion and the finest ingredients
          </p>
        </div>

        {/* Menu Items */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {foodMenu.slice(0,6).map((food, index) => (
              <div
                key={index}
                onClick={() => openModal(food)}
                className="rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
              >
                <img
                  className="w-full h-96 object-cover"
                  src={food.image}
                  alt={food.title}
                />

                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <h1 className="text-xl text-dark font-semibold">
                      {food.title}
                    </h1>
                    <span className="text-sm text-primary font-semibold">
                      {food.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 mt-2">
                    {food.ingredients}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <ItemModal
          isOpen={isModalOpen}
          isClose={closeModal}
          item={selectedItem}
        />

        <div className='text-center'>
            <Link to="/full-menu">
            <button className='bg-primary px-8 py-3 rounded-full mt-12 text-white cursor-pointer'>View Full Menu</button>
            </Link>
        </div>

      </div>
    </div>
  )
}

export default Menu
