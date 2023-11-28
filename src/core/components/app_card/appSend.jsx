import React, { useEffect } from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter} from "@nextui-org/react";

export default function AppSend({children, ...props}) {
 
  return (
    <>
      {children}
      <Modal isOpen={props.onPress}  hideCloseButton
      backdrop={"blur"}
      isDismissable={false}
      classNames={{
        base: "outline outline-[#292f46]   text-[#292f46]",
        body: "text-[#292f46] flex items-center justify-center ",
        header: " text-center text-[#292f46] font-bold flex justify-center",
        }}
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader >{props.title}</ModalHeader>
              <ModalBody>
                <p>Gracias por su compra</p>
              </ModalBody>
            {/* <Button onPress={onClose}>Cancelar</Button> */}
              <ModalFooter>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
