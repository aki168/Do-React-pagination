import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './components/Post';
import Pagination from './components/Pagination';

export default function App() {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // 設定：目前要渲染哪一頁
  const [currentPage, setCurrentPage] = useState(1);
  // 設定：每一頁有幾筆
  const [perPage, setPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setData(res.data);
      setLoading(false);
    }

    fetchData();
  }, [])

  console.log(data);

  // arr.slice(0,2) =>> 取出arr[0]&arr[1]取2個資料排一個陣列
  // 獲取當前頁面的資料
  const sliceEnd = currentPage * perPage; // 若我在第二頁時=2*10=第20筆
  const sliceStart = sliceEnd - perPage; // 第20筆 - 每頁有幾筆＝第10筆
  // 淺拷貝部分data,取出當前頁面所需資料
  const currentPost = data.slice(sliceStart, sliceEnd);
  const totalItems = data.length;

  const changePage = (e, num) => {
    e.preventDefault();
    setCurrentPage(num)
  }
  const goToPrevPage = (e, currentPage) => {
    e.preventDefault();
    setCurrentPage(currentPage - 1)
  }
  const goToNextPage = (e, currentPage) => {
    e.preventDefault();
    setCurrentPage(currentPage + 1)
  }



  return (
    <div className='container p-3'>
      <h1 className='text-primary fw-bold'>Aki's Blog</h1>
      <p className='text-secondary'>練習製作 React-pagination</p>
      <Post loading={loading} data={currentPost} />
      <Pagination
        perPage={perPage}
        totalItems={totalItems}
        changePage={changePage}
        goToPrevPage={goToPrevPage}
        goToNextPage={goToNextPage}
        currentPage={currentPage}
      />
    </div>
  )
}