import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, useModal} from "@nextui-org/react";
import AppSend from "./appSend";
import { useState,useEffect } from "react";

export default function AppCompra(props) {
  const { isOpen: isModal1Open, onOpen: openModal1, onClose: closeModal1 } = useDisclosure();
  const { isOpen: isModal2Open, onOpen: openModal2, onClose: closeModal2 } = useDisclosure();
 
  const [opacity, setOpacity] = useState(false);
  useEffect(() => {
    if (isModal2Open) {
      const timeOut = setTimeout(()=>{
        closeModal1(true);
      }, 1000);
      
      const timeOut2 = setTimeout(()=>{
        closeModal2(true)
        setOpacity(true);
      }, 1500);
      return () => clearTimeout(timeOut,timeOut2)
    }
     else {
      setOpacity(false);
    }
    
  }, [isModal2Open]);
  
  return (
    <>
      <Button onPress={openModal1}  className='bg-red-500 rounded-lg p-2 text-white shadow-lg shadow-white'>Comprar</Button>
      <Modal isOpen={isModal1Open} onClose={closeModal1}
      size="2xl" hideCloseButton
      classNames={{
        backdrop:"backdrop-opacity-20 backdrop-invert backdrop-blur-sm",
        base: opacity ? "opacity-0": "block  outline outline-[#292f46] bg-[#CC7A7A]  text-[#292f46]",
        body: "text-[#292f46]  text-base  text-[#292f46]  items-center grid lg:grid-cols-2",
        header: " text-center text-[#292f46] font-bold flex justify-center",
        footer: "flex justify-center",
        title: "text-[#292f46] font-bold",
        closeButton: "hover:bg-white/5 active:bg-white/10"

      }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader >{props.title}</ModalHeader>
              <ModalBody>
                <img src={props.imagen} className="object-cover w-full" alt=""/>
                <p> 
                  {props.description}
                </p>
              </ModalBody>
              <ModalFooter>
                <Button  color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>
                 <AppSend title={props.title} onPress={isModal2Open} onClose={closeModal2} isOpen={isModal1Open}> 
                  <Button onPress={openModal2}  onClick={()=> {setOpacity(true)}} className='bg-red-500 rounded-lg p-2 text-white shadow-lg shadow-white'  >Confirmar Compra</Button>
                 </AppSend>

              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
