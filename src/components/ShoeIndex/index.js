import React from "react";
import Breadcrumbs from "../../Breadcrumbs";
import { Select } from "../Select";
import ShoeGrid from "../ShoeGrid";
import Spacer from "../Spacer";
import SideBar from "./shoeSideBar";
import {Wrapper, MainColumn, Header, MobileBreadcrumbs,
    Title, SortFilterWrapper, LeftColumn, DesktopBreadcrumbs} from './style'

const ShoeBreadcrumbs = () => {
    return(
        <Breadcrumbs>
          <Breadcrumbs.Crumb href="/">Home</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale">Sale</Breadcrumbs.Crumb>
      <Breadcrumbs.Crumb href="/sale/shoes">Shoes</Breadcrumbs.Crumb>
        </Breadcrumbs>
    )
}

export  const ShoeIndex = ({sortId, setSortId}) => {
    return(
        <Wrapper>
            <MainColumn>
                <Header>
                   <div>
                       <MobileBreadcrumbs>
                           <ShoeBreadcrumbs />
                       </MobileBreadcrumbs>
                       <Title>Running</Title>
                   </div>
                   <SortFilterWrapper>
                       <Select
                        label='sort'
                        value={sortId}
                        onChange={(ev) => setSortId(ev.target.value)}
                       >
                           <option value="newest">Newset Releases</option>
                           <option value="price">Price</option>
                       </Select>
                   </SortFilterWrapper>
                </Header>
                <Spacer size={32} />
                <ShoeGrid />
            </MainColumn>
            <LeftColumn>
                <DesktopBreadcrumbs>
                    <ShoeBreadcrumbs />
                </DesktopBreadcrumbs>
                <Spacer size={42} />
                <SideBar />
            </LeftColumn>
        </Wrapper>
    )
}