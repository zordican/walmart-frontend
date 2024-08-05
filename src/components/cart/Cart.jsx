import {useState, useEffect, useRef} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'

const Cart = () => {
    
    const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };

    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });
  return (
    <div>
      <div className="App">
      <div className='menu-container' ref={menuRef}>
        <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
            <FontAwesomeIcon icon={faUser} />
        </div>

        <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
          <h3>Choose Your Cart <br/><span>:)</span></h3>
          <ul>
           <DropdownItem/>
           <DropdownItem2/>
          </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

function DropdownItem(){
    return(
      <li className = 'dropdownItem'>
        <FontAwesomeIcon icon={faUser} />
        <a> Shared Cart </a>
      </li>
    );
  }

  function DropdownItem2(){
    return(
      <li className = 'dropdownItem'>
        <FontAwesomeIcon icon={faUser} />
        <a> Cart </a>
      </li>
    );
  }
  

export default Cart
