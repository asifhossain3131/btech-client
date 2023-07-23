import './Login.css'
import LoginNavbar from './LoginNavbar';

const Login = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-4'>
            <div className='lg:w-1/2'>
              <LoginNavbar></LoginNavbar>
            </div>
            <div className='lg:w-1/2 mx-6 lg:mx-0'>
                <img className='loginImg' src="https://media.istockphoto.com/id/852339474/vector/social-media-technology-young-couple-cartoon.jpg?s=1024x1024&w=is&k=20&c=DAQicYadOw0grZhYZpWpbogSRV2LbvzGXijzCUxmM_I=" alt="" />
            </div>
        </div>
    );
};

export default Login;
