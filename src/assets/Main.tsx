import React from 'react'
import './Main.css'
import Product from './Product'

export default function Main() {
  return (
    <main className='main'>
        <Product
          imgUrl = "public\Products\AsusROGStrix15.6_5_1024x1024.webp"
          price = "1399"
          lastPrice = "1499"
          name = "Asus ROG Strix 15"
          stock = {true}
        />
        <Product
          imgUrl = "public\Products\rp09ea-1.jpeg"
          price = "1399"
          lastPrice = "1499"
          name = "Asus ROG Strix 15"
          stock = {true}
        />
        <Product
          imgUrl = "public\Products\lll.jpg"
          price = "1399"
          lastPrice = "1499"
          name = "Asus ROG Strix 15"
          stock = {false}
        />
        <Product
          imgUrl = "public\Products\dv0022ur-1.jpg"
          price = "1399"
          lastPrice = "1499"
          name = "Asus ROG Strix 15"
          stock = {false}
        />
        <Product
          imgUrl = "public\Products\rp09ea-1.jpeg"
          price = "1399"
          lastPrice = "1499"
          name = "Asus ROG Strix 15"
          stock = {true}
        />
        <Product
          imgUrl = "public\Products\AsusROGStrix15.6_5_1024x1024.webp"
          price = "1399"
          lastPrice = "1499"
          name = "Asus ROG Strix 15"
          stock = {true}
        />
        <Product
          imgUrl = "public\Products\lll.jpg"
          price = "1399"
          lastPrice = "1499"
          name = "Asus ROG Strix 15"
          stock = {false}
        />
    </main>
  )
}
