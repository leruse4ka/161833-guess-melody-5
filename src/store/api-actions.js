import {loadQuestions, requireAuthorization, redirectToRoute} from "./action";
import {AuthorizationStatus, APIRoute, AppRoute} from "../const";

export const fetchQuestionList = () => (dispatch, _getState, api) => (
  api.get(APIRoute.QUESTIONS)
    .then(({data}) => dispatch(loadQuestions(data)))
);

export const checkAuth = () => (dispatch, _getState, api) => {
  return api.get(APIRoute.LOGIN)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch(() => {});
};

export const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(APIRoute.LOGIN, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(AppRoute.RESULT)))
);
