import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Stack, Img, Text, Button } from "components";

const SevenPage = () => {
  const navigate = useNavigate();

  function handleNavigate22() {
    navigate("/landingpage");
  }
  function handleNavigate23() {
    navigate("/eight");
  }
  function handleNavigate24() {
    navigate("/eight");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter mx-[auto] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] w-[100%]">
        <Column className="items-center mx-[auto] w-[94%]">
          <Row className="w-[100%]">
            <Column className="lg:h-[608px] xl:h-[695px] 2xl:h-[782px] 3xl:h-[938px] lg:w-[607px] xl:w-[694px] 2xl:w-[781px] 3xl:w-[937px]">
              <Stack
                className="bg-cover bg-repeat 3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] w-[37%]"
                style={{ backgroundImage: "url('images/img_group25.svg')" }}
              >
                <Img
                  src="images/img_frame_14.svg"
                  className="common-pointer absolute 3xl:h-[105px] lg:h-[68px] xl:h-[78px] 2xl:h-[88px] w-[100%]"
                  onClick={handleNavigate22}
                  alt="Frame"
                />
              </Stack>
              <Img
                src="images/img_tshirt1011_3.png"
                className="lg:h-[406px] xl:h-[464px] 2xl:h-[522px] 3xl:h-[626px] lg:mt-[134px] xl:mt-[153px] 2xl:mt-[173px] 3xl:mt-[207px] w-[95%]"
                alt="tshirt1012"
              />
            </Column>
            <Column className="items-center 3xl:mt-[112px] lg:mt-[73px] xl:mt-[83px] 2xl:mt-[94px] w-[40%]">
              <Column className="bg-white_A700 border border-black_900 border-solid lg:p-[16px] xl:p-[18px] 2xl:p-[21px] 3xl:p-[25px] rounded-radius27 w-[100%]">
                <Text className="font-normal ml-[3px] lg:mr-[195px] xl:mr-[223px] 2xl:mr-[251px] 3xl:mr-[301px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                  Up Load Logo Files
                </Text>
                <Stack className="lg:h-[46px] xl:h-[52px] 2xl:h-[59px] 3xl:h-[70px] lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] lg:ml-[142px] xl:ml-[162px] 2xl:ml-[183px] 3xl:ml-[219px] lg:mt-[17px] xl:mt-[20px] 2xl:mt-[23px] 3xl:mt-[27px] w-[17%]">
                  <Img
                    src="images/img_vector7strok.svg"
                    className="absolute lg:h-[39px] xl:h-[45px] 2xl:h-[51px] 3xl:h-[61px] left-[36%] top-[0] w-[20%]"
                    alt="Vector7Strok"
                  />
                  <Img
                    src="images/img_menu_21X80.svg"
                    className="absolute bottom-[0] lg:h-[17px] xl:h-[19px] 2xl:h-[22px] 3xl:h-[26px] w-[100%]"
                    alt="menu"
                  />
                </Stack>
              </Column>
              <Column className="bg-white_A700 border border-black_900 border-solid items-center lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] lg:p-[10px] xl:p-[12px] 2xl:p-[14px] 3xl:p-[16px] rounded-radius27 w-[100%]">
                <Text className="font-medium leading-[normal] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-black_900 text-center w-[67%]">
                  You can upload your own logo/text, <br />
                  and drag or scale at the space you
                  <br />
                  want to print
                </Text>
                <Row className="items-center justify-center xl:mb-[10px] 2xl:mb-[12px] 3xl:mb-[14px] lg:mb-[9px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[60%]">
                  <Button
                    className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[39%]"
                    shape="RoundedBorder10"
                  >
                    CANCEL
                  </Button>
                  <Button
                    className="common-pointer font-medium lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[39%]"
                    onClick={handleNavigate23}
                    shape="RoundedBorder10"
                  >
                    NEXT
                  </Button>
                </Row>
              </Column>
            </Column>
          </Row>
        </Column>
        <Column className="items-end 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] mx-[auto] lg:px-[188px] xl:px-[215px] 2xl:px-[242px] 3xl:px-[290px] w-[94%]">
          <Text className="font-medium lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
            T - Shirt
          </Text>
        </Column>
        <Row className="3xl:mb-[117px] lg:mb-[76px] xl:mb-[87px] 2xl:mb-[98px] lg:ml-[138px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] xl:mt-[10px] 2xl:mt-[12px] 3xl:mt-[14px] lg:mt-[9px] w-[69%]">
          <Text className="font-normal lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-black_900 w-[auto]">
            T - Shirt stripe collar color 4/5
            <br />
          </Text>
          <Button
            className="common-pointer font-medium lg:ml-[298px] xl:ml-[341px] 2xl:ml-[384px] 3xl:ml-[461px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-center w-[12%]"
            onClick={handleNavigate24}
            shape="RoundedBorder10"
          >
            DONE
          </Button>
        </Row>
      </Column>
    </>
  );
};

export default SevenPage;
