import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Img, Row, Text, Button } from "components";

const EightPage = () => {
  const navigate = useNavigate();

  function handleNavigate29() {
    navigate("/landingpage");
  }
  function handleNavigate30() {
    navigate("/factories");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter mx-[auto] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
        <Img
          src="images/img_frame_15.svg"
          className="common-pointer 3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] w-[21%]"
          onClick={handleNavigate29}
          alt="Frame"
        />
        <Row className="lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] xl:mt-[107px] 2xl:mt-[121px] 3xl:mt-[145px] lg:mt-[94px] w-[88%]">
          <Img
            src="images/img_tshirt1011.png"
            className="lg:h-[406px] xl:h-[464px] 2xl:h-[522px] 3xl:h-[626px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[61%]"
            alt="tshirt1011"
          />
          <Text className="font-normal leading-[151.02%] xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:ml-[59px] xl:ml-[68px] 2xl:ml-[77px] 3xl:ml-[92px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[33%]">
            Fabric: 100% polyester bideye 180 gsm
            <br />
            <br />
            Style: as per the original sample with:
            <br />
            <br />- pantone 7455C blue short sleeves <br />- contrast pantone
            703C red collar <br />- pantone 7455C blue stripe collar <br />
            <br />
            <br />
            <br />
            Sizes: S-XL <br />
            Color:
            <br />
            <br />- white <br />
            <br />- pantone 7455C
            <br />
            <br />- pantone 703C
            <br />
            <br />
            Label: woven main + size label in neck
            <br />
            <br />
            <br />
            Logo: print on left chest and back
            <br />
            <br />
            <br />
            Packing: ind. self-adhesive poly bag <br />
            with size indication in white
            <br />
            <br />
            <br />
            Packaging: per 50 pcs in export carton, solid sizes
            <br />
          </Text>
        </Row>
        <Row className="items-center xl:ml-[101px] 2xl:ml-[114px] 3xl:ml-[136px] lg:ml-[88px] 2xl:my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] w-[75%]">
          <Img
            src="images/img_image1.png"
            className="lg:h-[137px] xl:h-[156px] 2xl:h-[176px] 3xl:h-[211px] w-[61%]"
            alt="imageOne"
          />
          <Column className="lg:ml-[211px] xl:ml-[241px] 2xl:ml-[272px] 3xl:ml-[326px] w-[13%]">
            <Text className="font-medium lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
              T - Shirt
            </Text>
            <Button
              className="font-medium lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[100%]"
              shape="RoundedBorder10"
            >
              Find the factories
            </Button>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default EightPage;
