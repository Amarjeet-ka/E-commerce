import React, { useEffect, useState } from 'react';
import './d.css';

const Dashboard = () => {
  const [messages, setMessages] = useState([]);
  const [purchaseIds, setPurchaseIds] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api3/getmessages');
        const data = await response.json();
        setMessages(data);
        
        const uniquePurchaseIds = Array.from(new Set(data.map((message) => message.purchaseId)));
        setPurchaseIds(uniquePurchaseIds);
      } catch (error) {
        console.error('Failed to retrieve messages:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-heading" style={{fontSize:70}} > Dashboard</h1>
      {purchaseIds.length > 0 ? (
        <table className="purchase-table">
          <thead>
            <tr>
              <th>Purchase ID</th>
              <th>Messages</th>
            </tr>
          </thead>
          <tbody>
            {purchaseIds.map((purchaseId) => {
              const relevantMessages = messages.filter((message) => message.purchaseId === purchaseId);
              return (
                <tr key={purchaseId}>
                  <td>{purchaseId}</td>
                  <td>
                    <ul className="message-list">
                      {relevantMessages.map((message) => (
                        <li key={message._id} className="message-item">
                          <strong className="complaint-label">Complaint:</strong> {message.text}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        <p>No purchase IDs found.</p>
      )}
    </div>
  );
};

export default Dashboard;
