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
    Text,
    Box,
    OrderedList,
    ListItem
} from '@chakra-ui/react'

import {getFact} from '../../services/catFacts'

export const Form1 = () => {

    const [currentFact, setCurrentFact] = useState([])

    const [factList, setFactList] = useState([])

    const lengthFact = useRef<HTMLInputElement>(null)
    const fact = async () => {
        try{
            const {data, ...rest} = await getFact({max_length: lengthFact?.current?.value})
            setCurrentFact(data.fact)

            const newFactList: any = [...factList, data.fact]
            setFactList(newFactList)

            console.log("Data: ", {data, rest})
            console.log("FactList: ", factList)
            console.log("Fact: ", data)
            console.log("Length FactList: ", lengthFact?.current?.value)
        }catch(error) {
            console.error(error)
        }
        
    }

    return(
    <FormControl>
        <Stack direction='row' align='center' paddingLeft={38} paddingRight={38}>
            <div style={{width: "full"}}>
                <FormLabel width={32}>Tamanho do fato:</FormLabel>
                <NumberInput defaultValue={20} min={20} >
                    <NumberInputField ref={lengthFact}/>
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </div>

            <div style={{margin: 0, paddingLeft: 10}}>
                <Button
                    mt={8}
                    width="full"
                    colorScheme='telegram'
                    //isLoading={props.isSubmitting}
                    type='submit'
                    onClick={fact}
                >
                    Buscar
                </Button>
            </div>
        </Stack>

        <Stack 
            paddingRight={38}
            paddingLeft={10} 
            marginTop={10}
            direction='column'
        >
            <OrderedList margin={0}>
                {factList.map((fact, index) => (
                    <Box p={5} marginLeft={0} marginBottom={3} shadow='md' borderWidth='1px' key={index}>
                        
                        <ListItem marginLeft={4}>
                            {/*<Heading fontSize='xl'>teste</Heading>*/}
                            <Text mt={4}>{fact}</Text>
                        </ListItem>
                        
                    </Box>
                ))}
                    
                </OrderedList>
        </Stack>

        
    </FormControl>

)
}