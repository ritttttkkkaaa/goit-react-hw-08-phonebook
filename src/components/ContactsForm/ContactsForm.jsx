import { useSelector, useDispatch } from 'react-redux';
import { selectContactsList } from '../../redux/contacts/selectors';
import { addContact } from '../../redux/contacts/operations';
import { Notify } from 'notiflix';

export const ContactForm = ({ onCloseModal }) => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsList);

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formName = e.target.elements.name.value;
    const formNumber = e.target.elements.number.value;
    if (contacts.some(({ name }) => name === formName)) {
      return alert(`${formName} is already in contacts`);
    }

    if (contacts.some(({ number }) => number === formNumber)) {
      return alert(`${formNumber} is already in contacts`);
    }

    dispatch(addContact({ name: formName, number: formNumber.toString() }))
      .unwrap()
      .then(originalPromiseResult => {
        Notify.success(
          `${originalPromiseResult.name} successfully added to contacts`
        );
      })
      .catch(() => {
        Notify.failure("Sorry, something's wrong");
      });

    onCloseModal();
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <label>
        Name
        <input
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name ..."
          value={contacts.name}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Enter number ..."
          value={contacts.number}
        />
      </label>
      <button type="submit">
        New contact
      </button>
    </form>
  );
};