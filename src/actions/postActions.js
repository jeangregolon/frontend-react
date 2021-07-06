import Axios from "axios"

import {
	POST_LIST_FAIL,
	POST_LIST_REQUEST,
	POST_LIST_SUCCESS,
	GOREST_TOKEN,
} from "../constants/postConstants"

export const listPosts = (page) => async (dispatch) => {
	dispatch({ type: POST_LIST_REQUEST })
	try {
		const { data } = await Axios.get(`https://gorest.co.in/public-api/posts?_format=json&access-token={${GOREST_TOKEN}}&page=${page}`)
		dispatch({ type: POST_LIST_SUCCESS, payload: data })
	} catch (error) {
		dispatch({ type: POST_LIST_FAIL, payload: error.message })
	}
}