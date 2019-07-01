import React, { Component } from 'react'
import './style.css';

const Modal = ({ modal, handleModal }) => {
    return (
      <div>
        <div className={modal ? 'modal' : 'modal-close'}>
            <div className="container">
              <div className={modal ? 'modal-open' : 'modal-close'}>
                <span onClick={handleModal} className="close">&times;</span>

                <div className="modal-content">
                  <table>

                    <tbody className="modal-content-header">
                      <tr>
                        <th>Firstname</th>
                        <th>Lastname</th> 
                        <th>Age</th>
                      </tr>
                    </tbody>
                    <tr>
                      <td className="modal-content-left">Jill</td>
                      <td>Smith</td>
                      <td>50</td>
                    </tr>
                    <tr>
                      <td className="modal-content-left">Eve</td>
                      <td>Jackson</td>
                      <td>94</td>
                    </tr>
                    <tr>
                      <td className="modal-content-left">John</td>
                      <td>Doe</td>
                      <td>80</td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}

export default Modal;
