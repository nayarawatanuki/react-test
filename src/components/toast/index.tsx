import { Button, useToast, Wrap, WrapItem } from "@chakra-ui/react"


export const ToastStatus = ({name, title, status, isClosable} : any) => {
    const toast = useToast()
    
    const statuses = ['success', 'error', 'warning', 'info']
  
    return (
      <Wrap>
        {/*{statuses.map((status: any, i) => (*/}
          <WrapItem >
            {toast({
                title: title,
                status: status,
                isClosable: isClosable,
            })}
          </WrapItem>
        {/*))}*/}
      </Wrap>
    )
}