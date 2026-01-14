import React, { useState } from 'react'
import { foodMenu } from '../assets/assets'
import ItemModal from '../components/ItemModal'

const FullMenu = () => {
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
    <div className="py-20 bg-secondary">
      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl text-dark font-bold mb-4">Full Menu</h1>
          <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-gray-700">
            Explore our complete selection of delicious dishes
          </p>
        </div>

        {/* All Menu Items */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {foodMenu.map((food, index) => (
            <div
              key={index}
              onClick={() => openModal(food)}
              className="rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transition duration-300 cursor-pointer"
            >
              <img
                src={food.image}
                alt={food.title}
                className="w-full h-96 object-cover"
              />

              <div className="p-4">
                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-semibold text-dark">
                    {food.title}
                  </h2>
                  <span className="text-primary font-semibold">
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

        {/* Modal */}
        <ItemModal
          isOpen={isModalOpen}
          isClose={closeModal}
          item={selectedItem}
        />
      </div>
    </div>
  )
}

export default FullMenu
