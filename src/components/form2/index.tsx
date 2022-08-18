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

import {getFacts} from '../../services/catFacts'

/*var header = {
    title: "Gerar nova cotação de seguro",
    subtitle: "Realizar um novo orçamento ou cotação.",
};*/

export const Form2 = () => {

    const [viewFacts, setViewFacts] = useState([])

    const lengthFacts = useRef<HTMLInputElement>(null)
    const totalFacts = useRef<HTMLInputElement>(null)
    const facts = async () => {
        try{
            const {data, ...rest} = await getFacts({max_length: lengthFacts?.current?.value, max_total: totalFacts?.current?.value})
            setViewFacts(data.facts)
            console.log("Facts: ", {data, rest})
            console.log("Length Facts: ", lengthFacts?.current?.value)
            console.log("Total Facts: ", totalFacts?.current?.value)
        }catch(error) {
            console.error(error)
        }
        
        
    }

return (
    <FormControl>
        <Stack spacing={4} direction='row' align='center'>
            <div style={{paddingRight: 30, paddingLeft: 40}}>
                <FormLabel width={60}>Tamanho do fato:</FormLabel>
                <NumberInput min={20} >
                    <NumberInputField ref={lengthFacts} />
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </div>

            <div style={{ paddingLeft: 20}}>
                <FormLabel width={60}>Quantidade de fatos:</FormLabel>
                <NumberInput min={1}>
                    <NumberInputField ref={totalFacts}/>
                    <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                    </NumberInputStepper>
                </NumberInput>
            </div>
        </Stack>

        <Stack justifyContent="center" paddingLeft={10}>
            <Button
                mt={8}
                mb={10}
                width="xl"
                size="lg"
                justifyContent="space-evenly"
                colorScheme='telegram'
                //isLoading={props.isSubmitting}
                type='submit'
                onClick={facts}
            >
                Buscar
            </Button>

            <Box
                overflow="scroll"
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
                {viewFacts}
            </Box>
        </Stack>

        
    </FormControl>

)
}