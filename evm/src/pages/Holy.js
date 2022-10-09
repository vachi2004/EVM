import Button from '@mui/material/Button';
import engagement from './images/sankranthi.png'
import haldi from './images/diwali.jpg'
import mehendi from './images/navratri.jpg'
import reception from './images/holi.jpg'
import roka from './images/Krishnashtami.jpg'
import sangeet from './images/ganesh.jpg'
export const Holy=[{ 
  img:<img src={engagement} width="200" height="200"/>, 
  uuid:1, 
  name:"Sankranthi", 
  price:"Rs. 1,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={haldi} width="200" height="200"/>, 
  uuid:2, 
  name:"Diwali", 
  price:"Rs. 50,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={mehendi} width="200" height="200"/>,  
  uuid:3, 
  name:"Dusshera", 
  price:"Rs. 2,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={reception} width="200" height="200"/>, 
  uuid:4, 
  name:"Holi", 
  price:"Rs. 60,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={roka} width="200" height="200"/>, 
  uuid:5, 
  name:"Krishnashtami", 
  price:"Rs. 85,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={sangeet} width="200" height="200"/>, 
  uuid:6, 
  name:"Ganesh Chathurthi", 
  price:"Rs. 5,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
}
]