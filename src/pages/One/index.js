import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Button, Text } from "components";

const OnePage = () => {
  const navigate = useNavigate();

  function handleNavigate15() {
    navigate("/landingpage");
  }
  function handleNavigate16() {
    navigate("/two");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter mx-[auto] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
        <Row className="lg:mb-[151px] xl:mb-[173px] 2xl:mb-[195px] 3xl:mb-[234px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[45px] 3xl:ml-[54px] w-[86%]">
          <Column className="w-[75%]">
            <Img
              src="images/img_frame_8.svg"
              className="common-pointer 3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] w-[32%]"
              onClick={handleNavigate15}
              alt="Frame"
            />
            <Img
              src="images/img_tshirt1011_521X744.png"
              className="lg:h-[406px] xl:h-[464px] 2xl:h-[522px] 3xl:h-[626px] lg:mt-[131px] xl:mt-[150px] 2xl:mt-[169px] 3xl:mt-[202px] w-[83%]"
              alt="tshirt1011"
            />
          </Column>
          <Column className="items-center lg:mt-[334px] xl:mt-[382px] 2xl:mt-[430px] 3xl:mt-[516px] w-[25%]">
            <Button
              className="common-pointer font-medium lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center w-[100%]"
              onClick={handleNavigate16}
              shape="RoundedBorder33"
              variant="OutlineBlack900"
            >
              Customize
            </Button>
            <Text className="font-normal lg:mt-[45px] xl:mt-[52px] 2xl:mt-[59px] 3xl:mt-[70px] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
              T-Shirt
            </Text>
          </Column>
        </Row>
      </Column>
    </>
  );
};

export default OnePage;
