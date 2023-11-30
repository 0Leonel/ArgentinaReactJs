import {Modal, ModalContent, ModalBody, ModalFooter, Button, useDisclosure, Image} from "@nextui-org/react";
import AppCalendario from "./app_calendario";
import { useNotas } from "../../layout/hook/useNotas";
import bellIcon  from "../../../assets/bell_alert.svg";
export default function AppModal(props) {
  const {onComplete,onRecordatorio} = props;
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  const {fecha} = useNotas();
  return (
    <>
      <Button onClick={!onComplete ? onOpen : null}  className="bg-[#D0D0D0]  hover:bg-[#7A7A7A] h-8">
        <img src={bellIcon} alt="recordatorio" className="w-6 hover:stroke-[#fff]"></img>
        </Button>
      <Modal 
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
        size="2xl"
        hideCloseButton
        classNames={{
          content: 'bg-[#3075A1] text-xl text-white',
          header: 'bg-[#3075A1] text-xl text-white',
          body: 'bg-[#3075A1] text-xl text-white',
          closeButton: 'bg-[#3075A1] text-xl text-white',
          closeButtonInner: 'bg-[#3075A1] text-xl text-white',
          closeButtonIcon: 'bg-[#3075A1] text-xl text-white',
          closeButtonLabel: 'bg-[#3075A1] text-xl text-white',
          footer: 'bg-[#D0D0D0] text-xl text-white',
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
               <AppCalendario/>
              </ModalBody>
              <ModalFooter>
                <Button 
                className='bg-[#FDB316] bg-opacity-60 text-[#212121] font-bold h-8 hover:bg-[#C38B12] '
                 onPress={onClose}>
                  Cancelar
                </Button>
                <Button 
                className='bg-[#3A7C4D] hover:bg-[#295837] text-[#212121] font-bold h-8 '
                onPress={onClose} onClick={() => onRecordatorio(fecha)}>
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
