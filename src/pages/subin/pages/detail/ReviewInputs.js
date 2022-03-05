import React from 'react';

function ReviewInputs({ writer, comment, inputChange, addReview }) {
  return (
    <div className="reviewInputs">
      <input
        name="writer"
        type="text"
        className="rvInput"
        placeholder="아이디"
        onChange={inputChange}
        value={writer}
      />
      <input
        name="comment"
        type="text"
        className="rvInput"
        placeholder="리뷰 내용"
        onChange={inputChange}
        value={comment}
      />
      <button className="reviewBtn" onClick={addReview}>
        등록
      </button>
    </div>
  );
}

export default ReviewInputs;
