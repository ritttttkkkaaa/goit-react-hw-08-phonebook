import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { PiSpinnerGap } from 'react-icons/pi';
import { getDeleting } from 'redux/contacts/contactsSlice';
import { useState } from 'react';

const DeleteBtn = ({ userId }) => {
  const dispatch = useDispatch();
  const Deleting = useSelector(getDeleting);
  const [isCurrentButton, setIsCurrentButton] = useState(false);

  const handleDelete = e => {
    setIsCurrentButton(true);
    dispatch(deleteContact(userId)).finally(() => {
      setIsCurrentButton(false);
    });
  };

  return (
    <button
      disabled={Deleting}
      className="button-item delete"
      onClick={handleDelete}
    >
      {Deleting && isCurrentButton ? (
        <PiSpinnerGap className="spinner" size={24} />
      ) : (
        <RiDeleteBin6Line size={24} />
      )}
    </button>
  );
};

export default DeleteBtn;