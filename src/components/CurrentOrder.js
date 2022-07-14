import { Box, Flex, FormControl, FormLabel } from "@chakra-ui/react"
import { useState, useEffect } from "react"
import CurrentOrderCard from "./CurrentOrderCard"

function CurrentOrder({ clickHandler, currentOrders, setCurrentOrders }) {

    const renderCurrentOrderCards = currentOrders.map(item => {
        return <CurrentOrderCard key={item.id} item={item} clickHandler={clickHandler} />
    })

    return (
        <Flex
        // flexDirection="column"
        alignItems="center"
        border="2px solid black"
        marginTop="2rem"
        width="45vw"
        height="65vh"
        borderRadius = "10px"
        padding="1rem"
        flexWrap="wrap"
        overflowY="scroll"
        >
            {renderCurrentOrderCards}
        </Flex>
    )
}


export default CurrentOrder