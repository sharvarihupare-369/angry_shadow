import { Grid, Box, Image, Heading } from "@chakra-ui/react";

import React from "react";
import shopbyCat from "../Assets/shopBycategory/shopBycategory.jpg";
import activewear1 from "../Assets/shopBycategory/activewear.jpg";
import activewear2 from "../Assets/shopBycategory/activeWear2.jpg";
import bagpack from "../Assets/shopBycategory/bagpack.jpg";
import ethnicw1 from "../Assets/shopBycategory/ethnicwear1.jpg";
import beauty1 from "../Assets/shopBycategory/beautyCosmo.jpg";
import belts1 from "../Assets/shopBycategory/belts.jpg";
import casualw1 from "../Assets/shopBycategory/casualWear.jpg";
import curlygirlst from "../Assets/shopBycategory/curyGirlStore.jpg";
// import shopbyCat from '../Assets/shopBycategory/shopBycategory.jpg'
import ethnic2 from "../Assets/shopBycategory/ethnicwear2.jpg";
import flipflop1 from "../Assets/shopBycategory/flipflops.jpg";
import footwear from "../Assets/shopBycategory/footwear.jpg";
import footw1 from "../Assets/shopBycategory/footwear1.jpg";
import formalw1 from "../Assets/shopBycategory/formalwear.jpg";
import groomin from "../Assets/shopBycategory/gromming.jpg";
import handbags from "../Assets/shopBycategory/HandBags.jpg";
import headphones from "../Assets/shopBycategory/headphones.jpg";
import homedecor from "../Assets/shopBycategory/homedecor.jpg";
import inclusives from "../Assets/shopBycategory/inclusivesizes.jpg";
import innerw from "../Assets/shopBycategory/innerWear.jpg";
import jeans from "../Assets/shopBycategory/jeans.jpg";
import jewelery from "../Assets/shopBycategory/jewellery.jpg";
import kidsw1 from "../Assets/shopBycategory/kidswear2.jpg";
import kidsw2 from "../Assets/shopBycategory/kidsWear70%.jpg";
import lingrie from "../Assets/shopBycategory/Lingrie.jpg";
import Loungew1 from "../Assets/shopBycategory/Loungewear.jpg";
import sleepw1 from "../Assets/shopBycategory/sleepwaer.jpg";
import sportw1 from "../Assets/shopBycategory/SportWear.jpg";
import sunglasses from "../Assets/shopBycategory/sunglasses.jpg";
import trendyw from "../Assets/shopBycategory/trendywesternwear.jpg";
import trolley from "../Assets/shopBycategory/TrolleyandLuggage.jpg";
import watches1 from "../Assets/shopBycategory/watches.jpg";
import watches2 from "../Assets/shopBycategory/watches1.jpg";
import westernw1 from "../Assets/shopBycategory/wester.jpg";
import westernw2 from "../Assets/shopBycategory/westernwear3.jpg";
import workw1 from "../Assets/shopBycategory/workwear.jpg";

export const Home = () => {
  return (
    <Box w="90%" m="auto">
      <Box>
        {/* <Image src={shopbyCat} /> */}
        <Heading
        textTransform={"uppercase"}
        textAlign={"center"}
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="6xl"
          fontWeight="extrabold"
        >
          Shop By Category
        </Heading>
      </Box>
      <Grid alignItems={"center"} templateColumns={"repeat(6,1fr)"}>
        <Image src={activewear1} />
        <Image src={activewear2} />
        {/* <Image src={groomin} /> */}
        {/* <Image src={beauty1} /> */}
        {/* <Image src={ethnicw1} /> */}
        {/* <Image src={casualw1} /> */}
        <Image src={belts1} />
        {/* <Image src={flipflop1} /> */}
        <Image src={footw1} />
        {/* <Image src={formalw1} /> */}
        <Image src={handbags} />
        <Image src={headphones} />
        {/* <Image src={ethnic2} /> */}
        {/* <Image src={homedecor} /> */}
        {/* <Image src={Loungew1} /> */}
        {/* <Image src={innerw} /> */}
        <Image src={lingrie} />
        <Image src={sleepw1} />
        <Image src={trendyw} />
        <Image src={trolley} />
        <Image src={watches1} />
        <Image src={westernw1} />
        <Image src={sunglasses} />
        <Image src={workw1} />


        {/* <Image src={westernw2} /> */}
        {/* <Image src={watches2} /> */}

        {/* <Image src={inclusives} /> */}
        {/* <Image src={footwear} /> */}
        {/* <Image src={jeans} /> */}
        {/* <Image src={jewelery} /> */}
        {/* <Image src={kidsw1} /> */}
        {/* <Image src={kidsw2} /> */}
        {/* <Image src={sportw1} /> */}
      </Grid>
    </Box>
  );
};
