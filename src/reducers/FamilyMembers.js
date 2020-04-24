import Cally from "../media/Cally.png";
import Carol from "../media/Carol.png";
import Emily from "../media/Emily.png";

const initialState = [
  { id: 1, name: "Cally", votes: 0, image: Cally },
  { id: 2, name: "Carol", votes: 0, image: Carol },
  { id: 3, name: "Emily", votes: 0, image: Emily },
];

const upVote = (oldFamilyMembers, id) => {
  //must be pure fuctions, there is no this.state available, or setState.
  //take old state as an arg, replace setState with what you want the function
  //to return as new state
  const familyMembers = oldFamilyMembers.filter((i) => i.id !== id);
  const member = JSON.parse(
    JSON.stringify(oldFamilyMembers.find((i) => i.id === id))
  );
  member.votes++;
  return [...familyMembers, member]
};

const downVote = (oldFamilyMembers, id) => {
  const familyMembers = oldFamilyMembers.filter((i) => i.id !== id);
  const member = JSON.parse(
    JSON.stringify(oldFamilyMembers.find((i) => i.id === id))
  );
  member.votes--;
  return [...familyMembers, member]
};

const familyMembersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DOWN_VOTE":
      return downVote(state, action.payload); //where payload is the id of the member
    case "UP_VOTE_ASYNC":
      return upVote(state, action.payload);
    default:
      return state;
  }
};

export default familyMembersReducer;