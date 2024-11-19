import React, { useState } from 'react';
import { startFlow } from '../api/flowApi';
import { toast } from 'react-toastify';

const FlowSimulation = () => {
  const [userEmail, setUserEmail] = useState('');
  const [logs, setLogs] = useState([]);
  const [isRunning, setIsRunning] = useState(false);

  const handleStartFlow = async () => {
    if (!userEmail) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsRunning(true);
    toast.info('Starting flow...');
    try {
      const response = await startFlow(userEmail);
      toast.success('Flow started successfully.');
      setLogs(response.data.logs || []);
    } catch (error) {
      toast.error('Error starting flow');
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="flow-simulation">
      <h2>Newsletter Subscription Renewal Flow</h2>
      <div className="input-group">
        <input
          type="email"
          placeholder="Enter user email"
          value={userEmail}
          onChange={(e) => setUserEmail(e.target.value)}
        />
        <button onClick={handleStartFlow} disabled={isRunning}>
          {isRunning ? 'Running...' : 'Start Flow'}
        </button>
      </div>
      <div className="logs">
        <h3>Logs:</h3>
        <ul>
          {logs.map((log, index) => (
            <li key={index}>{log.message}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FlowSimulation;
