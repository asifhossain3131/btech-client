import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const AdvertisementDetails = () => {
    const adertisementInfos=[
        {
            title:'Advertisement Revenue',cost:'$100.00',profit:'+10.5%'
        },
        {
            title:'New Creators',cost:'11',profit:'+2.70%'
        },
        {
            title:'Number Of Posts',cost:'490',profit:'+189.5%'
        },
        {
            title:'Deals Completed',cost:'200',profit:'-176.5%'
        },
        {
            title:'Active Deals',cost:'40',profit:'+10.5%'
        }
    ]
    return (
        <div className="p-2 w-10/12 mx-auto flex">
            {
                adertisementInfos.map(({title,cost,profit},i)=>
                <div key={i} className={`flex flex-col justify-center text-center ${title!=='Active Deals' && 'border-r border-r-gray-300'} items-center p-4`}>
                <h1 className='text-gray-500'>{title}</h1>
                <p className='font-bold'>{cost}</p>
                <div className={`${title==='Deals Completed'? 'bg-red-300':'bg-green-300'} w-20 text-center text-sm rounded`}>
                    {title==='Deals Completed'? <ArrowDropDownIcon></ArrowDropDownIcon> :<ArrowDropUpIcon></ArrowDropUpIcon>}
                    <span className='text-gray-600 text-sm'>{profit}</span>
                </div>
            </div>
                )
            }
        </div>
    );
};

export default AdvertisementDetails;