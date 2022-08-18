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
    Box
} from '@chakra-ui/react'

import {getFact} from '../../services/catFact'

var header = {
    title: "Gerar nova cotação de seguro",
    subtitle: "Realizar um novo orçamento ou cotação.",
};

export const Form1 = () => {

    const [viewFact, setViewFact] = useState([])

    const lengthFact = useRef<HTMLInputElement>(null)
    const fact = async () => {
        try{
            const {data, ...rest} = await getFact({max_length: lengthFact?.current?.value})
            setViewFact(data.fact)
            console.log("Fact: ", {data, rest})
            console.log("Length Fact: ", lengthFact?.current?.value)
        }catch(error) {
            console.error(error)
        }
        
        
    }

    return(
    <FormControl>
        <Stack spacing={4} direction='row' align='center'>
            <div style={{paddingRight: 30, paddingLeft: 40}}>
                <FormLabel width={60}>Tamanho do fato:</FormLabel>
                <NumberInput min={20} >
                    <NumberInputField ref={lengthFact}/>
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </div>

            <div style={{margin: 0}}>
                <Button
                    mt={8}
                    width={60}
                    colorScheme='telegram'
                    //isLoading={props.isSubmitting}
                    type='submit'
                    onClick={fact}
                >
                    Buscar
                </Button>
            </div>
        </Stack>

        <Box marginTop={10}
            
            overflow="clip"
            maxHeight="200px"
            
            height="20%"
            whiteSpace="nowrap"
            color="black"
            px="20px"
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
            {viewFact}
            
        </Box>
    </FormControl>

)
}