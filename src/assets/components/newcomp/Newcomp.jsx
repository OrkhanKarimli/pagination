import React,{useState} from 'react';


function Newcomp(){
    // const [name,setName]=useState("sagol");
    // useEffect(()=>{
    //     setTimeout(()=>{
    //    setName("salam");
    //     },300)
    //     },[])
    // const [name,setName]=useState("sa");
    // useEffect(()=>{
    // setName("as")
    // },300)
    // const [count,setCount]=useState(0);
    // return(
    //   <div>
    //     <h1>{count}</h1>
    //     <button onClick={()=>{setCount(count+1)}}>add</button>
    //   </div>
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (e) => {
      setSelectedOption(e.target.value);
    };
   return(
    <> <h1>Radyo Buttons</h1>
    <div>
      <input 
        type="radio" 
        id="yes" 
        name="CHOOSE" 
        value="1" 
       
        checked={selectedOption === '1'} 
        onChange={handleOptionChange} 
      />
      <label htmlFor="yes">1</label>
    </div>
    <div>
      <input 
        type="radio" 
        id="no" 
        name="CHOOSE" 
        value="2" 
        checked={selectedOption === '2'} 
        onChange={handleOptionChange} 
      />
      <label htmlFor="no">2</label>
    </div>
    <div>
      {selectedOption === '1' && <p>Salam necesen?</p>}
      {selectedOption === '2' && <p>Yaxsiyam sen necesen?</p>}
    </div></>
   
   );
   


        
        // <div className='Newcomp'>
        //   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur nesciunt numquam molestias perspiciatis nostrum inventore aliquid? Voluptatem, itaque! Ipsa tempora rem repellendus debitis eaque magni facilis eligendi teze sunt corrupti commodi.
        //   Odit sint velit dolorum odio quam iusto adipisci eos quidem, possimus corrupti asperiores sed. Earum, reiciendis excepturi! Eum, id, porro maiores eaque quis molestiae non aliquam temporibus vitae sapiente tempore.
        //   Voluptatibus numquam saepe consequatur nulla quos fuga eligendi ut, recusandae accusantium quae quidem illo enim assumenda neque voluptates, labore odit tempora laborum consectetur suscipit quod velit teze omnis alias totam. Esse.
        //   Reiciendis tenetur, dicta placeat deserunt nemo quis, architecto rem ratione fuga voluptates asperiores optio iure ex autem delectus eveniet! Expedita consequatur magni reprehenderit maxime deserunt libero nulla ratione laboriosam ex?
        //   Quaerat cumque reprehenderit, fugit nemo provident aliquid, a quidem ut doloremque cum nisi necessitatibus numquam facilis deleniti minima sapiente iste magni? Corrupti, atque autem. Maxime sapiente est totam facilis error!
        // </div>
//         <div>
// {name}
//         </div>
// <div>
 // <div>teze</div>
 // <div>teze</div>
//</div>
//<div>
//<label htmlFor="as">Salam</label>
//<input type="text" id='a' value={"test"}/>
//</div> 
//<div>
    //<button>add</button>
    //<input type="text" value={"test"}/>
    //<input data-testid="testing" />
//</div>
//<div>
    //<a href="https://www.google.com/">
   // link</a>
//</div>

    
}

export default Newcomp;