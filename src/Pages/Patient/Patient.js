import { React } from 'react';

const Patient = () => {
    const handleRecords = () => {
        var buttonText = document.getElementById('show-records-btn').innerHTML;
        if (buttonText === 'View medical records') {
            document.getElementById('show-records-btn').innerHTML = 'Hide medical records';
            // document.getElementById('records').style.display = 'block';
        }
        else {
            document.getElementById('show-records-btn').innerHTML = 'View medical records';
            // document.getElementById('records').style.display = 'none';
        }
    }
    return (
        <div className="flex flex-col m-auto mt-24 w-fit">
            <div className="patient-card w-full">
                <div className="w-full m-0 p-2 text-lg bg-slate-200">Personal Information</div>
                <table className="mx-8 my-4">
                    <tbody>
                        <tr className="h-8 border-y-2 border-solid border-slate-300">
                            <th className="w-48 text-left">Name:</th>
                            <td id="name" className="w-96 text-left">John Doe</td>
                        </tr>
                        <tr className="h-8">
                            <th className="text-left">Age:</th>
                            <td id="age" className="text-left">21</td>
                        </tr>
                    </tbody>
                </table>
                <span className="text-sm">Your records are stored here: http://localhost:3000</span>

                <div className="h-12 mt-2">
                    <button id="show-records-btn" className="text-sm p-2 bg-sky-500 text-white rounded-md" onClick={handleRecords}>
                        View medical records
                    </button>
                </div>
            </div>

            <div className="patient-card w-full">
                <div className="w-full m-0 p-4 text-lg bg-slate-200">Share your medical record</div>
                <table className="mx-8 my-4">
                    <tbody>
                        <tr>
                            <td className="w-24 text-left">Doctor:</td>
                            <td className="text-left">
                                <select className="w-72 px-2 py-1 bg-white border-2 border-solid border-slate-200">
                                    <option value="Dr. 1">Dr. 1</option>
                                    <option value="Dr. 2">Dr. 2</option>
                                    <option value="Dr. 3">Dr. 3</option>
                                </select>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="h-8 mb-3">
                    <button className="text-sm p-2 bg-sky-700 text-white rounded-md">Submit</button>
                </div>
            </div>

            <div className="patient-card w-full">
                <div className="w-full m-0 p-4 text-lg bg-slate-200">Current EMR access holders</div>
                <table id="records" className="mx-8 my-4">
                    <tbody>
                        <tr className="h-8 border-y-2 border-solid border-slate-300">
                            <th className="w-48 text-left">Doctor</th>
                            <td className="w-64 text-left">Public Key</td>
                            <td className="w-32 text-left">Revoke access</td>
                        </tr>
                        <tr className="h-12">
                            <td className="text-left">Dr. 1</td>
                            <td className="text-left">nDfUyIiz8yD3MHyrDw5pg9RQ8</td>
                            <td className="">
                                <button className="m-auto text-sm p-1 bg-red-600 text-white rounded-md">Revoke</button>
                            </td>
                        </tr>
                        <tr className="h-8">
                            <td className="text-left">Dr. 2</td>
                            <td className="text-left">L25xiHMuHQZhx42SRFVCKfMB3</td>
                            <td className="h-8 flex justify-center items-center">
                                <button className="m-auto text-sm p-1 bg-red-600 text-white rounded-md">Revoke</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Patient;
