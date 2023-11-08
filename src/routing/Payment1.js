import React from 'react';
import axios from 'axios';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Toast } from 'react-toastify/dist/components';

const Payment1 = (props) => {
    // const [data, setData] = useState('');
     console.log(props.Id)
     const loggedIn=localStorage.getItem('loggedIn')
  
      const handlePayment=async()=>{
       if(loggedIn){
        try {
          const response = await axios.post('https://prepbytesclone.onrender.com/api/razorpay',{
              amount:props.amount*100
          });
          const { data } = response;
          // setOrder(data);
          const options = {
            key: `${data.key_id}`,
            amount: data.amount,
            currency:'INR',
            order_id: data.order_id,
            name: 'prepbytesClone',
          
            handler: function (response) {
              console.log(response);
              if(response.razorpay_payment_id){
                  const token=localStorage.getItem("token")
                  const token1=window.atob(token.split(".")[1])
                  const jsonString = `${token1}`;
                  const obj = JSON.parse(jsonString);
                  const userId = obj._id;

                 if(props.name==="Full stack program"){
                  axios.post("https://prepbytesclone.onrender.com/api/fullstack",{
                      name:props.name,
                      userId:userId
                  })
                  .then(res=>toast(res.data.msg))
                  .catch(err=>console.log(err))
                 }
                 if(props.name==="MASTER COMPETITIVE PROGRAMMING"){
                  axios.post("https://prepbytesclone.onrender.com/api/master",{
                      name:props.name,
                      userId:userId
                  })
                  .then(res=>toast(res.data.msg))
                  .catch(err=>console.log(err))
                 }
              }
              // Handle the payment success callback here
            },
          };
          
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.async = true;
          document.body.appendChild(script)
  
          script.onload = () => {
              const rzp = new window.Razorpay(options);
              rzp.open();
              // Now you can use rzp to open the payment dialog
          }
        } catch (error) {
          console.error('Error creating Razorpay order:', error);
        }
       } 
       else{
       toast('please loggIn')
       }
    }




    return (
       <>
            <button style={{width:"100%",height:"100%"}} className='mocktest-card-btn' onClick={handlePayment}>Enroll Now</button>
       <ToastContainer/>
       </>
    );
};
export default Payment1
