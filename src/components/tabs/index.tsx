import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { Form1 } from "../form1"
import { Form2 } from "../form2"

var header = {
    title: "Gerar nova cotação de seguro",
    subtitle: "Realizar um novo orçamento ou cotação.",
};

export const TabsOption = () => (
    <Tabs isFitted variant='enclosed-colored'colorScheme='telegram' marginTop={10}>
    <TabList mb='1em'>
        <Tab>Lista 1</Tab>
        <Tab>Lista 2</Tab>
    </TabList>
    <TabPanels>
        <TabPanel>
            <Form1 />
        </TabPanel>
        <TabPanel>
            <Form2 />
        </TabPanel>
    </TabPanels>
    </Tabs>
)