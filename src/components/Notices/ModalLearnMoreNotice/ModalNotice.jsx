import { helpers } from 'utils/helpers';
import { toast } from 'react-toastify';

import { useDispatch } from 'react-redux';
import { addFavorite, deleteFavorite } from 'redux/auth/authSlice';

import Box from 'components/Common/Box';
// import Button from 'components/Common/Button';
// import ButtonIcon from 'components/Common/ButtonIcon';
import {
  ButtonIcon,
  ButtonIconBox,
  BoxModal,
  IconCloseModal,
  ModalTitle,
  ImageModal,
  CategoryTittle,
  CategoryTittleBox,
  ListInfo,
  ItemInfo,
  TextInfo,
  TextInfoTitle,
  TextTel,
  TextEmail,
  CommentsSpan,
  Comment,
  BtnBox,
  BtnTel,
  AnimalsFavoriteSvg,
  AnimalsBtnFavorite,
  AnimalsBtn,
} from './ModalNotice.styled';

const ModalNotice = ({ notices, closeModal, getBtnInfo, token }) => {
  const noItem = '-------------';
  const noPrice = '0';
  const {
    _id,
    avatarURL,
    favorite,
    title,
    category,
    name,
    birthday,
    breed,
    location,
    sex,
    owner,
    comments,
    price,
  } = notices;

  const dispatch = useDispatch();

  const handleFavorite = id => {
    if (!Boolean(token)) {
      toast.warn('You are not a registered user!');
      return;
    }
    if (favorite) {
      dispatch(deleteFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  return (
    <Box position="relative">
      <ButtonIconBox>
        <ButtonIcon onClick={closeModal}>
          <IconCloseModal />
        </ButtonIcon>
      </ButtonIconBox>

      <BoxModal>
        <Box position="relative">
          <ImageModal src={avatarURL} alt={title} />
          <CategoryTittleBox>
            <CategoryTittle>{category}</CategoryTittle>
          </CategoryTittleBox>
        </Box>
        <Box>
          <ModalTitle>{title || noItem}</ModalTitle>
          <ListInfo>
            <ItemInfo key={'name'}>
              <TextInfoTitle>Name:</TextInfoTitle>
              <TextInfo>{name || noItem}</TextInfo>
            </ItemInfo>
            <ItemInfo key={'birthday'}>
              <TextInfoTitle>Birthday:</TextInfoTitle>
              <TextInfo> {helpers.getAge(birthday)}</TextInfo>
            </ItemInfo>
            <ItemInfo key={'breed'}>
              <TextInfoTitle>Breed:</TextInfoTitle>
              <TextInfo>{breed || noItem}</TextInfo>
            </ItemInfo>
            <ItemInfo key={'location'}>
              <TextInfoTitle>Location:</TextInfoTitle>
              <TextInfo>{location || noItem}</TextInfo>
            </ItemInfo>
            <ItemInfo key={'sex'}>
              <TextInfoTitle>The sex:</TextInfoTitle>
              <TextInfo>{sex || noItem}</TextInfo>
            </ItemInfo>

            {/* //TODO деструктуризувати пропс */}
            <ItemInfo key={'email'}>
              <TextInfoTitle>Email:</TextInfoTitle>
              <TextInfo>
                <TextEmail email={owner.email}>{owner.email}</TextEmail>
              </TextInfo>
            </ItemInfo>

            {/* //TODO деструктуризувати пропс */}
            <ItemInfo key={'phone'}>
              <TextInfoTitle>Phone:</TextInfoTitle>
              <TextInfo>
                <TextTel phone={owner.phone}>{owner.phone}</TextTel>
              </TextInfo>
            </ItemInfo>

            {/* //TODO деструктуризувати пропс */}
            {category === 'sell' && (
              <ItemInfo key={'price'}>
                <TextInfoTitle>Price:</TextInfoTitle>
                <TextInfo>{price || noPrice} uah</TextInfo>
              </ItemInfo>
            )}
          </ListInfo>
        </Box>
      </BoxModal>

      <Comment>
        <CommentsSpan>Comments:</CommentsSpan>
        {comments || noItem}
      </Comment>

      <BtnBox>
        <AnimalsBtnFavorite
          type="button"
          id={_id}
          onClick={() => handleFavorite(_id)}
          data-favorite="favorite"
        >
          Add to
          <AnimalsFavoriteSvg
            style={favorite ? { fill: '#F59256' } : { fill: '#FFFFFF99' }}
          />
        </AnimalsBtnFavorite>
        <AnimalsBtn
        // type="button"
        // id={_id}
        // onClick={handleClick}
        // data-modal="modal"
        >
          <BtnTel phone={owner.phone}>Contact</BtnTel>
        </AnimalsBtn>

        {/* //TODO прописати телефон */}
      </BtnBox>
    </Box>
  );
};

export default ModalNotice;
