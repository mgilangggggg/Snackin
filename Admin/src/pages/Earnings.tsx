import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';
import EarningsComponent from '../components/Earnings/EarningsComp';

const App: React.FC = () => {
    return (
        <DefaultLayout>
        <div className="mx-auto max-w-270">
          <Breadcrumb pageName="Penghasilan" />
      <div className="mb-5">
    <div>
      <EarningsComponent />
                    </div>
                </div>
                </div>
      </DefaultLayout>
  );
};

export default App;
