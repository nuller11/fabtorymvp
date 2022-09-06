import React from "react";

import { useNavigate } from "react-router-dom";
import { Column, Row, Img, Text, Button, Input } from "components";

const LandingpagePage = () => {
  const navigate = useNavigate();

  function handleNavigate17() {
    navigate("/factories");
  }
  function handleNavigate18() {
    navigate("/factories");
  }
  function handleNavigate19() {
    navigate("/frameone");
  }

  return (
    <>
      <Column className="bg-white_A700 font-inter items-center justify-end mx-[auto] lg:pt-[18px] xl:pt-[21px] 2xl:pt-[24px] 3xl:pt-[28px] w-[100%]">
        <Column className="w-[90%]">
          <Row className="w-[100%]">
            <Img
              src="images/img_frame.svg"
              className="3xl:h-[107px] lg:h-[70px] xl:h-[80px] 2xl:h-[90px] w-[23%]"
              alt="Frame"
            />
            <Text className="font-medium lg:ml-[278px] xl:ml-[318px] 2xl:ml-[358px] 3xl:ml-[429px] lg:mt-[24px] xl:mt-[28px] 2xl:mt-[32px] 3xl:mt-[38px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
              New & Feature
            </Text>
            <Text className="font-medium lg:ml-[39px] xl:ml-[45px] 2xl:ml-[51px] 3xl:ml-[61px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
              For Brand
            </Text>
            <Text className="font-medium lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
              For You
            </Text>
            <Text className="font-medium lg:ml-[45px] xl:ml-[51px] 2xl:ml-[58px] 3xl:ml-[69px] lg:mt-[23px] xl:mt-[26px] 2xl:mt-[30px] 3xl:mt-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
              For Enterprise
            </Text>
            <Img
              src="images/img_arrowdown.svg"
              className="lg:h-[15px] xl:h-[17px] 2xl:h-[20px] 3xl:h-[23px] lg:ml-[42px] xl:ml-[48px] 2xl:ml-[55px] 3xl:ml-[66px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[6px]"
              alt="arrowdown"
            />
            <Text className="font-bold ml-[3px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
              Join Us
            </Text>
          </Row>
          <Row className="items-center justify-between lg:mt-[13px] xl:mt-[15px] 2xl:mt-[17px] 3xl:mt-[20px] w-[100%]">
            <Img
              src="images/img_vector_blue_900.svg"
              className="lg:h-[587px] xl:h-[671px] 2xl:h-[755px] 3xl:h-[906px] w-[48%]"
              alt="Vector"
            />
            <Column className="w-[48%]">
              <Row className="justify-between lg:ml-[16px] xl:ml-[18px] 2xl:ml-[21px] 3xl:ml-[25px] w-[97%]">
                <Img
                  src="images/img_frame_indigo_601.svg"
                  className="lg:h-[175px] xl:h-[201px] 2xl:h-[226px] 3xl:h-[271px] lg:mt-[43px] xl:mt-[49px] 2xl:mt-[56px] 3xl:mt-[67px] w-[39%]"
                  alt="Frame One"
                />
                <Img
                  src="images/img_rectangle2.png"
                  className="lg:h-[276px] xl:h-[315px] 2xl:h-[355px] 3xl:h-[426px] w-[49%]"
                  alt="RectangleTwo"
                />
              </Row>
              <Row className="lg:mt-[22px] xl:mt-[25px] 2xl:mt-[29px] 3xl:mt-[34px] w-[95%]">
                <Img
                  src="images/img_rectangle3.png"
                  className="lg:h-[276px] xl:h-[315px] 2xl:h-[355px] 3xl:h-[426px] w-[49%]"
                  alt="RectangleThree"
                />
                <Img
                  src="images/img_frame_indigo_601_74X248.svg"
                  className="lg:h-[58px] xl:h-[66px] 2xl:h-[75px] 3xl:h-[89px] lg:ml-[43px] xl:ml-[49px] 2xl:ml-[56px] 3xl:ml-[67px] lg:mt-[126px] xl:mt-[144px] 2xl:mt-[162px] 3xl:mt-[194px] w-[41%]"
                  alt="Frame Two"
                />
              </Row>
            </Column>
          </Row>
          <Button
            className="common-pointer font-normal lg:ml-[411px] xl:ml-[470px] 2xl:ml-[529px] 3xl:ml-[635px] 3xl:mt-[118px] lg:mt-[77px] xl:mt-[88px] 2xl:mt-[99px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-center w-[19%]"
            onClick={handleNavigate19}
            shape="RoundedBorder13"
            variant="FillOrangeA201"
          >
            Customize
          </Button>
          <Text className="font-bold lg:ml-[381px] xl:ml-[435px] 2xl:ml-[490px] 3xl:ml-[588px] lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] lg:text-[37px] xl:text-[42px] 2xl:text-[48px] 3xl:text-[57px] text-black_900 w-[auto]">
            It’s about you{" "}
          </Text>
          <Text className="font-medium leading-[normal] lg:ml-[337px] xl:ml-[386px] 2xl:ml-[434px] 3xl:ml-[521px] lg:mt-[33px] xl:mt-[38px] 2xl:mt-[43px] 3xl:mt-[51px] lg:text-[18px] xl:text-[21px] 2xl:text-[24px] 3xl:text-[28px] text-black_900 text-center w-[33%]">
            Start with your ideas and make it real.
            <br />
            Your choices and your styles.{" "}
          </Text>
          <Text className="font-normal lg:ml-[286px] xl:ml-[327px] 2xl:ml-[368px] 3xl:ml-[441px] xl:mt-[106px] 2xl:mt-[120px] 3xl:mt-[144px] lg:mt-[93px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-black_900 w-[auto]">
            How to create custom products.
          </Text>
          <Row className="items-end 3xl:ml-[106px] lg:ml-[69px] xl:ml-[79px] 2xl:ml-[89px] lg:mt-[63px] xl:mt-[72px] 2xl:mt-[81px] 3xl:mt-[97px] w-[81%]">
            <Img
              src="images/img_frame_168X229.svg"
              className="lg:h-[131px] xl:h-[150px] 2xl:h-[169px] 3xl:h-[202px] lg:mb-[5px] xl:mb-[6px] 2xl:mb-[7px] 3xl:mb-[8px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[22%]"
              alt="Frame Three"
            />
            <Img
              src="images/img_frame_206X248.svg"
              className="lg:h-[161px] xl:h-[184px] 2xl:h-[207px] 3xl:h-[248px] lg:ml-[161px] xl:ml-[185px] 2xl:ml-[208px] 3xl:ml-[249px] w-[23%]"
              alt="Frame Four"
            />
            <Img
              src="images/img_frame_192X148.svg"
              className="lg:h-[150px] xl:h-[171px] 2xl:h-[193px] 3xl:h-[231px] mb-[3px] lg:ml-[175px] xl:ml-[201px] 2xl:ml-[226px] 3xl:ml-[271px] 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] w-[14%]"
              alt="Frame Five"
            />
          </Row>
          <Img
            src="images/img_union.svg"
            className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] lg:ml-[141px] xl:ml-[161px] 2xl:ml-[182px] 3xl:ml-[218px] lg:mt-[24px] xl:mt-[27px] 2xl:mt-[31px] 3xl:mt-[37px] w-[70%]"
            alt="Union"
          />
          <Row className="justify-between xl:ml-[111px] 2xl:ml-[125px] 3xl:ml-[150px] lg:ml-[97px] lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[79%]">
            <Text className="font-medium mb-[4px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-red_600 w-[auto]">
              Select catagories
            </Text>
            <Text className="font-medium mt-[4px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-red_600 w-[auto]">
              Add your designs
            </Text>
            <Text className="font-medium mt-[1px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-red_600 w-[auto]">
              Select factories
            </Text>
          </Row>
          <Row className="lg:ml-[24px] xl:ml-[27px] 2xl:ml-[31px] 3xl:ml-[37px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[27px] 3xl:mt-[32px] w-[85%]">
            <Text className="font-normal not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-orange_A201 w-[auto]">
              Choose from a hundred product in our catalog
            </Text>
            <Text className="font-normal leading-[normal] lg:ml-[62px] xl:ml-[71px] 2xl:ml-[80px] 3xl:ml-[96px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-center text-orange_A201 w-[34%]">
              Upload your own design, edit by yourself or let our designer help
              you
            </Text>
            <Text className="font-normal lg:ml-[125px] xl:ml-[143px] 2xl:ml-[161px] 3xl:ml-[193px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-orange_A201 w-[auto]">
              Order it and enjoy!
            </Text>
          </Row>
          <Row className="items-center ml-[1px] lg:mt-[106px] xl:mt-[121px] 2xl:mt-[137px] 3xl:mt-[164px] w-[92%]">
            <Img
              src="images/img_rectangle72.png"
              className="lg:h-[437px] xl:h-[500px] 2xl:h-[562px] 3xl:h-[674px] w-[60%]"
              alt="RectangleSeventyTwo"
            />
            <Column className="items-center lg:ml-[138px] xl:ml-[158px] 2xl:ml-[178px] 3xl:ml-[213px] w-[25%]">
              <Text className="font-normal leading-[normal] lg:text-[24px] xl:text-[28px] 2xl:text-[32px] 3xl:text-[38px] text-center text-red_600 w-[100%]">
                Select the factories <br />
                that fit to you.
              </Text>
              <Button
                className="common-pointer font-normal lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] lg:text-[15px] xl:text-[17px] 2xl:text-[20px] 3xl:text-[24px] text-center w-[69%]"
                onClick={handleNavigate18}
                shape="RoundedBorder13"
                size="md"
                variant="FillOrangeA201"
              >
                Explore
              </Button>
            </Column>
          </Row>
          <Text className="font-normal lg:ml-[305px] xl:ml-[349px] 2xl:ml-[393px] 3xl:ml-[471px] lg:mt-[147px] xl:mt-[169px] 2xl:mt-[190px] 3xl:mt-[228px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-red_600 w-[auto]">
            Why customize with Fabtory?
          </Text>
          <Row className="bg-white_A700 justify-end xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] lg:p-[20px] xl:p-[23px] 2xl:p-[26px] 3xl:p-[31px] shadow-bs w-[82%]">
            <Column className="items-center lg:mt-[20px] xl:mt-[23px] 2xl:mt-[26px] 3xl:mt-[31px] w-[59%]">
              <Row className="w-[91%]">
                <Img
                  src="images/img_map.svg"
                  className="lg:h-[32px] xl:h-[37px] 2xl:h-[42px] 3xl:h-[50px] mt-[1px] lg:w-[31px] xl:w-[36px] 2xl:w-[41px] 3xl:w-[49px]"
                  alt="map"
                />
                <Column className="lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] w-[79%]">
                  <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_600 w-[auto]">
                    No minimums
                  </Text>
                  <Text className="font-normal leading-[121.02%] 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] 2xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-orange_A201 w-[92%]">
                    Save money and stop over-ordering product product stock by
                    having your products made only when someone buys them
                  </Text>
                </Column>
                <Img
                  src="images/img_settings.svg"
                  className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] lg:ml-[14px] xl:ml-[16px] 2xl:ml-[19px] 3xl:ml-[22px] mt-[1px] w-[6%]"
                  alt="settings"
                />
              </Row>
              <Column className="items-center lg:mt-[54px] xl:mt-[62px] 2xl:mt-[70px] 3xl:mt-[84px] w-[93%]">
                <Row className="items-center justify-between w-[100%]">
                  <Row className="justify-between w-[63%]">
                    <Img
                      src="images/img_ticket.svg"
                      className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] w-[14%]"
                      alt="ticket"
                    />
                    <Column className="mt-[4px] w-[81%]">
                      <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_600 w-[auto]">
                        Top quality
                      </Text>
                      <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-orange_A201 w-[auto]">
                        Ofer the best quality for your product
                      </Text>
                    </Column>
                  </Row>
                  <Img
                    src="images/img_menu.svg"
                    className="lg:h-[32px] xl:h-[36px] 2xl:h-[41px] 3xl:h-[49px] w-[9%]"
                    alt="menu"
                  />
                </Row>
                <Row className="justify-between lg:mt-[61px] xl:mt-[70px] 2xl:mt-[79px] 3xl:mt-[94px] w-[99%]">
                  <Img
                    src="images/img_volume.svg"
                    className="lg:h-[35px] xl:h-[41px] 2xl:h-[46px] 3xl:h-[55px] mt-[1px] lg:w-[35px] xl:w-[40px] 2xl:w-[45px] 3xl:w-[54px]"
                    alt="volume"
                  />
                  <Column className="lg:mt-[4px] xl:mt-[5px] 2xl:mt-[6px] 3xl:mt-[7px] w-[77%]">
                    <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_600 w-[auto]">
                      Worldwide shipping
                    </Text>
                    <Text className="font-normal 2xl:mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-orange_A201 w-[auto]">
                      Reach to you whereever you are
                    </Text>
                  </Column>
                  <Img
                    src="images/img_bookmark.svg"
                    className="lg:h-[38px] xl:h-[43px] 2xl:h-[49px] 3xl:h-[58px] mb-[3px] w-[7%]"
                    alt="bookmark"
                  />
                </Row>
              </Column>
            </Column>
            <Column className="lg:mb-[27px] xl:mb-[31px] 2xl:mb-[35px] 3xl:mb-[42px] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[39%]">
              <Text className="font-normal lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_600 w-[auto]">
                24/7 customer support
              </Text>
              <Text className="font-normal lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-orange_A201 w-[auto]">
                You have a question? Let’s us answer and help you.
              </Text>
              <Text className="font-normal ml-[1px] 2xl:mt-[112px] 3xl:mt-[134px] lg:mt-[87px] xl:mt-[99px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_600 w-[auto]">
                Special discount
              </Text>
              <Text className="font-normal leading-[121.02%] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-orange_A201 w-[100%]">
                Special discount for peak season or large amount of the product.
              </Text>
              <Text className="font-normal ml-[1px] lg:mt-[52px] xl:mt-[60px] 2xl:mt-[68px] 3xl:mt-[81px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-red_600 w-[auto]">
                Customize just for you
              </Text>
              <Text className="font-normal leading-[121.02%] ml-[1px] lg:mt-[5px] xl:mt-[6px] 2xl:mt-[7px] 3xl:mt-[8px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-orange_A201 w-[92%]">
                Add unique labels, and branding options to your product
              </Text>
            </Column>
          </Row>
          <Text className="font-normal lg:ml-[273px] xl:ml-[313px] 2xl:ml-[352px] 3xl:ml-[422px] lg:mt-[64px] xl:mt-[73px] 2xl:mt-[83px] 3xl:mt-[99px] lg:text-[28px] xl:text-[32px] 2xl:text-[36px] 3xl:text-[43px] text-black_900 w-[auto]">
            Design your product of any category
          </Text>
          <Row className="items-center justify-between lg:mt-[49px] xl:mt-[56px] 2xl:mt-[63px] 3xl:mt-[75px] w-[100%]">
            <Img
              src="images/img_rectangle57.png"
              className="lg:h-[230px] xl:h-[263px] 2xl:h-[296px] 3xl:h-[355px] lg:w-[229px] xl:w-[262px] 2xl:w-[295px] 3xl:w-[354px]"
              alt="RectangleFiftySeven"
            />
            <Img
              src="images/img_rectangle73.png"
              className="lg:h-[230px] xl:h-[263px] 2xl:h-[296px] 3xl:h-[355px] lg:w-[229px] xl:w-[262px] 2xl:w-[295px] 3xl:w-[354px]"
              alt="RectangleSeventyThree"
            />
            <Img
              src="images/img_rectangle74.png"
              className="lg:h-[230px] xl:h-[263px] 2xl:h-[296px] 3xl:h-[355px] lg:w-[229px] xl:w-[262px] 2xl:w-[295px] 3xl:w-[354px]"
              alt="RectangleSeventyFour"
            />
            <Img
              src="images/img_rectangle75.png"
              className="lg:h-[230px] xl:h-[263px] 2xl:h-[296px] 3xl:h-[355px] lg:w-[229px] xl:w-[262px] 2xl:w-[295px] 3xl:w-[354px]"
              alt="RectangleSeventyFive"
            />
          </Row>
        </Column>
        <footer className="bg-orange_101 lg:mt-[129px] xl:mt-[148px] 2xl:mt-[167px] 3xl:mt-[200px] w-[100%]">
          <Row className="lg:mb-[25px] xl:mb-[29px] 2xl:mb-[33px] 3xl:mb-[39px] lg:ml-[54px] xl:ml-[62px] 2xl:ml-[70px] 3xl:ml-[84px] lg:mr-[56px] xl:mr-[64px] 2xl:mr-[73px] 3xl:mr-[87px] xl:mt-[113px] 2xl:mt-[128px] 3xl:mt-[153px] lg:mt-[99px] w-[90%]">
            <Column className="w-[77%]">
              <Img
                src="images/img_frame_55X183.svg"
                className="lg:h-[43px] xl:h-[49px] 2xl:h-[56px] 3xl:h-[67px] w-[18%]"
                alt="Frame Six"
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
                    name="GroupThirtyThree"
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
                <Text className="font-medium mb-[1px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-red_600 w-[auto]">
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
                src="images/img_frame_34X112.svg"
                className="lg:h-[27px] xl:h-[31px] 2xl:h-[35px] 3xl:h-[41px] 3xl:mt-[110px] lg:mt-[71px] xl:mt-[81px] 2xl:mt-[92px] w-[38%]"
                alt="Frame Seven"
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
    </>
  );
};

export default LandingpagePage;
