"use client"

import React, {FC, useState} from "react";
import Heading from "./utils/Heading";

interface Props{}

const Page: FC<Props> = (props) => {
  return (

    <div>
        <Heading 
          title = "e-learning platform"
          description = "Interactive e-learning platform for students and teachers"

          keywords = "MERN, e-learning"
        
        />



    </div>
  )
};

export default Page;