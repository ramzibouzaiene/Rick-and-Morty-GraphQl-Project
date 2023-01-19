import { Card, CardBody, CardFooter } from "@chakra-ui/react";
import {Image, Divider} from '@chakra-ui/react'

export default function Cards({ maxW, src, alt, borderRadius, name }) {
  return (
    <>
      <Card maxW={maxW}>
        <CardBody>
          <Image src={src} alt={alt} borderRadius={borderRadius} />
        </CardBody>
        <Divider />
        <CardFooter>{name}</CardFooter>
      </Card>
    </>
  );
}
