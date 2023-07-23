import Button from '@mui/material/Button';
import AdvertisementDetails from '../../components/AdvertisementDetails';
import DashboardTable from '../../components/DashboardTable';

const DashboardMain = () => {
    return (
        <div className="bg-gray-200 bg-opacity-60 w-full">
            <div className='flex flex-col lg:flex-row items-center justify-between p-8'>
                <h1 className='font-semibold'>Advertisement Performance Overview</h1>
                <div className='flex items-center gap-x-3'>
                <Button size='small' variant="outlined" className='bg-white border-none text-black font-medium'>Previous Year</Button>
                <Button size='small' variant="contained" className='bg-teal-600 font-medium'>View All Dashboard</Button>
                </div>
            </div>
            <AdvertisementDetails></AdvertisementDetails>
            <DashboardTable></DashboardTable>
        </div>
    );
};

export default DashboardMain;