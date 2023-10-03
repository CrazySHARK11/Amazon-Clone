import React  from 'react'
import Prodrow from './Prodrow'

const Checkout = () => {

  return (
    <section className="checkoutsection">
      <div className="wrap">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/AB_EventMLP/918_AB_B2C-GIF_1500x100.gif" alt="" />

        <h2 className="text-[2em] font-medium border-b-2 py-5">Your Shopping Items Here</h2>

        <div className="checkout flex gap-5">

          <div className="product_list mt-5 w-[100%] flex flex-col gap-4 ">
          <Prodrow /> 
          <Prodrow />   
          </div>

          <aside className=' min-w-[400px] max-h-[200px] p-4 bg-gray-200 border-[1px] border-gray-400 mt-5'>
            <p className='font-bold '>Subtotal </p>
            <input type="checkbox" id='gift' className='my-6  ' /> <label htmlFor="gift">This order contains a gift <br />

              <button className='bg-yellow-400 border-[1px] border-black px-2 py-1 '  >Proceed to Checkout</button>
            </label>
          </aside>
        </div>


      </div>
    </section>
  )
}

export default Checkout