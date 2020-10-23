import reducer from '../authReducer';
import * as types from '../actionTypes';

describe('projects and tasks reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(
            {
                email: null,
                userId: null,
                error: null,
                userLoadComplete: false
            }
        )
    })

    it('should handle SET_USER', () => {
        expect(
            reducer(undefined, {
                type: types.SET_USER,
                payload: {
                    user:
                        {
                            uid: 'ijfi4jr4t8f4',
                            email: 'test@test.com'
                        }
                }
            })
        ).toEqual({
            email: 'test@test.com',
            userId: 'ijfi4jr4t8f4',
            error: null,
            userLoadComplete: true
        })
    })

    it('should handle LOGOUT', () => {
        expect(
            reducer({
                email: 'test@test.com',
                userId: 'ijfi4jr4t8f4',
                error: null,
                userLoadComplete: true
            }, {
                type: types.LOGOUT,
            })
        ).toEqual({
            email: null,
            userId: null,
            error: null,
            userLoadComplete: true
        })
    })

    it('should handle AUTH_ERROR', () => {
        expect(
            reducer(undefined, {
                type: types.AUTH_ERROR,
                payload: {error: {type: "error", message: "Random error"}},
            })
        ).toEqual({
            email: null,
            userId: null,
            error: {type: "error", message: "Random error"},
            userLoadComplete: true
        })
    })

    it('should handle AUTH_ERROR_DISMISS', () => {
        expect(
            reducer({
                email: null,
                userId: null,
                error: {type: "error", message: "Random error"},
                userLoadComplete: true
            }, {
                type: types.AUTH_ERROR_DISMISS
            })
        ).toEqual({
            email: null,
            userId: null,
            error: null,
            userLoadComplete: true
        })
    })
});
