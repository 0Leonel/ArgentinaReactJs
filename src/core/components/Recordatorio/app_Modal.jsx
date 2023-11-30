import {Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";
import AppCalendario from "./app_calendario";
import { useNotas } from "../../layout/hook/useNotas";


export default function AppModal({onRecordatorio}) {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {fecha} = useNotas();
  

  return (
    <>
      <Button onPress={onOpen} color="primary" >Campana</Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        size="2xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
               <AppCalendario/>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Cancelar
                </Button>
                <Button color="primary" onPress={onClose} onClick={() => onRecordatorio(fecha)}>
                  Guardar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
