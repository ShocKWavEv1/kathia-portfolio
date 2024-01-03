import { Box, Heading, Text } from "@chakra-ui/react";
import { HeroProps } from "./model";
import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import kath from "../../../public/static/images/kath_og.jpeg";
import asterisk from "../../../public/static/svg/asterisk.svg";
import TextMask from "../animations/textMask/textMask";
import SlideY from "../animations/slideY/slide";
import Fade from "../animations/fade/fade";

const Hero: React.FC<HeroProps> = () => {
  const plane1 = useRef(null);
  let requestAnimationFrameId: any = null;
  let xForce = 0;
  let yForce = 0;
  const easing = 0.08;
  const speed = 0.01;

  const manageMouseMove = (e: any) => {
    const { movementX, movementY } = e;
    xForce += movementX * speed;
    yForce += movementY * speed;

    if (requestAnimationFrameId == null) {
      requestAnimationFrameId = requestAnimationFrame(animate);
    }
  };

  const lerp = (start: any, target: any, amount: any) =>
    start * (1 - amount) + target * amount;

  const animate = () => {
    xForce = lerp(xForce, 0, easing);
    yForce = lerp(yForce, 0, easing);
    gsap.set(plane1.current, {
      x: `+=${xForce * 0.5}`,
      y: `+=${yForce * 0.5}`,
    });

    if (Math.abs(xForce) < 0.01) xForce = 0;
    if (Math.abs(yForce) < 0.01) yForce = 0;

    if (xForce != 0 || yForce != 0) {
      requestAnimationFrame(animate);
    } else {
      cancelAnimationFrame(requestAnimationFrameId);
      requestAnimationFrameId = null;
    }
  };

  return (
    <Box
      w="100%"
      h="auto"
      bg="isabellina.500"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap="16px"
      position="relative"
      onMouseMove={(e) => {
        manageMouseMove(e);
      }}
    >
      <Box p="60px 0px">
        <SlideY direction={20} delay={1} duration={0.45}>
          <Heading
            variant="H7PANGEAREGULAR"
            color="primary.500"
            textTransform="uppercase"
            opacity={0.85}
          >
            Creative copywriter
          </Heading>
        </SlideY>
      </Box>
      <Box textAlign="center" textTransform="uppercase">
        <TextMask
          content={["Kathia", "Romero"]}
          variant="JUMBOPANGEAMEDIUM"
          delay={0.4}
        />
      </Box>

      <SlideY direction={20} delay={2} duration={0.5}>
        <Box
          w="100%"
          p="50px 0px"
          display="flex"
          placeContent="center"
          placeItems="center"
        >
          <Text
            variant="SMREGULAR"
            color="primary.500"
            textTransform="uppercase"
          >
            ↓&nbsp;&nbsp;Scroll
          </Text>
        </Box>
      </SlideY>
      <Box
        position="absolute"
        zIndex={2}
        top="8%"
        left="10%"
        className="rotating"
      >
        <Fade delay={1.25} duration={0.45}>
          <Image width={120} priority src={asterisk} alt="asterisk" />
        </Fade>
      </Box>
      <Box
        position="absolute"
        zIndex={2}
        top="40%"
        left="83%"
        className="rotating"
      >
        <Fade delay={1.5} duration={0.45}>
          <Image width={80} priority src={asterisk} alt="asterisk" />
        </Fade>
      </Box>
      <Box
        ref={plane1}
        position="absolute"
        w="220px"
        h="300px"
        zIndex={2}
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      >
        <Fade delay={1.75} duration={0.5}>
          <Image
            src={kath}
            alt={"kath-intro"}
            placeholder="blur"
            blurDataURL=""
            fill={true}
            style={{
              objectFit: "cover",
            }}
          />
        </Fade>
      </Box>
    </Box>
  );
};

export default Hero;
