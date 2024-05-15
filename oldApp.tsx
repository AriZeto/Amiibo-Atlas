import styled from '@emotion/styled';
// import useAuthState from './features/auth/useAuthState';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

const SplashPage = styled.div`
    padding: 2rem;
    border: 2px solid black;
    border-radius: 7px;
`;

export default function App() {
    // useAuthState();

    return (
        <Container>
            <h1>Welcome to Amiibo Atlas!</h1>
            <SplashPage>
                <p>
                    Amiibo Atlas is a modern, easy to use, modern web application designed for
                    collectors, enthusiasts, or those that are interested in the current state of
                    Nintendo’s Amiibo figurines. These figurines have been in production for ten
                    years now, and have varied use cases amongst Nintendo’s catalog of games.
                </p>
                <br />
                <p>
                    Core functionality includes authentication, parameterized pages, and various the
                    ability to wishlist particular amiibos, etc. The frontend was built using the
                    React framework for building the user interface based on its component like
                    implementation. Given how React handles state management, and the scope of our
                    web app, we have integrated Redux Toolkit for global state management. Thus far,
                    we have created a global state for the currently logged in User (and their
                    settings), and Amiibos. The backend includes firestore integration.
                </p>
            </SplashPage>
        </Container>
    );
}
