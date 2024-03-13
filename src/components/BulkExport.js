import React, { useState, useEffect } from 'react';
import './BulkExport.css';
import { toast } from 'react-toastify';

function BulkExport() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/order')
      .then(response => response.json())
      .then(data => setUserData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  function handleDownload(userId) {
    fetch(`http://localhost:5000/order/${userId}/download_orders`)
    .then(response => {
        if(response.status === 200){
          response.json() 
            .then(data => {
              console.log(data)
                if (data && data.message) {
                    toast.success(data.message);
                } else {
                    toast.error('Invalid response data'); 
                }
            })
        } 
        else {
          toast.error('Failed to export order details');
        }
      })
      .catch(error => {
        console.log(error)
        toast.error('Something went wrong');
      });
  }


  

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Email</th>
            <th>Download(csv)</th>
          </tr>
        </thead>
        <tbody>
          {userData.map(user => (
            <tr key={user.id}>
              <td>{user.user_name}</td>
              <td>{user.email}</td>
              <td><button onClick={() => handleDownload(user.id)}>Download</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BulkExport;
