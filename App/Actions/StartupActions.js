import * as Types from "../ActionTypes";
import NavigationService from '../Services/NavigationService'
import { questionService } from '../Services/QuestionService'

export const startup = () => (
  { type: Types.STARTUP}
);

// Example actions
//
// export const goToQuestionType = (screenName,username) =>{
//   return dispatch => {
//       dispatch({type: Types.SETUSERNAME, payload : username})
//       NavigationService.navigate(screenName,{pointerEvents:'auto'});
//   };
// }
//
// export const setQuestionTypes = (screenName,id,questiontype) => {
//   return (dispatch,getState) => {
//     dispatch({type: Types.SETQUESTIONTYPE, payload :{id:id,questiontype:questiontype}})
//     questionService.getQuestions(id)
//     .then(data => {
//       if(data.results==='error'){
//         console.log('making errors')
//         dispatch({type:Types.MAKEERROR})
//       }
//       else{
//         dispatch({type:Types.SETQUESTIONS, payload :data.results})
//         NavigationService.customNavigate(screenName,{questiontype:questiontype,score:0,question_num:1});
//       }
//     }).catch((error)=>{
//        console.log("Api call error");
//     })
//   }
// }
//
//
//
//
// export const goToResults = (params,results) => {
//   return dispatch => {
//     dispatch({type: Types.COMPLETEQUIZ, payload :results})
//     NavigationService.customNavigate('Results',params)
//   }
// }
//
// export const clearCommon = () => {
//   return dispatch => {
//     dispatch({type:Types.CLEARERROR})
//   }
// }
// export const navigate = (screenName) => {
//   return (dispatch,getState) => {
//         NavigationService.navigate(screenName);
//   };
// };
