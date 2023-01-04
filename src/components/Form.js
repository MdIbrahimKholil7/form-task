import React, { useState } from 'react';
import { options } from './utils/data';
import uuid from 'react-uuid';
const Form = () => {

    const [selectedValue, setSelectedValue] = useState('')
    const [error, setError] = useState({})


    const handleFormSubmit = e => {
        e.preventDefault();

        if (!selectedValue && !e.target.name.value) {
            return setError({
                selectedValue: "Please select a value",
                nameValue: "Please enter a name"
            })
        }
        if (!e.target.name.value) {
            return setError({
                nameValue: "Please enter a name"
            })
        }
        if (!selectedValue) {
            return setError({
                selectedValue: "Please select a value",
            })
        }

        setError({
            selectedValue: "",
            nameValue: ""
        })
        const obj = {
            optionName: e.target.name.value,
            subOptions: [
                {
                    name: selectedValue,

                },

            ],
            agreeTerms: true
        }

        options.push(obj)
        e.target.reset()

    }


    return (
        <div className=''>
            <div>
                <h1 className='text-2xl font-bold'>Please enter your name and pick the Sectors you are currently involved in.</h1>
            </div>
            <div className='border-2 w-[70%] mx-auto mt-10 border-indigo-300 py-20 px-7 flex justify-center items-center'>
                <form onSubmit={handleFormSubmit}>
                    <div className='flex items-center gap-5 justify-between'>
                        <label htmlFor="name">Name <span>:</span></label>
                        <input id='name' type="text" placeholder="Type here" className="input input-bordered input-md w-[83%]" />

                    </div>
                    {
                        error.nameValue &&
                        <div className='text-red-500 py-3 text-[13px] mb-2'>
                            {error.nameValue}
                        </div>
                    }
                    <div className='flex items-center gap-5 justify-between mt-7'>
                        <label htmlFor="select">Selectors   <span>:</span></label>
                        <select
                            onChange={e => setSelectedValue(e.target.value)}
                            style={{
                                fontWeight: 'bold'
                            }} id='select ' className='py-3 px-1 rounded-xl cursor-pointer' value={selectedValue}>
                            {
                                options.map((opt) => {

                                    return <>
                                        <option
                                            key={uuid()}
                                            className='font-bold ' value={opt?.optionName}>{opt?.optionName}</option>

                                        {
                                            opt.subOptions.map((op) => {
                                                return (
                                                    <>
                                                        {op.name && <option key={uuid()} value={op.name}>&nbsp;&nbsp;&nbsp;&nbsp;{op.name}</option>}
                                                        {
                                                            op?.subCategory?.subCategoryName && <option key={uuid()} value={op?.subCategory?.subCategoryName}>&nbsp;&nbsp;&nbsp;&nbsp;{op?.subCategory?.subCategoryName}</option>
                                                        }
                                                        {
                                                            op?.subCategory?.subCategoryItems && (op.subCategory?.subCategoryItems?.map(opti => {
                                                                return (
                                                                    <>
                                                                        <option key={uuid()} value={opti?.name}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{opti?.name}</option>
                                                                        {
                                                                            opti?.subCategoryChild?.subCatChildName && <option
                                                                                key={uuid()}
                                                                                disabled={true} value={opti?.subCategoryChild?.subCatChildName}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{opti?.subCategoryChild?.subCatChildName}</option>
                                                                        }
                                                                        {
                                                                            opti?.subCategorys && opti?.subCategorys?.map(o => {
                                                                                return (<>
                                                                                    <option key={uuid()} value={o.name}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{
                                                                                        o.name
                                                                                    } </option>
                                                                                </>)
                                                                            })
                                                                        }
                                                                    </>
                                                                )
                                                            }))
                                                        }

                                                    </>
                                                )
                                            })
                                        }
                                    </>
                                })
                            }
                        </select>
                    </div>
                    {
                        error.selectedValue &&
                        <div className='text-red-500 py-3 text-[13px] mb-2'>
                            {error.selectedValue}
                        </div>
                    }
                    <div className='w-[130px] mt-6' >
                        <div className="form-control">
                            <label className="label cursor-pointer">
                                <input required type="checkbox" className="checkbox" />
                                <span className="label-text">Agree to terms</span>
                            </label>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <button className='btn text-white  bg-[#5b5c5b]'>Save</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Form;