import React from 'react';
import axios from 'axios';

const Payment = (props) => {
    // const [data, setData] = useState('');
     console.log(props.Id)
     const loggedIn=localStorage.getItem('loggedIn')
  
      const handlePayment=async()=>{
      if(loggedIn){ try {
            const response = await axios.post('http://localhost:4000/api/razorpay',{
                amount:100*100
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

                    axios.post("http://localhost:4000/api/addtodashbord",{
                        Id:props.Id,
                        userId:userId
                    })
                    .then(res=>console.log(res))
                    .catch(err=>console.log(err))
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
          }}
          else{
            alert('please loggeIn')
          }
    }




    return (
       
            <button style={{width:"100%",height:"100%"}} className='mocktest-card-btn' onClick={handlePayment}>Buy Now</button>
       
    );
};

export default Payment