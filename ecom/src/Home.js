import React, {useEffect, useState} from 'react'
import './Home.css'
import Product from './Product'
import { db } from './firebase'

function Home() {

    // const [ products, setProducts ] = useState([]);

    // useEffect(() => {
    //     db.collection('products').onSnapshot((snapshot)=>{
    //         let tempProducts = []
    //         snapshot.docs.map((doc)=>{
    //             tempProducts.push({
    //                 id: doc.id,
    //                 product: doc.data()
    //             })
    //         })
    //         setProducts(tempProducts)
    //     })
    // }, [])


    return (    
        <div className="home">
            <img
             className="home__image"
             src="https://images-na.ssl-images-amazon.com/images/G/15/digital/video/merch/2021/TV/BRND/BRND_MTH21_GWBleedingHero_1500x600_Final_en-CA_FT_PVD6862._CB670220811_.jpg"
             alt=""/>

             <div className="home__row">
             <Product
             id="12121212"
             title="UNIROI Elegant Black Button Velvet Tufted Convertible Bed, L Shape Sectional Sleeper Sofa Couch with Reversible Chaise and 2 Pillows for Living Room Furniture Set
             "
             price={11}
             rating={5}
             image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG19/Furniture/LivingRoom/Desktop/TheSofaStore_1500x350._CB461815221_.png"
             />
             <Product
             id="12121212"
             title="STARTOGOO L-Shaped Couch 3 Piece Convertible Sectional Sofa with Reversible Chaise Lounge Storage Ottoman Set and 2 Cup Holders for"
             price={11}
             rating={5}
             image="https://images-eu.ssl-images-amazon.com/images/G/31/IMG21/Furniture/Brands/Pepperfry/SolidWood/1242x450_SubCategory_Casacraft._CB654782811_SY250_.jpg"
             />
             </div>

             <div className="home__row">
             <Product
             id="12121212"
             title="The Lean Startup | The Movement That Is Transforming How"
             price={11}
             rating={5}
             image="https://www.oreilly.com/library/view/python-tricks/9781492069522/images/9783960886006.jpg"
             />
             <Product
             id="12121212"
             title="The Lean Startup | The Movement That Is Transforming How"
             price={11}
             rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/71IOEdgoCmL.jpg"
             />
             <Product
             id="12121212"
             title="The Lean Startup | The Movement That Is Transforming How"
             price={11}
             rating={5}
             image="https://qph.fs.quoracdn.net/main-qimg-52ed15068a6109cbc2aef198d06ea83d"
             />
              <Product
             id="12121212"
             title="Machine Learning for Beginners: Absolute Beginners Guide, Learn Machine Learning and Artificial Intelligence from Scratch"
             price={11}
             rating={5}
             image="https://m.media-amazon.com/images/I/51GxW8immiL.jpg"
             />
             </div>

             <div className="home__row">
             <Product
             id="12121212"
             title="The Lean Startup | The Movement That Is Transforming How"
             price={11}
             rating={5}
             image="https://sc01.alicdn.com/kf/H3ba2d9e799194e119bc668040b70d85fY.jpg"
             />
             <Product
             id="12121212"
             title="The Lean Startup | The Movement That Is Transforming How"
             price={11}
             rating={5}
             image="https://economictimes.indiatimes.com/thumb/msid-79580147,width-1200,height-900,resizemode-4,imgsize-278702/the-vivo-v20-is-a-good-option-to-go-for-under-rs-25000-as-it-is-an-overall-competent-phone-.jpg?from=mdr"
             />
             </div>

             <div className="home__row">
             <Product
             id="12121212"
             title="The Lean Startup | The Movement That Is Transforming How"
             price={11}
             rating={5}
             image="https://purepng.com/public/uploads/large/purepng.com-women-dressclothingwomen-dressfashion-women-dress-cloth-apparel-631522326986nflyr.png"
             />
             <Product
             id="12121212"
             title="The Lean Startup | The Movement That Is Transforming How"
             price={11}
             rating={5}
             image="https://elegant-man.com/wp-content/uploads/2016/12/British-Style-Coat-Men-Classic-6.jpg"
             />
             <Product
             id="12121212"
             title="The Lean Startup | The Movement That Is Transforming How"
             price={11}
             rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/71vaN%2BtlU-L._AC_UX385_.jpg"
             />
             </div>

             <div className="home__row">
             <Product
             id="12121212"
             title="The Lean Startup | The Movement That Is Transforming How"
             price={11}
             rating={5}
             image="https://images-na.ssl-images-amazon.com/images/I/51Ho-O5wi4L._AC_SY355_.jpg"
             />
             </div>
             <div className="home__row">
             <Product
             id="12121212"
             title="The Lean Startup | The Movement That Is Transforming How"
             price={11}
             rating={5}
             image="https://homekitchenary.com/wp-content/uploads/2017/01/best-coffee-maker-with-grinder-1.jpg"
             />
             </div>
             
            
        </div>
    )
}

export default Home
