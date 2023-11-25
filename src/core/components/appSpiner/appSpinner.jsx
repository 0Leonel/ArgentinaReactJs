import {Spinner} from "@nextui-org/react";

export default function AppSpiner() {
  return (
    <div className="flex gap-4">
      <Spinner label="Default" color="default" labelColor="foreground"/>
    </div> 
  );
}