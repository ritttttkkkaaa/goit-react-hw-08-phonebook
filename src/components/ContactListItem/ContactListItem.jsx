import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { Notify } from 'notiflix';

export const ContactsListItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(
          `${originalPromiseResult.name} successfully deleted from contacts`
        );
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });
  };

  return (
    <li key={id}>
      <p>
        {name}
      </p>
      <performance>
        {number}
      </performance>
      <button onClick={() => handleDeleteContact(id)}>
        Delete
      </button>
    </li>
  );
};
