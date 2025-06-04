import React from 'react';
import MainAppLayout from '../components/layout/MainAppLayout';
import LoginCard from '../components/Auth/LoginCard';

/**
 * IndexPage serves as the main landing page, currently displaying the Login interface.
 * It utilizes the MainAppLayout for overall page structure and centering,
 * and embeds the LoginCard component for the authentication form.
 */
const IndexPage: React.FC = () => {
  return (
    <MainAppLayout>
      <LoginCard />
    </MainAppLayout>
  );
};

export default IndexPage;
