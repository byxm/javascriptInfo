import { Modal } from "antd";
import useNiceModal from "../customHook/useNiceModal";

export default function NiceModal({ id, children, ...rest }) {
  const { visible, hide, show, hiding } = useNiceModal(id);
  console.log('hidinggggggggggggg', hiding)

  return (
    <Modal
      visible={!hiding}
      onCancel={() => hide()}
      onOk={() => hide()}
      // afterClose={() => hide(true)}
      {...rest}
    >
      {children}
    </Modal>
  );
}
