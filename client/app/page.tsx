"use client"

import React, {FC, useState} from "react";
import Heading from "./utils/Heading";
import Header from "./components/Header";



interface Props{}

const Page: FC<Props> = (props) => {
  const[open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [route, setRoute] = useState("Login")

  return (

    <div>
        <Heading 
          title = "e-learning platform"
          description = "Interactive e-learning platform for students and teachers"

          keywords = "MERN, e-learning"
        
        />


        <Header 
          open = {open}
          setOpen={setOpen}
          activeItem={activeItem}
          setRoute={setRoute}
          route ={route}
        />



    </div>
  )
};

export default Page;