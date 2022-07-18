import React from "react";
import SHOES from "../../data";
import ShoeCard from "./shoeCard";

import {Wrapper, ShoeWrapper} from './style'

export default function ShoeGrid(){
    return(
        <Wrapper>
              {SHOES.map((shoe) => (
                  <ShoeWrapper key={shoe.slug}>
                      <ShoeCard {...shoe} />
                  </ShoeWrapper>
              ))}
        </Wrapper>
    )
}
