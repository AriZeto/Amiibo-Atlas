/** @jsxImportSource @emotion/react */
import { CardContainer, ImageContainer, CardImage, CardTitle, CardFooter, Button, WishButton } from './AmiiboListStyles';
import {filterWishedAmiibos} from '../../features/amiibo/wishedAmiibos';

const Card = ({ amiibo, onClickDetail, onClickWishlist, wishlist }) => {
    // returns an array with the amiibo and a boolean determining whether or not
    // the amiibo exists in the user's wishlist
    const item = filterWishedAmiibos(amiibo, wishlist);

    return (
        <CardContainer>
            <ImageContainer>
                <CardImage src={amiibo.image} alt={`${amiibo.name} image`} />
            </ImageContainer>
            <CardTitle>{amiibo.name} ({amiibo.amiiboSeries})</CardTitle>
            <CardFooter>
                <button css={Button} onClick={onClickDetail}>View More</button>
                <WishButton wished={item[1]} onClick={onClickWishlist}>Wishlist</WishButton>
            </CardFooter>
        </CardContainer>
    );
};

export default Card;
