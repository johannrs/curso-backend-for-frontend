import { setFavorite, loginRequest } from "../../actions";
import movieMock from "../../__mocks__/movieMock";

describe ('Action', () => {
    test ('set Favorite', () => {
        const payload = movieMock;
        const expectedAction = {        /* se crea la estructura con la cual se va a comparar */
            type: 'SET_FAVORITE', 
            payload
        }
        expect(setFavorite(payload)).toEqual(expectedAction); /* se ceompara el setfavorite con el expectedAction de la estructura que creamos en este test */
    });

    test('Login', () => {
        const payload = {
            email: 'test@test.com', 
            password: 'password'
        }
        const expectedAction = {
            type: 'LOGIN_REQUEST', 
            payload
        }
        expect(loginRequest(payload)).toEqual(expectedAction)
    })
})