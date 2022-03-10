import React from 'react';

function CreateUser({ writer, comment, onChange, onCreate }) {
  return (
    <div>
      <input
        name="writer"
        type="text"
        placeholder="ID"
        onChange={onChange}
        value={writer}
        className="reviewIdInput"
      />
      <input
        name="comment"
        type="text"
        placeholder="메뉴에 대한 의견을 써주세요"
        onChange={onChange}
        value={comment}
        className="reviewCommentInput"
      />
      <button className="reviewAddBtn" onClick={onCreate}>
        {' '}
        등 록{' '}
      </button>
    </div>
  );
}

export default CreateUser;
