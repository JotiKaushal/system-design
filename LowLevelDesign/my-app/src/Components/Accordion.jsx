import React, { useState } from 'react'
import AccordionItem from './AccordionItem'

const data =[
    {title: "Accordion title 1",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minima, iure eum aut unde soluta. Reprehenderit ratione repellendus, similique odit assumenda necessitatibus nostrum, voluptas quae iste dicta voluptatibus qui labore."
    },{title: "Accordion title 2",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minima, iure eum aut unde soluta. Reprehenderit ratione repellendus, similique odit assumenda necessitatibus nostrum, voluptas quae iste dicta voluptatibus qui labore."
    },{title: "Accordion title 3",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minima, iure eum aut unde soluta. Reprehenderit ratione repellendus, similique odit assumenda necessitatibus nostrum, voluptas quae iste dicta voluptatibus qui labore."
    },{title: "Accordion title 4",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum minima, iure eum aut unde soluta. Reprehenderit ratione repellendus, similique odit assumenda necessitatibus nostrum, voluptas quae iste dicta voluptatibus qui labore."
    }
]

const Accordion = () => {
    const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className='m-auto w-1/2 mt-5'>{data.map((item,index) => <AccordionItem  key={index} title={item.title} body={item.body} isOpen ={openIndex === index} setIsOpen={()=>{
        //if second is clicked second is open rest closed
        if(openIndex === index){
            setOpenIndex(-1)
        }else{
            setOpenIndex(index);
        }
    }}/>)}</div>
  )
}

export default Accordion