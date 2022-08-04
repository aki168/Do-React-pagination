import React, { useState } from 'react'


export const Post = ({ loading, data }) => {
  // 父的state做為參數傳給子組件

  (loading && <h2 className='text-secondary'> Loading....</h2>)

  const [toggle, setToggle]=useState({});

  // 顯示單筆文章
  const toggleArticle = (e,id) =>{
    e.preventDefault();
    setToggle({
      ...toggle,
      [id]: !toggle[id]
    })
  }

  return (
    <>
      <ul className='list-group mt-4'>
        {data.map(item =>
          <li key={item.id} className='list-group-item'>
            <a className='text-decoration-none' href="!#" onClick={(e) => toggleArticle(e,item.id)}>
              {item.title}
            </a>
            <p className={`${toggle[item.id] ? `d-block`:`d-none`}`}>
              {item.body}
            </p>
          </li>)}
      </ul>
    </>
  )
}
export default Post;