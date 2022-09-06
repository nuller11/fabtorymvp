import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Stack, Line, Button, Input } from "components";

const FactoriesDetailsPage = () => {
  const navigate = useNavigate();

  function handleNavigate34() {
    navigate("/landingpage");
  }
  function handleNavigate35() {
    navigate("/factories");
  }
  function handleNavigate36() {
    navigate("/frameone");
  }
  function handleNavigate40() {
    navigate("/factories");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-end mx-[auto] lg:pt-[19px] xl:pt-[22px] 2xl:pt-[25px] 3xl:pt-[30px] w-[100%]">
        <Row className="w-[90%]">
          <Img
            src="images/img_frame_3.svg"
            className="common-pointer 3xl:h-[107px] lg:h-[70px] xl:h-[80px] 2xl:h-[90px] w-[23%]"
            onClick={handleNavigate40}
            alt="Frame"
          />
          <Text className="font-medium lg:ml-[275px] xl:ml-[314px] 2xl:ml-[354px] 3xl:ml-[425px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
            New & Feature
          </Text>
          <Text className="font-medium lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
            For Brand
          </Text>
          <Text className="font-medium lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
            For You
          </Text>
          <Text className="font-medium lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
            For Enterprise
          </Text>
          <Img
            src="images/img_arrowdown.svg"
            className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] w-[6px]"
            alt="arrowdown"
          />
          <Text className="font-bold ml-[3px] lg:mt-[18px] xl:mt-[21px] 2xl:mt-[24px] 3xl:mt-[28px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
            Join Us
          </Text>
        </Row>
        <Column className="items-center lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[100%]">
          <div className="bg-yellow_800 lg:h-[58px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] w-[100%]"></div>
          <Stack className="lg:h-[476px] xl:h-[545px] 2xl:h-[613px] 3xl:h-[735px] w-[100%]">
            <Img
              src="images/img_rectangle77.png"
              className="absolute lg:h-[375px] xl:h-[429px] 2xl:h-[483px] 3xl:h-[579px] top-[0] w-[100%]"
              alt="RectangleSeventySeven"
            />
            <Column
              className="absolute bg-cover bg-repeat bottom-[0] inset-x-[0] mx-[auto] lg:p-[101px] xl:p-[115px] 2xl:p-[130px] 3xl:p-[156px] w-[90%]"
              style={{ backgroundImage: "url('images/img_group5.svg')" }}
            >
              <Text className="font-bold lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-bluegray_400 w-[auto]">
                BSK Textiles Company Limited
              </Text>
            </Column>
          </Stack>
          <Row className="items-center lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] w-[90%]">
            <Img
              src="images/img_rectangle92.png"
              className="lg:h-[204px] xl:h-[234px] 2xl:h-[263px] 3xl:h-[315px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[23%]"
              alt="RectangleNinetyTwo"
            />
            <Img
              src="images/img_rectangle116.png"
              className="lg:h-[204px] xl:h-[234px] 2xl:h-[263px] 3xl:h-[315px] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[31%]"
              alt="Rectangle116"
            />
            <Img
              src="images/img_rectangle117.png"
              className="lg:h-[204px] xl:h-[234px] 2xl:h-[263px] 3xl:h-[315px] lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[40%]"
              alt="Rectangle117"
            />
          </Row>
          <Row className="items-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[90%]">
            <Img
              src="images/img_rectangle118.png"
              className="lg:h-[204px] xl:h-[234px] 2xl:h-[263px] 3xl:h-[315px] w-[31%]"
              alt="Rectangle118"
            />
            <Img
              src="images/img_rectangle119.png"
              className="lg:h-[204px] xl:h-[234px] 2xl:h-[263px] 3xl:h-[315px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[31%]"
              alt="Rectangle119"
            />
            <Img
              src="images/img_rectangle120.png"
              className="lg:h-[204px] xl:h-[234px] 2xl:h-[263px] 3xl:h-[315px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] w-[31%]"
              alt="Rectangle120"
            />
          </Row>
          <Row className="lg:mt-[48px] xl:mt-[55px] 2xl:mt-[62px] 3xl:mt-[74px] w-[90%]">
            <Column className="w-[66%]">
              <Text className="font-bold lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-black_900 w-[auto]">
                BSK Textiles Company Limited
              </Text>
              <Row className="2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] w-[13%]">
                <Img
                  src="images/img_star1_22X24.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] my-[1px] w-[21%]"
                  alt="StarOne"
                />
                <Img
                  src="images/img_star2_22X24.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] ml-[2px] w-[21%]"
                  alt="StarTwo"
                />
                <Img
                  src="images/img_star4_22X24.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] ml-[2px] w-[21%]"
                  alt="StarFour"
                />
                <Img
                  src="images/img_star3_22X24.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] ml-[2px] mt-[1px] w-[21%]"
                  alt="StarThree"
                />
                <Img
                  src="images/img_arrowleft.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[2px] mt-[1px] w-[10%]"
                  alt="arrowleft"
                />
              </Row>
            </Column>
            <Row
              className="common-pointer border border-red_600 border-solid justify-center 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:p-[6px] xl:p-[7px] 2xl:p-[8px] 3xl:p-[9px] rounded-radius5 w-[23%]"
              onClick={handleNavigate36}
            >
              <Text className="font-normal leading-[normal] xl:ml-[10px] 2xl:ml-[12px] 3xl:ml-[14px] lg:ml-[9px] lg:mt-[6px] xl:mt-[7px] 2xl:mt-[8px] 3xl:mt-[9px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center text-white_A700 w-[70%]">
                Send Technical File
                <br />
                to get the Quotation
              </Text>
              <Img
                src="images/img_checkmark.svg"
                className="lg:h-[11px] xl:h-[12px] 2xl:h-[14px] 3xl:h-[16px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[18px] 3xl:ml-[21px] 3xl:mr-[10px] lg:mr-[7px] xl:mr-[8px] 2xl:mr-[9px] lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[15%]"
                alt="checkmark"
              />
            </Row>
            <Stack
              className="bg-cover bg-repeat lg:h-[55px] xl:h-[63px] 2xl:h-[71px] 3xl:h-[85px] lg:ml-[24px] xl:ml-[28px] 2xl:ml-[32px] 3xl:ml-[38px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:px-[16px] xl:px-[18px] 2xl:px-[21px] 3xl:px-[25px] w-[9%]"
              style={{ backgroundImage: "url('images/img_group6.svg')" }}
            >
              <Img
                src="images/img_78.svg"
                className="absolute lg:h-[21px] xl:h-[24px] 2xl:h-[27px] 3xl:h-[32px] inset-[0] justify-center m-[auto] w-[41%]"
                alt="SeventyEight"
              />
            </Stack>
          </Row>
          <Row className="mt-[3px] w-[90%]">
            <Column className="items-center w-[77%]">
              <Column className="w-[94%]">
                <Row className="items-center w-[64%]">
                  <Text className="font-normal mb-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_600 w-[auto]">
                    Phet Kasem 3, Yaek 3, Khwaeng Wat Tha Phra, Khet Bangkok
                    Yai, 10600
                  </Text>
                  <Text className="font-normal lg:ml-[20px] xl:ml-[23px] 2xl:ml-[26px] 3xl:ml-[31px] mt-[1px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-red_600 underline w-[auto]">
                    Show on map
                  </Text>
                </Row>
                <Text className="font-medium leading-[normal] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[100%]">
                  {" "}
                  Thailand wholesale supplier, stockist, exporter, and source of
                  woven cotton fabric - Plain dyed and printed Cotton Lawn
                  (Muslin) for blouses and kids clothes, Cotton Poplin for
                  shirts. For shirting or uniforms, we also have Cotton
                  Chambray, Yarn dyed cotton, Cotton Twills, & Wrinkle free
                  cotton shirting fabric.{" "}
                </Text>
              </Column>
              <Column className="3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] w-[96%]">
                <Line className="bg-black_900 h-[1px] w-[100%]" />
                <Text className="font-normal lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                  Highlight
                </Text>
                <Row className="ml-[3px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[88%]">
                  <Img
                    src="images/img_group29.svg"
                    className="3xl:h-[100px] lg:h-[65px] xl:h-[74px] 2xl:h-[84px] w-[21%]"
                    alt="GroupTwentyNine"
                  />
                  <Img
                    src="images/img_group30.svg"
                    className="3xl:h-[100px] lg:h-[65px] xl:h-[74px] 2xl:h-[84px] lg:ml-[32px] xl:ml-[37px] 2xl:ml-[42px] 3xl:ml-[50px] w-[21%]"
                    alt="GroupThirty"
                  />
                  <Img
                    src="images/img_group31.svg"
                    className="3xl:h-[104px] lg:h-[67px] xl:h-[77px] 2xl:h-[87px] lg:ml-[28px] xl:ml-[32px] 2xl:ml-[36px] 3xl:ml-[43px] w-[22%]"
                    alt="GroupThirtyOne"
                  />
                  <Img
                    src="images/img_group32.svg"
                    className="3xl:h-[101px] lg:h-[66px] xl:h-[75px] 2xl:h-[85px] lg:ml-[31px] xl:ml-[35px] 2xl:ml-[40px] 3xl:ml-[48px] mt-[1px] w-[22%]"
                    alt="GroupThirtyTwo"
                  />
                </Row>
              </Column>
            </Column>
            <Column className="lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] w-[23%]">
              <Text className="font-bold lg:ml-[175px] xl:ml-[200px] 2xl:ml-[225px] 3xl:ml-[270px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
                Good
              </Text>
              <Text className="font-normal lg:ml-[159px] xl:ml-[182px] 2xl:ml-[205px] 3xl:ml-[246px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_600 w-[auto]">
                79 Reviews
              </Text>
              <Column className="items-center lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
                <Img
                  src="images/img_rectangle121.png"
                  className="lg:h-[193px] xl:h-[221px] 2xl:h-[249px] 3xl:h-[298px] w-[100%]"
                  alt="Rectangle121"
                />
                <Column className="bg-bluegray_102 justify-center lg:p-[10px] xl:p-[11px] 2xl:p-[13px] 3xl:p-[15px] rounded-bl-[10px] rounded-br-[10px] rounded-tl-[0] rounded-tr-[0] w-[100%]">
                  <Text className="font-bold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-black_900 w-[auto]">
                    Service by
                  </Text>
                  <Row className="items-end ml-[1px] lg:my-[10px] xl:my-[12px] 2xl:my-[14px] 3xl:my-[16px] w-[92%]">
                    <Text className="font-bold 2xl:mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] lg:text-[10px] xl:text-[12px] 2xl:text-[14px] 3xl:text-[16px] text-black_900 w-[auto]">
                      BSK Textiles Company Limited
                    </Text>
                    <Img
                      src="images/img_file.svg"
                      className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] lg:ml-[10px] xl:ml-[12px] 2xl:ml-[14px] 3xl:ml-[16px] w-[10%]"
                      alt="file"
                    />
                  </Row>
                </Column>
              </Column>
            </Column>
          </Row>
          <Stack className="lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[90%]">
            <Line className="absolute bg-gray_501 h-[1px] top-[0] w-[100%]" />
            <Text className="absolute font-normal h-[max-content] inset-y-[0] left-[0] my-[auto] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 w-[auto]">
              Product Reviews
            </Text>
            <Line className="absolute bg-gray_501 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] right-[34%] w-[1px]" />
            <Line className="absolute bg-gray_501 lg:h-[47px] xl:h-[54px] 2xl:h-[61px] 3xl:h-[73px] right-[16%] w-[1px]" />
            <Row className="absolute h-[max-content] inset-y-[0] items-center justify-center my-[auto] right-[18%] w-[15%]">
              <Img
                src="images/img_sort.svg"
                className="lg:h-[28px] xl:h-[33px] 2xl:h-[37px] 3xl:h-[44px] w-[21%]"
                alt="sort"
              />
              <Text className="font-medium lg:ml-[11px] xl:ml-[13px] 2xl:ml-[15px] 3xl:ml-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_602 w-[auto]">
                <span className="text-gray_602 font-inter">Sort by : </span>
                <span className="text-black_900 font-inter">Relevene</span>
              </Text>
            </Row>
            <Row className="absolute h-[max-content] inset-y-[0] items-center my-[auto] right-[0] w-[14%]">
              <Img
                src="images/img_filter.svg"
                className="lg:h-[31px] xl:h-[35px] 2xl:h-[40px] 3xl:h-[47px] w-[20%]"
                alt="filter"
              />
              <Text className="font-medium lg:ml-[29px] xl:ml-[33px] 2xl:ml-[38px] 3xl:ml-[45px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_602 w-[auto]">
                <span className="text-gray_602 font-inter">Filter : </span>
                <span className="text-black_900 font-inter">All star</span>
              </Text>
            </Row>
          </Stack>
          <Line className="bg-gray_501 h-[1px] w-[90%]" />
          <Row className="lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[90%]">
            <Column className="w-[14%]">
              <Row className="w-[64%]">
                <Img
                  src="images/img_star1_1.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] my-[1px] w-[21%]"
                  alt="StarOne One"
                />
                <Img
                  src="images/img_star2_1.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] ml-[2px] w-[21%]"
                  alt="StarTwo One"
                />
                <Img
                  src="images/img_star4_1.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] ml-[2px] w-[21%]"
                  alt="StarFour One"
                />
                <Img
                  src="images/img_star3_1.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] ml-[2px] mt-[1px] w-[21%]"
                  alt="StarThree One"
                />
                <Img
                  src="images/img_arrowleft.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[2px] mt-[1px] w-[10%]"
                  alt="arrowleft One"
                />
              </Row>
              <Text className="font-medium ml-[2px] lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_603 w-[auto]">
                By ****************jjjk
              </Text>
            </Column>
            <Stack className="lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] lg:ml-[12px] xl:ml-[14px] 2xl:ml-[16px] 3xl:ml-[19px] mt-[3px] w-[14%]">
              <Text className="absolute bottom-[5%] font-medium right-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-light_green_A100 w-[auto]">
                Verified Purchase
              </Text>
              <Img
                src="images/img_arrowdown_55X55.svg"
                className="absolute lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] left-[0] lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                alt="arrowdown One"
              />
            </Stack>
            <Text className="font-medium lg:ml-[640px] xl:ml-[733px] 2xl:ml-[824px] 3xl:ml-[989px] lg:mt-[31px] xl:mt-[35px] 2xl:mt-[40px] 3xl:mt-[48px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_603 w-[auto]">
              23 Oct 2022
            </Text>
          </Row>
          <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
            Cool design and nice service
          </Text>
          <Img
            src="images/img_messageimage16.png"
            className="lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[26%]"
            alt="messageImageSixteen"
          />
          <Row className="lg:mt-[26px] xl:mt-[30px] 2xl:mt-[34px] 3xl:mt-[40px] w-[3%]">
            <Img
              src="images/img_vector.svg"
              className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] mt-[1px] w-[46%]"
              alt="Vector"
            />
            <Text className="font-medium lg:ml-[4px] xl:ml-[5px] 2xl:ml-[6px] 3xl:ml-[7px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_603 w-[auto]">
              7
            </Text>
          </Row>
          <Line className="bg-gray_501 h-[1px] lg:mt-[38px] xl:mt-[43px] 2xl:mt-[49px] 3xl:mt-[58px] w-[90%]" />
          <Row className="lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] w-[90%]">
            <Column className="mb-[1px] w-[10%]">
              <Row className="w-[86%]">
                <Img
                  src="images/img_star1_2.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] my-[1px] w-[21%]"
                  alt="StarOne Two"
                />
                <Img
                  src="images/img_star2_2.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] ml-[2px] w-[21%]"
                  alt="StarTwo Two"
                />
                <Img
                  src="images/img_star4_2.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] mb-[1px] ml-[2px] w-[21%]"
                  alt="StarFour Two"
                />
                <Img
                  src="images/img_star3_2.svg"
                  className="lg:h-[18px] xl:h-[20px] 2xl:h-[23px] 3xl:h-[27px] ml-[2px] mt-[1px] w-[21%]"
                  alt="StarThree Two"
                />
                <Img
                  src="images/img_arrowleft.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] ml-[2px] mt-[1px] w-[10%]"
                  alt="arrowleft Two"
                />
              </Row>
              <Text className="font-medium ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_603 w-[auto]">
                By ********9898
              </Text>
            </Column>
            <Stack className="lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] mt-[3px] w-[14%]">
              <Text className="absolute bottom-[5%] font-medium right-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-light_green_A100 w-[auto]">
                Verified Purchase
              </Text>
              <Img
                src="images/img_arrowdown_55X55.svg"
                className="absolute lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] left-[0] lg:w-[42px] xl:w-[48px] 2xl:w-[55px] 3xl:w-[66px]"
                alt="arrowdown Two"
              />
            </Stack>
            <Text className="font-medium 3xl:ml-[1057px] lg:ml-[685px] xl:ml-[783px] 2xl:ml-[881px] lg:mt-[32px] xl:mt-[37px] 2xl:mt-[42px] 3xl:mt-[50px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_603 w-[auto]">
              18 Oct 2022
            </Text>
          </Row>
          <Text className="font-medium lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-black_900 w-[auto]">
            Nice work and so friendly, I would definitely be here for the
            service again
          </Text>
          <Row className="items-center lg:mt-[36px] xl:mt-[41px] 2xl:mt-[47px] 3xl:mt-[56px] w-[57%]">
            <Img
              src="images/img_messageimage16_228X381.png"
              className="lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] w-[46%]"
              alt="messageImageSixteen One"
            />
            <Img
              src="images/img_messageimage16_1.png"
              className="lg:h-[178px] xl:h-[203px] 2xl:h-[229px] 3xl:h-[274px] lg:ml-[51px] xl:ml-[58px] 2xl:ml-[66px] 3xl:ml-[79px] w-[46%]"
              alt="messageImageSixteen Two"
            />
          </Row>
          <Row className="items-center lg:mt-[25px] xl:mt-[29px] 2xl:mt-[33px] 3xl:mt-[39px] w-[4%]">
            <Img
              src="images/img_vector.svg"
              className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] w-[31%]"
              alt="Vector One"
            />
            <Text className="font-medium lg:ml-[10px] xl:ml-[11px] 2xl:ml-[13px] 3xl:ml-[15px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-gray_603 w-[auto]">
              18
            </Text>
          </Row>
          <Line className="bg-gray_501 h-[1px] 3xl:mt-[102px] lg:mt-[66px] xl:mt-[75px] 2xl:mt-[85px] w-[90%]" />
          <Row className="bg-orange_301 lg:mt-[211px] xl:mt-[241px] 2xl:mt-[272px] 3xl:mt-[326px] p-[1px] w-[90%]">
            <Img
              src="images/img_vector4.png"
              className="lg:h-[167px] xl:h-[191px] 2xl:h-[215px] 3xl:h-[257px] ml-[3px] mt-[1px] w-[43%]"
              alt="VectorFour"
            />
            <Text className="font-normal leading-[normal] ml-[1px] lg:mt-[57px] xl:mt-[65px] 2xl:mt-[74px] 3xl:mt-[88px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-white_A700 w-[23%]">
              An exclusive fabric factory that always <br />
              be your best service of all time
            </Text>
            <Button
              className="font-normal lg:ml-[154px] xl:ml-[177px] 2xl:ml-[199px] 3xl:ml-[238px] lg:mt-[47px] xl:mt-[54px] 2xl:mt-[61px] 3xl:mt-[73px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[12%]"
              shape="RoundedBorder10"
              size="md"
              variant="FillWhiteA700"
            >
              Let’s Go!
            </Button>
            <Img
              src="images/img_close.svg"
              className="lg:h-[21px] xl:h-[25px] 2xl:h-[28px] 3xl:h-[33px] lg:ml-[35px] xl:ml-[40px] 2xl:ml-[46px] 3xl:ml-[55px] lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[2%]"
              alt="close"
            />
          </Row>
          <footer className="bg-orange_101 lg:mt-[62px] xl:mt-[71px] 2xl:mt-[80px] 3xl:mt-[96px] w-[100%]">
            <Row className="lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:mr-[56px] xl:mr-[64px] 2xl:mr-[73px] 3xl:mr-[87px] xl:mt-[113px] 2xl:mt-[128px] 3xl:mt-[153px] lg:mt-[99px] w-[90%]">
              <Column className="w-[77%]">
                <Img
                  src="images/img_frame_4.svg"
                  className="lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] w-[18%]"
                  alt="Frame One"
                />
                <Column className="2xl:ml-[10px] 3xl:ml-[12px] lg:ml-[7px] xl:ml-[8px] lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] w-[51%]">
                  <Text className="font-normal lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
                    one-stop made by your choices
                  </Text>
                  <Row className="items-center justify-evenly lg:mt-[11px] xl:mt-[13px] 2xl:mt-[15px] 3xl:mt-[18px] w-[100%]">
                    <Input
                      className="font-normal not-italic p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-red_301 text-red_301 w-[100%]"
                      wrapClassName="w-[78%]"
                      type="email"
                      name="GroupThree"
                      placeholder="Email"
                      size="sm"
                    ></Input>
                    <Button
                      className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center w-[22%]"
                      variant="OutlineRed600"
                    >
                      Send
                    </Button>
                  </Row>
                </Column>
              </Column>
              <Column className="lg:mt-[10px] xl:mt-[11px] 2xl:mt-[13px] 3xl:mt-[15px] w-[23%]">
                <Row className="items-center justify-between ml-[2px] w-[99%]">
                  <Text
                    className="common-pointer font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]"
                    onClick={handleNavigate34}
                  >
                    Home{" "}
                  </Text>
                  <Text className="font-medium mt-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
                    Facebook
                  </Text>
                </Row>
                <Row className="justify-between ml-[2px] lg:mt-[14px] xl:mt-[16px] 2xl:mt-[18px] 3xl:mt-[21px] w-[99%]">
                  <Text className="font-medium lg:mb-[3px] xl:mb-[4px] 2xl:mb-[5px] 3xl:mb-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
                    About{" "}
                  </Text>
                  <Text className="font-medium lg:mt-[3px] xl:mt-[4px] 2xl:mt-[5px] 3xl:mt-[6px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
                    Instagram
                  </Text>
                </Row>
                <Text className="font-medium ml-[2px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
                  Services
                </Text>
                <Text className="font-medium ml-[2px] lg:mt-[15px] xl:mt-[17px] 2xl:mt-[20px] 3xl:mt-[24px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
                  Contact
                </Text>
                <Img
                  src="images/img_frame_5.svg"
                  className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] 3xl:mt-[110px] lg:mt-[71px] xl:mt-[81px] 2xl:mt-[92px] w-[38%]"
                  alt="Frame Two"
                />
                <Text className="font-normal ml-[2px] mt-[3px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 w-[auto]">
                  PRIVACY POLICY
                </Text>
                <Text className="font-normal ml-[2px] mt-[3px] not-italic xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] lg:text-[9px] text-red_600 w-[auto]">
                  TERMS AND CONDITIONS{" "}
                </Text>
              </Column>
            </Row>
          </footer>
        </Column>
      </Column>
    </>
  );
};

export default FactoriesDetailsPage;
