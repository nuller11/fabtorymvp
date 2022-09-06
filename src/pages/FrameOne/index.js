import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Img, Row, Text, Button } from "components";

const FrameOnePage = () => {
  const navigate = useNavigate();

  function handleNavigate31() {
    navigate("/landingpage");
  }
  function handleNavigate32() {
    navigate("/one");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter mx-[auto] lg:p-[39px] xl:p-[45px] 2xl:p-[51px] 3xl:p-[61px] w-[100%]">
        <Img
          src="images/img_frame_87X289.svg"
          className="common-pointer 3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] w-[22%]"
          onClick={handleNavigate31}
          alt="Frame"
        />
        <Column className="items-center 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] 2xl:mb-[9px] lg:ml-[26px] xl:ml-[30px] 2xl:ml-[34px] 3xl:ml-[40px] lg:mt-[31px] xl:mt-[36px] 2xl:mt-[41px] 3xl:mt-[49px] w-[94%]">
          <Row className="items-center w-[100%]">
            <Img
              src="images/img_mockup021.png"
              className="lg:h-[466px] xl:h-[533px] 2xl:h-[600px] 3xl:h-[720px] lg:w-[465px] xl:w-[532px] 2xl:w-[599px] 3xl:w-[719px]"
              alt="MockUp021"
            />
            <Img
              src="images/img_mockup04.png"
              className="lg:h-[466px] xl:h-[533px] 2xl:h-[600px] 3xl:h-[720px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[54px] 3xl:ml-[64px] lg:w-[465px] xl:w-[532px] 2xl:w-[599px] 3xl:w-[719px]"
              alt="MockUpFour"
            />
          </Row>
          <Row className="lg:mt-[34px] xl:mt-[39px] 2xl:mt-[44px] 3xl:mt-[52px] w-[98%]">
            <Text className="font-normal lg:mt-[12px] xl:mt-[14px] 2xl:mt-[16px] 3xl:mt-[19px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
              T-Shirt
            </Text>
            <Button
              className="common-pointer font-medium lg:ml-[224px] xl:ml-[257px] 2xl:ml-[289px] 3xl:ml-[347px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[14%]"
              onClick={handleNavigate32}
              shape="RoundedBorder33"
              size="lg"
              variant="OutlineBlack900"
            >
              Customize
            </Button>
            <Text className="font-normal 2xl:ml-[110px] 3xl:ml-[132px] lg:ml-[85px] xl:ml-[97px] lg:mt-[16px] xl:mt-[18px] 2xl:mt-[21px] 3xl:mt-[25px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
              Bag
            </Text>
            <Button
              className="font-medium lg:ml-[244px] xl:ml-[279px] 2xl:ml-[314px] 3xl:ml-[377px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[14%]"
              shape="RoundedBorder33"
              size="lg"
              variant="OutlineBlack900"
            >
              Customize
            </Button>
          </Row>
          <Row className="items-center lg:mt-[28px] xl:mt-[32px] 2xl:mt-[36px] 3xl:mt-[43px] w-[100%]">
            <Img
              src="images/img_mockup01.png"
              className="lg:h-[466px] xl:h-[533px] 2xl:h-[600px] 3xl:h-[720px] lg:w-[465px] xl:w-[532px] 2xl:w-[599px] 3xl:w-[719px]"
              alt="MockUpOne"
            />
            <Img
              src="images/img_mockup03.png"
              className="lg:h-[466px] xl:h-[533px] 2xl:h-[600px] 3xl:h-[720px] lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] w-[47%]"
              alt="MockUpThree"
            />
          </Row>
          <Row className="items-center lg:mt-[45px] xl:mt-[51px] 2xl:mt-[58px] 3xl:mt-[69px] w-[98%]">
            <Text className="font-normal lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
              Jacket
            </Text>
            <Button
              className="font-medium lg:ml-[227px] xl:ml-[259px] 2xl:ml-[292px] 3xl:ml-[350px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[14%]"
              shape="RoundedBorder33"
              size="lg"
              variant="OutlineBlack900"
            >
              Customize
            </Button>
            <Text className="font-normal 3xl:ml-[115px] lg:ml-[74px] xl:ml-[85px] 2xl:ml-[96px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
              Pants
            </Text>
            <Button
              className="font-medium lg:ml-[233px] xl:ml-[266px] 2xl:ml-[300px] 3xl:ml-[360px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[14%]"
              shape="RoundedBorder33"
              size="lg"
              variant="OutlineBlack900"
            >
              Customize
            </Button>
          </Row>
        </Column>
      </Column>
    </>
  );
};

export default FrameOnePage;
