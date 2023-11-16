'use client';
import React, {useContext} from 'react';
import {themeContext} from './../context/Theme.tsx';
import Row from './Row'

export default function DashBoard() {
  const {theme} = useContext(themeContext);
  return (
    <>
      <div className="overflow-x-auto min-h-screen">
        <table className="table">
          <thead>
            <tr className={theme ? 'text-white' : 'text-black'}>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            <Row />
          </tbody>
        </table>
      </div>
    </>
  )
}
