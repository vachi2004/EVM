import Button from '@mui/material/Button';
import engagement from './images/tradeshows.jpg'
import haldi from './images/product.png'
import mehendi from './images/meeting.jpg'
import reception from './images/appreciation.jpg'
import roka from './images/sports.jpg'
import sangeet from './images/inaugaration.jpg'
export const Hot=[{ 
  img:<img src={engagement} width="200" height="200"/>, 
  uuid:1, 
  name:"Trade Shows", 
  price:"Rs. 90,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={haldi} width="200" height="200"/>, 
  uuid:2, 
  name:"Product Launching", 
  price:"Rs. 1,20,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={mehendi} width="200" height="200"/>,  
  uuid:3, 
  name:"Board Meetings", 
  price:"Rs. 30,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={reception} width="200" height="200"/>, 
  uuid:4, 
  name:"Appreciation Function", 
  price:"Rs. 1,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={roka} width="200" height="200"/>, 
  uuid:5, 
  name:"Sports Tournament", 
  price:"Rs. 2,50,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={sangeet} width="200" height="200"/>, 
  uuid:6, 
  name:"Inaugaration Function", 
  price:"Rs. 2,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
}
]