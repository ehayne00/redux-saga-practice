import React from "react";
import MemberCard from "../components/MemberCard";
import {connect} from 'react-redux'

const FamilyList = ({familyMembers}) => {
  const sortedFamily = familyMembers.slice().sort((a, b) => b.votes - a.votes);
  return (
    <div className="flex">
        {sortedFamily.map((member) => 
      <MemberCard
        key={member.id}
        member={member}
      />)}
    </div>
  )
};

const mapStateToProps = state => ({
  familyMembers: state.familyMembers
})

export default connect(mapStateToProps)(FamilyList);