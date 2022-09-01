import '../styles/InifiniteRollTag.scss'
import { useState } from 'react'

export default function InfiniteRollTag(props) {

  return (
    <div class="bigpadding text background">
      <button class="wt-btn_sign text background-reverse">
        <span class="wt-btn_sign-bound text-reverse background-reverse">
          <span data-width="#fff" data-text={props.content}>{props.content}</span>
        </span>
      </button>
    </div>
  )
}