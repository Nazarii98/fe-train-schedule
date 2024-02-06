import { FC } from "react";
import { FaCheck } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { MdDelete, MdEdit } from "react-icons/md";

interface Props {
  isEditing: boolean;
  onOpenEdit: () => void;
  onCloseEdit: () => void;
  onSubmit: () => void;
  onDelete: () => void;
}

export const EditBlock: FC<Props> = ({
  isEditing,
  onOpenEdit,
  onCloseEdit,
  onSubmit,
  onDelete,
}) => {
  return (
    <div className="flex gap-4">
      {isEditing ? (
        <>
          <button onClick={onSubmit} className="hover:text-green-500">
            <FaCheck />
          </button>
          <button onClick={onCloseEdit} className="hover:text-black">
            <ImCross />
          </button>
        </>
      ) : (
        <>
          <button onClick={onOpenEdit} className="hover:text-black">
            <MdEdit />
          </button>
          <button onClick={onDelete} className="hover:text-black">
            <MdDelete />
          </button>
        </>
      )}
    </div>
  );
};
