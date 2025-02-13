import React, { useState, useEffect } from 'react';
import {
 FcFeedback,FcCallback ,FcTimeline ,FcCollaboration,FcCalculator,FcAddImage,FcDebt,
 FcShop,FcDiploma2,FcParallelTasks ,FcAdvertising,FcRatings

} from "react-icons/fc";
import './Webdevelopment.css';
import {FaCcMastercard, FaComment, FaDashcube, FaMap, FaSearchLocation, FaShoppingCart, FaTicketAlt, FaUser } from 'react-icons/fa';


function Webdevelopment() {
  const framesData = [
    { id: 1, name: 'Mail Service', icon: <FcFeedback size={40}/>,price:35},
    { id: 2, name: 'Phone Support', icon: <FcCallback  size={40} />, price: 15 },
    { id: 3, name: 'Desktop Development', icon: <FcTimeline  size={40} />,price: 20 },
    { id: 4, name: 'Chat Functionality', icon: <FcCollaboration size={40} />, price: 12 },
    { id: 5, name: 'Calculator Feature', icon: <FcCalculator size={40} />, price: 18 },
    { id: 6, name: 'Photo Gallery', icon: <FcAddImage size={40} />, price: 25 },
    { id: 7, name: 'Presentation Tools', icon: <FcDebt size={40} />, price: 30 },
    { id: 8, name: 'Shopping Cart', icon: <FcShop size={40} />, price: 22 },
    { id: 9, name: 'Education', icon: <FcDiploma2 size={40} />, price: 25 },
    { id: 10, name: 'Music Player', icon: <FcParallelTasks  size={40} />, price: 20 },
    { id: 11, name: 'Video Player', icon: <FcRatings size={40} />, price: 28 },
    { id: 12, name: 'Speakers', icon: <FcAdvertising size={40} />, price: 30 },
    { id: 13, name: 'Geo Location', icon: <FaSearchLocation size={40} />, price: 70 },

    { id: 15, name: 'Dashboard', icon: <FaDashcube size={40} />, price:63 },
    { id: 16, name: 'User Administration',icon:<FaUser size={40} />, price: 50 },
    { id: 17, name: 'Feedback System', icon: <FaComment size={40} />, price:22 },
    { id: 18, name: 'Map', icon: <FaMap size={40} />, price:24 },
    { id: 19, name: 'ShoppingCart', icon: <FaShoppingCart size={40} />, price:24 },
    { id: 20, name: 'Ticketing System', icon: <FaTicketAlt size={40} />, price:29 },
    { id: 21, name: 'CMS', icon: <FaCcMastercard size={40} />, price:29 },
   
    
    // ... Add more frames with their respective icons, names, and prices as needed
  ];
    const [cart, setCart] = useState([]);
    const [totalItems, setTotalItems] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [selectedFrames, setSelectedFrames] = useState({});

    useEffect(() => {
        let totalPriceSum = 0;
        cart.forEach((item) => {
            totalPriceSum += item.totalPrice;
        });
        setTotalPrice(totalPriceSum);
    }, [cart]);

    const handleFrameClick = (frameId, price) => {
        const frameIndex = cart.findIndex((item) => item.id === frameId);
        if (frameIndex !== -1) {
            const updatedCart = [...cart];
            const updatedItem = { ...updatedCart[frameIndex] };
            if (updatedItem.quantity === 1) {
                updatedCart.splice(frameIndex, 1);
            } else {
                updatedItem.quantity -= 1;
                updatedItem.totalPrice -= price;
                updatedCart[frameIndex] = updatedItem;
            }
            setCart(updatedCart);
            setTotalItems(totalItems - 1);
        } else {
            const newCart = [...cart, { id: frameId, quantity: 1, totalPrice: price }];
            setCart(newCart);
            setTotalItems(totalItems + 1);
        }

        // Toggle selected state for the clicked frame
        setSelectedFrames((prevState) => ({
            ...prevState,
            [frameId]: !prevState[frameId],
        }));
    };

    return (
        <div className="web-development-container">
            <div className="web-development-left">
                <h2>Web Development Services</h2>
                <p>Please choose the features you need for your web app to get an idea of the estimated cost.</p>
                <div className="web-frames-container">
                    {framesData.map((frame) => (
                        <div
                            className={`web-frame ${selectedFrames[frame.id] ? 'selected' : ''}`}
                            key={frame.id}
                            onClick={() => handleFrameClick(frame.id, frame.price)}
                        >
                            <div className="web-icon">{frame.icon}</div>
                            <p style={{ fontSize: '16px', textAlign: 'center' }}>{frame.name}</p>


                            {/* <p>Price: ${frame.price}</p> */}
                            {selectedFrames[frame.id] && <span>✔️</span>}
                        </div>
                    ))}
                </div>
            </div>
            <div className="web-development-right">
              <div className="shopping-cart">
                    <h2>Shopping Cart</h2>
                  <div className="cart-info">
                    <p>Total items: {totalItems}</p>
             </div>
              <div className="cart-details">
                  <h3>Cart Details:</h3>
                       {cart.map((item) => (
                    <div key={item.id} className="cart-item">
                    <p>{framesData.find((frame) => frame.id === item.id)?.name}: Quantity - {item.quantity}, Price - ${item.totalPrice}</p>
                      </div>
                      ))}
                     </div>
                     <div className="total-price-container"> {/* Added container for Total Price */}
            <div className="total-price" style={{ color : 'white', backgroundColor: '#494848' , height:'50px' ,  }}> {/* Blue background color */}
              <p>Total Price: ${totalPrice}</p>
            </div>
          </div>
      </div>
   </div>
</div>
    );
}

export default Webdevelopment;
