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
                console.log('list');

                snap.forEach(contact => {
                    if (contact.key !== me.uid) {
                        const ct = contact.val().profile;

                        contacts.push({
                            uid: contact.key,
                            displayName: ct.name,
                            email: ct.email,
                            photoURL: ct.avatar
                        });
                    }
                });
                console.log(contacts);
                dispatch({
                    type: FETCH_CONTACT_SUCCESS,
                    contacts
                });
            }, error => {
                console.log('error', error);
                dispatch({
                    type: FETCH_CONTACT_ERROR,
                });
            });
    }
};