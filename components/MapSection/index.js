import React from "react";
import Heading from "../../common/components/Heading";
import Text from "../../common/components/Text";
import Image from "../../common/components/Image";
import Container from "../../common/components/UI/Container";
import SectionWrapper, {
  SectionHeader,
  ImageWrapper,
} from "./mapSection.style";

import mapImage from "../../common/assets/image/cryptoModern/map.png";
import country1 from "../../common/assets/image/cryptoModern/uk.png";
import country2 from "../../common/assets/image/cryptoModern/africa.png";
import country3 from "../../common/assets/image/cryptoModern/spain.png";
import countryIcon from "../../common/assets/image/cryptoModern/countryIcon.png";

const MapSection = () => {
  return (
    <SectionWrapper id="map">
      <Container width="1200px">
        <SectionHeader>
          <Heading content="More than 1 Million worldwide use" />
          <Text content="Operating in 4 continents providing exceptional service to our customers ." />
          <Text className="smallText" content="Some partner countries" />
          <div className="countries">
            <div className="countriesSingle">
              <Image src={country1?.src} alt="country image" />
              <Text className="smallText" content="United Kingdom" />
            </div>
            <div className="countriesSingle">
              <Image src={country2?.src} alt="country image" />
              <Text className="smallText" content="South Africa" />
            </div>
            <div className="countriesSingle">
              <Image src={country3?.src} alt="country image" />
              <Text className="smallText" content="Spain" />
            </div>
          </div>
        </SectionHeader>
        <ImageWrapper>
          <Image className="mainImg" src={mapImage?.src} alt="Map Image" />
          <div className="countryIcon">
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon?.src}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon?.src}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon?.src}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon?.src}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon?.src}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon?.src}
                alt="Country Icon"
              />
            </div>
            <div className="countryIconSingle">
              <Image
                className="countryIconImg"
                src={countryIcon?.src}
                alt="Country Icon"
              />
            </div>
          </div>
        </ImageWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default MapSection;
