import familyMembersReducer from './FamilyMembers.js'
import usernameReducer from './Username.js'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({    //naming convention rootReducer
    familyMembers: familyMembersReducer,
    username: usernameReducer
})

export default rootReducer;