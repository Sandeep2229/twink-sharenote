// API Configuration
// In development, defaults to localhost:3000
// In production, set VITE_API_URL environment variable in Vercel

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

export const API_ENDPOINTS = {
  // Auth
  login: `${API_BASE_URL}/api/auth/login`,
  register: `${API_BASE_URL}/api/auth/register`,
  
  // Documents
  allDocs: `${API_BASE_URL}/api/docs/all`,
  createDoc: `${API_BASE_URL}/api/docs/create`,
  getDoc: (docId) => `${API_BASE_URL}/api/docs/${docId}`,
  getChanges: (docId) => `${API_BASE_URL}/api/docs/changes/${docId}`,
  deleteDoc: (docId) => `${API_BASE_URL}/api/docs/delete/${docId}`,
  renameDoc: (docId) => `${API_BASE_URL}/api/docs/rename/${docId}`,
  
  // Sharing
  addUser: (docId) => `${API_BASE_URL}/api/docs/users/add/${docId}`,
  removeUser: (docId) => `${API_BASE_URL}/api/docs/users/remove/${docId}`,
};

// WebSocket URL (converts http to ws, https to wss)
export const getWebSocketUrl = () => {
  const wsProtocol = API_BASE_URL.startsWith('https') ? 'wss' : 'ws';
  const baseWithoutProtocol = API_BASE_URL.replace(/^https?:\/\//, '');
  return `${wsProtocol}://${baseWithoutProtocol}/docs/ws`;
};

