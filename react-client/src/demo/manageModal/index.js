import { Button } from "antd";
import NiceModal from "../components/niceModal";
import useNiceModal from "../customHook/useNiceModal";

export default function ManageModal() {
  const modal = useNiceModal("nice-modal");
  return (
    <>
      <NiceModal id="nice-modal">create-niceModal</NiceModal>
      <Button type="primary" onClick={() => {
	       modal.show(true)
	 
      }}>
        按钮
      </Button>
    </>
  );
}
