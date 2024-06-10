import React from 'react';

export default function Button(props) {
  const disableStyle = props.disable ? 'cursor-not-allowed bg-sky-600' : 'cursor-pointer bg-stone-500'
  return (
    <button
      onClick={() => props.onclick()}
      disabled={props.disable}
      type='button'
      className={`${disableStyle} rounded-sm p-2`}
    >
      <img src={props.src} alt="button" className="size-4" />
    </button>
  );
}
