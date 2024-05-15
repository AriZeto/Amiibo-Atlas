// Dependencies
import { useState, ChangeEvent } from 'react';
import { FiShare } from 'react-icons/fi';
import styled from '@emotion/styled';
import { FaHeart } from 'react-icons/fa';

// Components
import AmiiboItem from './AmiiboItem';
import Popup from './WishlistPopup';
import { Amiibo } from '../../types/Amiibo';

const Button = styled.button`
    &:hover {
        border-color: black;
    }
    cursor: pointer;
    transition: border-color 0.25s;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    color: white;
    background-color: #646cff;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
`;

const Page = styled.div`
    padding: 2rem;
    min-width: 320px;
    min-height: 100vh;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    margin-left: auto;
    margin-right: auto;
    width: 960px;
`;

const Wishes = styled.div`
    display: list-item;
    list-style: none;
    width: 50%;
    margin: auto;
`;

function WishlistPage() {
    // placeholder
    const defaultWishlist: Amiibo[] = [
        {
            character: 'Metal Mario',
            amiiboSeries: 'Mario Sports Superstars',
            gameSeries: 'Mario Sports Superstars',
            name: 'Metal Mario - Tennis',
            image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09d00301-02bb0e02.png',
            tail: '02bb0e02',
            release: undefined,
            id: undefined,
            head: '02bb0e02',
        },
        {
            character: 'Mario Cereal',
            amiiboSeries: 'Others',
            gameSeries: 'Kellogs',
            name: 'Super Mario Cereal',
            image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_37400001-03741402.png',
            tail: '03741402',
            release: undefined,
            id: undefined,
            head: '03741402',
        },
        {
            character: 'Baby Mario',
            amiiboSeries: 'Mario Sports Superstars',
            gameSeries: 'Mario Sports Superstars',
            name: 'Baby Mario - Soccer',
            image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09cc0101-02a50e02.png',
            tail: '02a50e02',
            release: undefined,
            id: undefined,
            head: '02a50e02',
        },
        {
            character: 'Metal Mario',
            amiiboSeries: 'Mario Sports Superstars',
            gameSeries: 'Mario Sports Superstars',
            name: 'Metal Mario - Soccer',
            image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09d00101-02b90e02.png',
            tail: '02b90e02',
            release: undefined,
            id: undefined,
            head: '02b90e02',
        },
        {
            character: 'Mario',
            amiiboSeries: 'Mario Sports Superstars',
            gameSeries: 'Mario Sports Superstars',
            name: 'Mario - Soccer',
            image: 'https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_09c00101-02690e02.png',
            tail: '02690e02',
            release: undefined,
            id: undefined,
            head: '02690e02',
        },
    ];

    const [defaultWish, setDefaultWishlist] = useState<Amiibo[]>(defaultWishlist);
    const [popupOpen, setPopupOpen] = useState(false);
    const [isPublic, setIsPublic] = useState(false);
    const [type, setType] = useState('');
    const [publicCall, setPublicCall] = useState(false);
    const togglePopup = () => {
        setType('sharing');
        setPopupOpen(!popupOpen);
    };

    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('Wishlist Public:', e.target.checked);
        setType('public');
        setPublicCall(!publicCall);
    };

    const removeWishlistItem = (amiibo: Amiibo) => {
        const updatedWishlist = defaultWish.filter((item) => item.name !== amiibo.name);
        setDefaultWishlist(updatedWishlist);
    };

    return (
        <Page>
            <label>
                <input
                    id="checkbox"
                    type="checkbox"
                    checked={isPublic}
                    onChange={handleOnChange}
                    onClick={togglePopup}
                />
            </label>
            <p className="route-directory">Home - Wishlist</p>
            <h3>Explore or remove items form your Wish List here. </h3>
            <p>Item Count: {defaultWish.length}</p>

            <div className="wishlist-share-button">
                <Button id="share-button" onClick={togglePopup}>
                    <FiShare /> Share Wishlist!
                </Button>
                {
                    <Popup
                        showPopup={popupOpen}
                        setShowPopup={setPopupOpen}
                        type={type}
                        publicStatus={isPublic}
                        setPublicStatus={setIsPublic}
                    />
                }
            </div>

            {isPublic && (
                <Wishes>
                    {defaultWishlist.map((wish) => (
                        <AmiiboItem
                        amiibo={wish}
                        key={`${wish.gameSeries} - ${wish.name}}`}
                        Icon={FaHeart}
                        onRemove={removeWishlistItem}
                    />
                    ))}
                    {defaultWishlist.length == 0 && 
                    <p>Your wishlist is currently empty...</p>
                    }
                </Wishes>
            )}
        </Page>
    );
}

export default WishlistPage;