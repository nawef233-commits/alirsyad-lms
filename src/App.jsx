import React, { useState } from 'react';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import LandingPage from './components/LandingPage';
import LoginForm from './components/LoginForm';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import { Button } from './components/ui/button';
import { LogOut, User, Home } from 'lucide-react';

const AppContent = () => {
  const { currentUser, userRole, logout } = useAuth();
  const [currentView, setCurrentView] = useState('landing'); // 'landing', 'login'

  const handleLogout = async () => {
    try {
      await logout();
      setCurrentView('landing'); // Return to landing page after logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const handleLoginClick = () => {
    console.log('Login button clicked, switching to login view');
    setCurrentView('login');
  };

  const handleBackToLanding = () => {
    console.log('Back to landing clicked, switching to landing view');
    setCurrentView('landing');
  };

  // If user is logged in, show dashboard
  if (currentUser) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center space-x-3">
                <div className="bg-blue-600 p-2 rounded-lg">
                  <User className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">LMS IPA SD</h1>
                  <p className="text-sm text-gray-500">
                    {userRole === 'teacher' ? 'Dashboard Guru' : 'Dashboard Siswa'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">
                  {currentUser.name || currentUser.email}
                </span>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleBackToLanding}
                  className="mr-2"
                >
                  <Home className="h-4 w-4 mr-2" />
                  Beranda
                </Button>
                <Button variant="outline" size="sm" onClick={handleLogout}>
                  <LogOut className="h-4 w-4 mr-2" />
                  Keluar
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main>
          {userRole === 'teacher' ? <TeacherDashboard /> : <StudentDashboard />}
        </main>
      </div>
    );
  }

  // If no user, show based on currentView
  if (currentView === 'login') {
    return <LoginForm onBackToLanding={handleBackToLanding} />;
  }

  // Default: show landing page
  return <LandingPage onLoginClick={handleLoginClick} />;
};

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;