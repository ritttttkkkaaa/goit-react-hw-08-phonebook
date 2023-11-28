import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import { selectError, selectIsLoading } from '../redux/contacts/selectors';
import { Container } from '../components/Container/Container';
import { ContactForm } from '../components/ContactsForm/ContactsForm';
import { Filter } from '../components/Filter/Filter';
import { ContactList } from '../components/ContactList/ContactList';
import { Modal } from 'components/Modal/Modal';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const [isShowModalAddUser, setIsShowModalAddUser] = useState(false);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleOpenModal = () => {
    setIsShowModalAddUser(prev => !prev);
  };

  return (
    <div>
      <Container>
        <div>
          <h2>Contacts</h2>
          <div>
            <Filter />
            <button type="button" onClick={handleOpenModal}>
              New Contact
            </button>
          </div>
        </div>
        {isLoading && !error && <b>Request in progress</b>}
        <ContactList />
      </Container>
      {isShowModalAddUser && (
        <Modal
          children={
            <Container title="Add New Contact">
              <ContactForm onCloseModal={handleOpenModal} />
            </Container>
          }
          onCloseModal={handleOpenModal}
        ></Modal>
      )}
    </div>
  );
};

export default Contacts;