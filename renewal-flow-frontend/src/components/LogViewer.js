import React, { useEffect, useState } from 'react';
import axios from 'axios';

const LogViewer = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/flow/logs');
        setLogs(response.data);
      } catch (error) {
        console.error('Error fetching logs', error);
      }
    };

    fetchLogs();
  }, []);

  return (
    <div className="log-viewer">
      <h2>Flow Logs</h2>
      <table>
        <thead>
          <tr>
            <th>User Email</th>
            <th>Status</th>
            <th>Logs</th>
            <th>Last Updated</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log, index) => (
            <tr key={index}>
              <td>{log.userEmail}</td>
              <td>{log.status}</td>
              <td>
                <ul>
                  {log.logs.map((entry, idx) => (
                    <li key={idx}>{entry}</li>
                  ))}
                </ul>
              </td>
              <td>{new Date(log.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogViewer;
