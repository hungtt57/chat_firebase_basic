import firebase from 'firebase';

import {
    FETCH_CONTACT_SUCCESS,
    FETCH_CONTACT_ERROR
} from './types';

export const fetchListContact = ({me }) => {
    return (dispatch) => {
        /*
        *
        * */
        firebase.database().ref('users')
            .on('value', snap => {
                const contacts = [];
                snap.forEach(contact => {
                    if (contact.key !== me.uid) {
                        const ct = contact.val().profile;
                        let displayName = ct.displayName;
                        contacts.push({
                            uid: contact.key,
                            displayName:displayName,
                            email: ct.email,
                            photoURL: ct.photoURL
                        });
                    }
                });
                dispatch({
                    type: FETCH_CONTACT_SUCCESS,
                    contacts
                });
            }, error => {
                dispatch({
                    type: FETCH_CONTACT_ERROR,
                });
            });
    }
};