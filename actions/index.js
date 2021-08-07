import { actividades } from '../reducers/initialState';

const loggearUsuario = () => ({
    type: 'LOGGEAR',
});

export const guardarInvite = (usuario, mensaje, pub) => ({
    type: 'GUARDAR_INVITE',
    payload: { usuario, mensaje, pub, tipo: actividades.INVITACION },
});

export const guardarRegalo = (usuario, mensaje, regalo) => ({
    type: 'GUARDAR_INVITE',
    payload: { usuario, mensaje, regalo, tipo: actividades.REGALO },
});

export const matchearUsuario = (usuario) => ({
    type: 'MATCH_USER',
    payload: usuario,
});

export const guardarMensaje = (message) => ({
    type: 'GUARDAR_MENSAJE',
    payload: message,
});

export const autorizar = (email, password) => ({
    type: 'AUTORIZAR',
    payload: { email, password },
});

export const desautorizar = (email, password) => ({
    type: 'DESAUTORIZAR',
    payload: { email, password },
});
