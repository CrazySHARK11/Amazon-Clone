import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <main className="home">
        <div className="wrap">

<div className="product_content pt-[25em]">
  <section className="product_section flex gap-5">
  <Product />  <Product />
  </section>

  <section className="product_section mt-6 flex gap-5">
  <Product />  <Product /> <Product /> 
  </section>

  <section className="product_section mt-6 flex gap-5">
  <Product />  <Product /> <Product />  <Product /> 
  </section>
</div>
     
        </div>
    </main>
  )
}

export default Home