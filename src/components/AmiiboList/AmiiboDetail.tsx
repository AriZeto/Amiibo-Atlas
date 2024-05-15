import { useSelector } from 'react-redux';
import { useAppSelector } from '../../redux/hooks';
import { AmiiboState } from '../../types/Amiibo';
import Breadcrumb from '../shared/Breadcrumb';
import { Amiibo } from '../../types/Amiibo';
import { Link } from 'react-router-dom';

// Styles
import { BannerHero, ColMd8, ColMd4 } from './AmiiboListStyles';

const AmiiboDetail = () => {
    const selectedAmiibo = useSelector((state: AmiiboState) => state.amiibo.selectedAmiibo);

    // Access redux store for particular amiibo.
    const amiiboDataRedux: Amiibo[] = useAppSelector((state) => state.allAmiiboSlice.amiibos);
    console.log('Test...: ', amiiboDataRedux);

    // Filter the amiibo objects, find those that have same series as the selected Amiibo from the Redux store.
    const sameSeries = amiiboDataRedux.filter(
        (amiibo) => amiibo.amiiboSeries === selectedAmiibo?.amiiboSeries
    );

    return (
        <div>
            <Breadcrumb
                paths={[
                    { url: '/', name: 'Home' },
                    { url: '/amiibos', name: 'Amiibos' },
                    {
                        url: `/amiibos/${selectedAmiibo?.tail}-${selectedAmiibo?.head}`,
                        name: selectedAmiibo?.name,
                    },
                ]}
                currentUrl={`/amiibos/${selectedAmiibo?.tail}-${selectedAmiibo?.head}`}
            />
            <BannerHero>
                <div
                    style={{
                        padding: '20px',
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%',
                    }}
                >
                    <ColMd4>
                        <div style={{ paddingRight: '40px' }}>
                            <img
                                src={selectedAmiibo?.image}
                                alt="Mario"
                                style={{ height: 'auto', width: '100%' }}
                            />
                        </div>
                    </ColMd4>
                    <ColMd8>
                        <div>
                            <h1>{selectedAmiibo?.name}</h1>
                            <p>Game Series: {selectedAmiibo?.gameSeries}</p>
                            <p>Amiibo Series: {selectedAmiibo?.amiiboSeries}</p>
                            <h3>Release Date: </h3>
                            <p>Australia: {selectedAmiibo?.release.au}</p>
                            <p>Europe: {selectedAmiibo?.release.eu}</p>
                            <p>Japan: {selectedAmiibo?.release.jp}</p>
                            <p>North America: {selectedAmiibo?.release.na}</p>

                            <h3>Other Amiibos in the Same Series:</h3>
                            {
                                <ul>
                                    {sameSeries.map((amiibo) => (
                                        <li key={amiibo.id}>
                                            <Link to={`/amiibos/${amiibo.tail}-${amiibo.head}`}>
                                                {amiibo.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            }
                        </div>
                    </ColMd8>
                </div>
            </BannerHero>
        </div>
    );
};

export default AmiiboDetail;
