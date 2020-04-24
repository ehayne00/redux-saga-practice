import React from "react";
import {connect} from 'react-redux'
import saga from "../sagas/saga.js"

const style = {
    border: '1px solid black',
    padding: '20px',
    paddingBottom: '50px',
    width: '300px',
    height: '300px'
}

const imageStyle = {
    width: '150px',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '80px'
}

const MemberCard = ({ member, upVote, downVote }) => {
  return (
    <div style={style}>
      <h1>{member.name}</h1>
      <img style={imageStyle} alt="oh no!" src={member.image} />
      <h4>Votes: {member.votes}</h4>
      <button onClick={() => upVote(member.id)}>+</button>
      <button onClick={() => downVote(member.id)}>-</button>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  upVote: id => dispatch({ type: 'UP_VOTE', payload: id}),
  downVote: id => dispatch({ type: 'DOWN_VOTE', payload: id})
})

export default connect(null, mapDispatchToProps)(MemberCard);
//must put null as first arg- mapStateToProps