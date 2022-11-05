import React, { useEffect, useContext, useState } from 'react';

import Heart from '../../assets/Heart';
import { FirebaseContext } from '../../store/Context';
import { PostContext } from '../../store/PostContext';
import './Post.css';
import {useHistory} from 'react-router-dom'

function Posts() {
  const { firebase } = useContext(FirebaseContext)
  const [products, setProducts] = useState([])
  const {setPostDetails} = useContext(PostContext)
  const history = useHistory()

  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allPost)
    })
  }, [])

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
        { products.map(product=>{

         return <div
          className="card"
          onClick={()=>{
            setPostDetails(product)
            history.push('/view')
          }}
        >
          <div className="favorite">
            <Heart></Heart>
          </div>
          <div className="image">
            <img src={product.url} alt="" />
          </div>
          <div className="content">
            <p className="rate">&#x20B9; {product.price}</p>
            <span className="kilometer">{product.category}</span>
            <p className="name">{product.name}</p>
          </div>
          <div className="date">
            <span>{product.craetedAt}</span>
          </div>
        </div>
        })
           }
        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Popular recommendations</span>
        </div>

<div className='recom'>

        <div className="cards fcard">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 100000</p>
              <span className="kilometer">YAMAHA R15V3</span>
              <p className="name">Motorcycle </p>
            </div>
            <div className="date">
              <span>10/5/2022</span>
            </div>
          </div>
        </div>

        <div className="cards fcard">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/image.webp" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 259999</p>
              <span className="kilometer">Etios Liva</span>
              <p className="name"> Car</p>
            </div>
            <div className="date">
              <span>1/8/2022</span>
            </div>
          </div>
        </div>

        <div className="cards fcard">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/imagePhone.webp" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 20000</p>
              <span className="kilometer">Google Pixel</span>
              <p className="name">Mobile Phone </p>
            </div>
            <div className="date">
              <span>18/3/2022</span>
            </div>
          </div>
        </div>

        <div className="cards fcard">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/imageScooter.webp" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 45399</p>
              <span className="kilometer">Aprilia SR 150</span>
              <p className="name"> Motorcycle</p>
            </div>
            <div className="date">
              <span>21/9/2022</span>
            </div>
          </div>
        </div>

        <div className="cards fcard">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/imageBike.webp" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 213400</p>
              <span className="kilometer">Hero Xtreme</span>
              <p className="name">Motorcycle</p>
            </div>
            <div className="date">
              <span>16/5/2022</span>
            </div>
          </div>
        </div>

        <div className="cards fcard">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/imageCar.webp" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 950000</p>
              <span className="kilometer">Honda C-RV</span>
              <p className="name"> Car</p>
            </div>
            <div className="date">
              <span>28/7/2022</span>
            </div>
          </div>
        </div>

</div>

      </div>
    </div>
  );
}

export default Posts;
