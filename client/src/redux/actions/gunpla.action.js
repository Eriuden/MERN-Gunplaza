import axios from "axios";

export const GET_GUNPLA = "GET_GUNPLA"
export const GET_ALLGUNPLAS= "GET_GUNPLAS"
export const GET_GUNPLA_ERROR = "GET_GUNPLA_ERROR"
export const ADD_GUNPLA = "ADD_GUNPLA"
export const UPDATE_GUNPLA = "UPDATE_GUNPLA"
export const DELETE_GUNPLA= "DELETE_GUNPLA"

export const getAllGunpla = () => {
    return (dispatch) => {
        return axios
            .get(`${process.env.REACT_APP_API_URL}api/gunpla`)
            .then((res) => {
                dispatch({ type: GET_ALLGUNPLAS, payload:res.data})
            })
            .catch((err) => window.alert(err))
    }
}

export const getGunpla = () => {
    return (dispatch) => {
        return axios 
            .get(`${process.env.REACT_APP_API_URL}api/gunpla/:id`)
            .then((res)=> {
                dispatch({ type: GET_GUNPLA, payload: res.data})
            })
            .catch((err)=> window.alert(err))
    }
}

export const addGunpla = (data) => {
    return (dispatch) => {
        return axios
            .post(`${process.env.REACT_APP_API_URL}api/gunpla`, data)
            .then((res)=> {
              if (res.data.errors) {
                dispatch({type: GET_GUNPLA_ERROR, payload: res.data.errors})
              } else {
                dispatch({ type: GET_GUNPLA_ERROR, payload:""})
              }
            })
    }
}

export const updateGunpla = (
    gunplaId,
    picture,
    name,
    grade,
    price
) => {
    return (dispatch)=> {
        return axios({
            method:"put",
            url: `${process.env.REACT_APP_API_URL}api/gunpla/${gunplaId}`,
            data: { picture, name, grade, price},
        })
        .then(()=> {
            dispatch({
                type: UPDATE_GUNPLA,
                payload: { gunplaId, picture, name, grade, price},
            })
        })
        .catch((err)=> window.alert(err))
    }
}

export const deleteGunpla = (
    gunplaId,
    picture,
    name,
    grade,
    price
) => {
    return (dispatch)=> {
        return axios({
            method:"delete",
            url:`${process.env.REACT_APP_API_URL}api/gunpla/${gunplaId}`,
            data: { picture, name, grade, price }
        })
            .then(()=> {
                dispatch({ type: DELETE_GUNPLA, payload: { gunplaId}})
            })
            .catch(()=> window.alert(err))
    }
}