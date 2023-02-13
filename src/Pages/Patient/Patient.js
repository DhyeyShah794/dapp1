import { React } from 'react';

const Patient = () => {
    const registration = localStorage.getItem('registration');
    return (
        <div>
            <div className="flex justify-center mt-20">
                {registration ? <h1>Registered: {registration}</h1> : <h1>Registered: false</h1>}
            </div>
        </div>
    );
}

export default Patient;
