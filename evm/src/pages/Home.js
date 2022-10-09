import Button from '@mui/material/Button';
import engagement from './images/Engagement.jpg'
import haldi from './images/haldi.jpg'
import mehendi from './images/Mehendi.jpg'
import reception from './images/reception.jpg'
import roka from './images/roka.jpg'
import sangeet from './images/sangeet.jpeg'
export const Marriage=[{ 
  img:<img src={engagement} width="200" height="200"/>, 
  uuid:1, 
  name:"Enagement Function", 
  price:"Rs. 5,50,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={haldi} width="200" height="200"/>, 
  uuid:2, 
  name:"Haldi Function", 
  price:"Rs. 3,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={mehendi} width="200" height="200"/>,  
  uuid:3, 
  name:"Mehendi Function", 
  price:"Rs. 2,50,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={reception} width="200" height="200"/>, 
  uuid:4, 
  name:"Reception Function", 
  price:"Rs. 5,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={roka} width="200" height="200"/>, 
  uuid:5, 
  name:"Roka Function", 
  price:"Rs. 1,50,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={sangeet} width="200" height="200"/>, 
  uuid:6, 
  name:"Sangeet Function", 
  price:"Rs. 4,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
}
]