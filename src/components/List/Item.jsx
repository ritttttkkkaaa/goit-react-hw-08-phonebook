import DeleteBtn from 'components/DeleteBtn/DeleteBtn';
import { ItemStyles } from './ItemStyles.styled';
import { IoMdCall } from 'react-icons/io';

const Item = ({ userName, userNumber, id }) => {
  return (
    <ItemStyles id={id}>
      <div className="user-container">
        <p className="name">{userName}</p>
        <p className="number">{userNumber}</p>
      </div>

      <ul className="buttons-list">
        <li>
          <a
            className="button-item phone"
            href={`tel:${userNumber.replace('-', '').replace(' ', '')}`}
          >
            <IoMdCall size={20} />
          </a>
        </li>

        <li>
          <DeleteBtn userId={id} />
        </li>
      </ul>
    </ItemStyles>
  );
};

export default Item;
