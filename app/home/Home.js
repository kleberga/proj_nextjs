'use client';

import PrivateRoute from "../../components/privateRoute";
import Link from 'next/link';
import ReactPaginate from "react-paginate";
import { useState } from 'react';
import { IconContext } from 'react-icons';
import { AiFillLeftCircle, AiFillRightCircle } from 'react-icons/ai';

export default function Home({ posts }) {
  const [currentPage, setCurrentPage] = useState(0);

  function convertToDate(dateString) {
    return new Date(dateString); 
  }

  const handlePageChange = ({ selected: page }) => setCurrentPage(page);
  const newsPerPage = 10;
  const totalPages = Math.ceil(posts.length / newsPerPage);
  const startIndex = currentPage * newsPerPage;
  const endIndex = startIndex + newsPerPage;
  const array_sorted = [...posts].sort((a, b) => convertToDate(b.date) - convertToDate(a.date));
  const currentItems = array_sorted.slice(startIndex, endIndex);

  return (
    <PrivateRoute>
      <div>
        <ul>
          {currentItems.map(post => (
            <li key={post.fileName}>
              <Link className="text-lg font-bold text-green-600" href={`/posts/${post.fileName.replace('.md', '')}`}>
                {post.title}
              </Link>
              <p className="text-base">{post.description}</p>
              <p className="text-xs">Publicado em: {Intl.DateTimeFormat('pt-BR').format(new Date(post.date))}</p>
            </li>
          ))}
        </ul>
        <ReactPaginate
          className="place-content-center flex flex-row space-x-2 text-xl font-bold"
          activeClassName={"active"}
          pageClassName={"page-item"}
          breakLabel={"..."}
          containerClassName={'pagination'}
          onPageChange={handlePageChange}
          pageCount={totalPages}
          previousLabel={
            <IconContext.Provider value={{ color: "#31511E", size: "36px" }}>
              <AiFillLeftCircle />
            </IconContext.Provider>
          }
          nextLabel={
            <IconContext.Provider value={{ color: "#31511E", size: "36px" }}>
              <AiFillRightCircle />
            </IconContext.Provider>
          }
        />
      </div>
    </PrivateRoute>
  );
}

