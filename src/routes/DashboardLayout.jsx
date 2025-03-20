import { Outlet } from 'react-router-dom';
import DefaultLayout from '../dashboard/src/layout/DefaultLayout';

function DashboardLayout() {
  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
}

export default DashboardLayout;