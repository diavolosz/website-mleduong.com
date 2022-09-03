import '../styles/InifiniteRollTag.scss'
import { useState } from 'react'

export default function InfiniteRollTag(props) {

  return (
    <div className="bigpadding text background">
      <button className="wt-btn_sign text background-reverse">
        <span className="wt-btn_sign-bound text-reverse background-reverse">
          <span data-width="#fff" data-text={props.content}>{props.content}</span>
        </span>
      </button>
    </div>
  )
}