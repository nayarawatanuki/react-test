import { useRef, useState } from 'react'
import {
    FormControl,
    FormLabel,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    Button,
    Stack,
    Box,
    Text,
    OrderedList,
    ListItem
} from '@chakra-ui/react'

import {getFacts} from '../../services/catFacts'

export const Form2 = () => {

    const [viewFacts, setViewFacts] = useState([])

    const lengthFacts = useRef<HTMLInputElement>(null)
    const limitFacts = useRef<HTMLInputElement>(null)
    const facts = async () => {
        try{
            const {data, ...rest} = await getFacts({max_length: lengthFacts?.current?.value, limit: limitFacts?.current?.value})
            setViewFacts(data?.data.map((item: any) => item.fact))
            console.log("Data: ", {data, rest})
            console.log("Facts: ", data?.data)
            console.log("Length Facts: ", lengthFacts?.current?.value)
            console.log("Total Facts: ", limitFacts?.current?.value)
        }catch(error) {
            console.error(error)
        }
        
        
    }

return (
    <FormControl>
        <Stack direction='row' align='center' paddingLeft={38} paddingRight={38}>
            <div style={{ width: "full" }}>
                <FormLabel>Tamanho do fato:</FormLabel>
                <NumberInput defaultValue={20} min={20} >
                    <NumberInputField ref={lengthFacts} />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </div>

            <div style={{ paddingLeft: 20 }}>
                <FormLabel>Quantidade de fatos:</FormLabel>
                <NumberInput defaultValue={1} min={1}>
                    <NumberInputField ref={limitFacts}/>
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </div>
        </Stack>

        <Stack justifyContent="center" paddingLeft={10} paddingRight={38}>
            <Button
                mt={8}
                mb={10}
                width="full"
                size="lg"
                justifyContent="space-evenly"
                colorScheme='telegram'
                //isLoading={props.isSubmitting}
                type='submit'
                onClick={facts}
            >
                Buscar
            </Button>            
            
            
            <Stack 
                direction='column'
                overflow="scroll"
                maxHeight="200px"
                
                height="20%"
                whiteSpace="nowrap"
                color="black"
                sx={{
                    "&::-webkit-scrollbar": {
                        width: "4px",
                      },
                      "&::-webkit-scrollbar-track": {
                        width: "6px",
                      },
                      "&::-webkit-scrollbar-thumb": {
                        background: "#08c0e1",
                        borderRadius: "24px",

                    
                    },
                }}
            >
                <OrderedList margin={0}>
                    {viewFacts.map((item: any, index) => (
                        <Box p={5} marginLeft={0} marginBottom={3} shadow='md' borderWidth='1px' key={index}>
                            
                            <ListItem marginLeft={4}>
                                <Text mt={4}>{item}</Text>
                            </ListItem>
                            
                        </Box>
                    ))}
                    
                </OrderedList>

                
            </Stack>
        </Stack>

        
    </FormControl>

)
}