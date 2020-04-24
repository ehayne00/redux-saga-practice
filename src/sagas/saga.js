// import { delay } from 'redux-saga'
import { takeEvery, put, delay, takeLatest} from 'redux-saga/effects'



function* upVoteAsync(){
    yield delay(2000)
    yield put({type: 'UP_VOTE_ASYNC', value: 1})
}

export function* watchUpVote(){
    yield takeEvery('UP_VOTE', upVoteAsync)
}

