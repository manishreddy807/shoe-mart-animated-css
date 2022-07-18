import React from "react";
import { Link, LinkWrapper, ImageWrapper,ImageEffectWrapper,
    Image, SaleFlag, NewFlag, Row, Name, Price, ColorInfo, SalePrice} from "./style";
import { formatPrice, isNewShoe, pluralize } from "../../utils";    
import Spacer from "../Spacer";


export default function ShoeCard({slug,name, imageSrc, price, salePrice, releaseDate, numOfColors}){
    const varient = typeof salePrice === 'number' ?
                     'on-sale': isNewShoe(releaseDate) ? 'new-release': 'default'
    
    return(
        <Link>
          <LinkWrapper>
            <ImageWrapper>
                <ImageEffectWrapper>
                    <Image alt="" src={imageSrc} />
                </ImageEffectWrapper>
                {varient === "on-sale" && <SaleFlag>Sale</SaleFlag>}
                {varient === "new-release" && <NewFlag>Just released!</NewFlag>}
            </ImageWrapper>
            <Spacer size={12} />
            <Row>
                <Name>{name}</Name>
                <Price
                  style={{
                    "--color":
                      varient === "on-sale" ? "var(--color-gray-700)" : undefined,
                    "--text-decoration":
                      varient === "on-sale" ? "line-through" : undefined,
                  }}
                >
                    {formatPrice(price)}
                </Price>
            </Row>
            <Row>
            <ColorInfo>{pluralize("Color", numOfColors)}</ColorInfo>
            {varient === "on-sale" ? (
             <SalePrice>{formatPrice(salePrice)}</SalePrice>
            ): undefined}
            </Row>

          </LinkWrapper>
        </Link>
    )
}