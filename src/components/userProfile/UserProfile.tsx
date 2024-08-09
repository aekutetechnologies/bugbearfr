import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import user from '../image/user_man.jpeg'
import { MdOutlineEdit } from "react-icons/md";
import { RiAddLargeFill } from "react-icons/ri";
import comp from '../image/img-comp.jpg'
import { HiOutlineArrowRight } from "react-icons/hi";
import './user.css'
import axios from 'axios';
import { toast } from 'react-toastify';
import { RegisterApi } from '../../api/RegisterApi';
interface Skill {
    id: number;
    name: string;
  }
const UserProfile = () => {
    const [show1, setShow1] = useState<Boolean>(false)
    const [showModal, setShowModal] = useState(false);
    const [showModal1, setShowModal1] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    const [showModal3, setShowModal3] = useState(false);
    const [showModal4, setShowModal4] = useState(false);
    const [showModal5, setShowModal5] = useState(false);
    const [showModal6, setShowModal6] = useState(false);
    const [showModal7, setShowModal7] = useState(false);

    const [skills, setSkills] = useState<Skill[]>([]);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [newSkill, setNewSkill] = useState<string>('');
    const [editMode, setEditMode] = useState<boolean>(false);

    const [selectedMonth, setSelectedMonth] = useState('');
    const [selectedYear, setSelectedYear] = useState('');

    const [datastore, setdatastore] = useState<any>([]);
    const [SuccessMessage,setSuccessMessage]=useState<string>('');
    const [image, setImage] = useState<string | null>(null);
    const [image2, setImage2] = useState<string | undefined>(undefined);
    const [profile, setProfile] = useState<string | Blob>("")
    const [info,setInfo]=useState<object>({first_name: "", last_name: "", position: "", email: "", phone: "" })

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    const token = localStorage.getItem('token');
  const inputRef = useRef<HTMLInputElement | null>(null);
    const handleImageClick = () => {
        inputRef.current?.click();
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {

        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setProfile(file)
            console.log("from api", datastore.profile_pic)
            console.log("from component", file)
            setImage(URL.createObjectURL(file)); // Create a URL for the selected file
            HandleProfileImage(file); 
        }
        console.log(e.target.files)
    }
    const HandleProfileImage = async (file: Blob) => {

        const formData = new FormData();
        formData.append("profile_pic", file);
        try {
            console.log("Profilee", profile)
            const response = await axios.post(" https://bugbearback.onrender.com/api/user/upload-profile-pic/", formData,
            {
                        headers: {
                          Authorization: `Bearer ${token}`
                        }
                      }
                );
            console.log("uploaded", response);
        } catch (error) {
            console.log('Error register:', error);
        }
    }

    const postEditIntroInfo = async () => {
        
        try {
            const response = await RegisterApi().REGISTER("user-details/", info)
            fetchProfile()
            setSuccessMessage('Edited intro successfully!');
            console.log(SuccessMessage, response);

        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }
    const handleChangeIntro=(e:ChangeEvent<HTMLInputElement>)=>{
        const {value,name}=e.target;
        setInfo(prevState=>({...prevState,[name]:value}))
    }

  const fetchProfile = async () => {
    try {
         // Replace this with how you store the token
      const response = await axios.get(" https://bugbearback.onrender.com/api/user/user-details/", {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
        setdatastore(response.data);
        console.log("fetch success", response)
        if (response) {
            setImage2(response.data.profile_pic_url)
        }
      
    } catch (error) {
        console.error("Error fetching profile:", error);
        toast.error("Error fetching profile.");
    }

}
useEffect(()=>{
    fetchProfile()
},[])

  const addSkill = () => {
    if (newSkill.trim() !== '') {
      setSkills([...skills, { id: skills.length, name: newSkill }]);
      setNewSkill('');
      closeModal();
    }
  };

  const deleteSkill = (id: number) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const handleSkillChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewSkill(e.target.value);
  };
    // Month names for the dropdown
    const months = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];

    // Years for the dropdown (example: last 10 years)
    const years = Array.from({ length: 10 }, (_, index) => new Date().getFullYear() - index);

    const handleMonthChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(e.target.value);
    };

    // Handler for year selection
    const handleYearChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setSelectedYear(e.target.value);
    };
    const handleShowModal = () => {
        setShowModal(true);
    };
    const handleShowModal1 = () => {
        setShowModal1(true);
    };
    const handleShowModal2 = () => {
        setShowModal2(true);
    };
    const handleShowModal3 = () => {
        setShowModal3(true);
    };
    const handleShowModal4 = () => {
        setShowModal4(true);
    };
    const handleShowModal5 = () => {
        setShowModal5(true);
    };
    const handleShowModal6 = () => {
        setShowModal6(true);
        setEditMode(!true)
    };
    const handleShowModal7 = () => {
        setShowModal7(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };
    const handleCloseModal1 = () => {
        setShowModal1(false);
    };
    const handleCloseModal2 = () => {
        setShowModal2(false);
    };
    const handleCloseModal3 = () => {
        setShowModal3(false);
    };
    const handleCloseModal4 = () => {
        setShowModal4(false);
    };
    const handleCloseModal5 = () => {
        setShowModal5(false);
    };
    const handleCloseModal6 = () => {
        setShowModal6(false);
    };
    const handleCloseModal7 = () => {
        setShowModal7(false);
    };

    
    return (
        <>
            <div>
                {datastore&&<div className='w-[95%] h-72 bg-white rounded-[10px] m-auto flex justify-evenly mt-5'>
                    <div className='flex gap-1 w-[90%] mt-6'>
                        {/* <div className='w-52 h-52 rounded'>
                            <img src={user} alt="" className='h-full w-full rounded' />
                        </div> */}
                        <div className='w-52 h-52 rounded overflow-hidden group bg-red-200 m-2' onClick={handleImageClick}>
                        {image ? <img src={image} alt="Profile Preview" className="w-full h-full hover:border border-[#f6ff00] group-hover:border-[4px]" /> : <>{datastore.profile_pic_url ? (<img src={datastore.profile_pic_url} alt="Profile Picture" className="hover:border border-[#f6ff00] group-hover:border-[4px] w-full h-full" />) : (<img src={user} alt="Userrrrrrrrr Placeholder" className="w-full h-auto hover:border border-[#f6ff00] group-hover:border-[4px]" />)}</>}
                        <div className="relative bottom-9 w-11 h-11 ml-auto mr-2 bg-[#f6ff00] rounded-full h-6 w-6 flex item-center justify-center invisible group-hover:visible"><MdOutlineEdit className="mt-1" /></div>
                        <input type="file" onChange={handleChange} ref={inputRef} className="hidden text-white file:w-[60%] file:h-9 mt-3 mb-4" />
                        </div>
                        <div>
                            <h1 className='text-5xl'>{datastore.first_name} {datastore.last_name}</h1>
                            <p className='text-xl mt-1'>{datastore.position}</p>
                            <p className='text-gray-400 text-base mt-1'>{datastore.country},{datastore.address}</p>
                            <p className='font-medium mt-1'>10 connectinos</p>
                            <p className='mt-1'>152 followers</p>
                        </div>
                        <div className='ml-auto'>
                            <MdOutlineEdit size={35} color="black" className='cursor-pointer ml-auto' onClick={handleShowModal} />
                            <p className='text-gray-400 mt-1'>{datastore.email}</p>
                            <p className='mt-1'>{datastore.phone}</p>
                        </div>
                    </div>
                </div>}
                <div className='w-[95%] m-auto h-72 rounded-[10px] bg-white mt-5'>
                    <div className='w-[90%] m-auto flex justify-evenly pt-10'>
                        <h1 className='text-4xl font-medium'>About</h1>
                        <MdOutlineEdit size={35} color="black" className='cursor-pointer ml-auto' onClick={handleShowModal1} />
                    </div>
                    <div className='w-[90%] m-auto pt-5'>
                        <p className='text-gray-400 text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem id inventore sequi dignissimos iusto! Mollitia veritatis excepturi eius dignissimos. Qui, blanditiis. Delectus nam voluptate ipsum esse ipsa quibusdam voluptates mollitia!</p>
                    </div>
                </div>
                <div className='w-[95%] h-80 m-auto rounded-[10px] bg-white mt-5'>
                    <div className='w-[90%] m-auto flex bg-white justify-evenly pt-10'>
                        <h1 className='text-4xl font-medium'>Education</h1>
                        <RiAddLargeFill size={35} color="black" className='ml-auto' onClick={handleShowModal2} />
                    </div>
                    <div className='w-[90%] flex m-auto justify-evenly mt-7'>
                        <div className='flex gap-5'>
                            <div className='h-20 w-20'>
                                <img src={comp} alt="" className='h-full w-full'/>
                            </div>
                            <div>
                                <h1 className='text-xl font-medium'>XYZ University</h1>
                                <p>Master's degree</p>
                                <p>From - up to date</p>
                            </div>
                        </div>
                        <MdOutlineEdit size={35} color="black" className='cursor-pointer ml-auto' onClick={handleShowModal3} />
                    </div>
                    <div className='w-[90%] flex m-auto justify-evenly mt-5'>
                        <div className='flex gap-5'>
                            <div className='h-20 w-20'>
                                <img src={comp} alt="" className='h-full w-full' />
                            </div>
                            <div>
                                <h1 className='text-xl font-medium'>XYZ University</h1>
                                <p>Master's degree</p>
                                <p>From - up to date</p>
                            </div>
                        </div>
                        <MdOutlineEdit size={35} color="black" className='cursor-pointer ml-auto' onClick={handleShowModal4} />
                    </div>
                </div>
                <div className='w-[95%] h-72 bg-white mt-5 m-auto'>
                    <div className='w-[50%] m-auto text-center pt-6'>
                        <h1 className='text-4xl font-medium'>Activity</h1>
                    </div>
                    <div className='w-[90%] m-auto flex gap-6 mt-5'>
                        <button className='btn1 rounded-full border border-black'><span className='text-xl px-2'>Posts</span></button>
                        <button className='rounded-full border border-black'><span className='text-xl px-2'>Comments</span></button>
                        <button className='rounded-full border border-black'><span className='text-xl px-2'>Videos</span></button>
                        <button className='rounded-full border border-black'><span className='text-xl px-2'>Images</span></button>
                    </div>
                    <div className='w-[90%] m-auto mt-5'>
                        <h1 className='text-2xl font-medium'>You haven't posted yet</h1>
                        <p className='text-gray-400 text-2xl mt-2'>Posts you share will be displayed here</p>
                    </div>
                    <div className='w-full h-[1px] mt-5 bg-gray-500'></div>
                    <div className='justify-center flex w-fulll'>
                        <div className='flex gap-1 mt-3'>
                            <button className='text-xl font-medium'>Show all activity</button>
                            <HiOutlineArrowRight size={25}/>
                        </div>
                    </div>
                </div>
                <div className='w-[95%] bg-white h-64 rounded-[10px] m-auto mt-5'>
                    <div className='w-[90%] flex justify-evenly pt-5 m-auto'>
                        <h1 className='text-4xl font-medium'>Skills</h1>
                        <div className='flex ml-auto gap-3'>
                        <RiAddLargeFill size={35} onClick={handleShowModal5}/>
                        <MdOutlineEdit size={35} onClick={handleShowModal6}/>
                        </div>
                    </div>
                    <div className='w-[90%] m-auto mt-3'>
                    {skills.map(skill => (
                            <p className='text-2xl border-b'>{skill.name}</p>
                        ))}
                    </div>
                </div>
                <div className='w-[95%] bg-white h-64 rounded-[10px] m-auto mt-5'>
                    <div className='w-[90%] flex justify-evenly pt-5 m-auto'>
                        <h1 className='text-4xl font-medium'>Experience</h1>
                        <div className='flex ml-auto gap-3'>
                            <MdOutlineEdit size={35} onClick={handleShowModal7}/>
                        </div>
                    </div>
                    <div className='w-[90%] m-auto mt-3'>
                    
                    </div>
                </div>

            </div>
            {showModal && (
                <div
                    className='fixed inset-0 bg-white bg-opacity-30 z-100 backdrop-blur-sm h-full flex justify-center'
                    onClick={handleCloseModal}
                >
                    <div
                        className='rounded-lg p-2 shadow-lg w-[55%] h-[470px] bg-white mt-10 rounded-[8px]'
                        onClick={(e) => e.stopPropagation()} // Prevent modal closure on modal content click
                    >
                        <div className='w-[90%] m-auto border-b border-gray-400 pb-1 mb-5'>
                            <h1 className='text-4xl'>Edit intro</h1>
                        </div>
                        <div className='flex justify-evenly w-[90%] m-auto mb-5'>
                            <div className='w-[47%]'>
                                <label htmlFor="" className='text-lg mb-1'>First name</label>
                                <input type="text" name="first_name" id="" className='w-full border border-black rounded-[6px] h-10 outline-none' onChange={handleChangeIntro}/>
                            </div>
                            <div className='w-[47%] ml-auto'>
                                <label htmlFor="" className='text-lg mb-1'>Last name</label>
                                <input type="text" name="last_name" placeholder='last name' id="" className='w-full border border-black rounded-[6px] h-10 outline-none' onChange={handleChangeIntro}/>
                            </div>
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Designation</label>
                            <input type="text" name='position' className='w-full h-10 outline-none border border-black rounded-[6px]' onChange={handleChangeIntro}/>
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Email</label>
                            <input type="text" name='email' className='w-full h-10 outline-none border border-black rounded-[6px]' onChange={handleChangeIntro}/>
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Mobile</label>
                            <input type="text" name='phone' className='w-full h-10 outline-none border border-black rounded-[6px]' onChange={handleChangeIntro}/>
                        </div>
                        <div className='flex gap-4 w-[90%] m-auto'>
                            <button className='border border-black btn1 w-24 rounded h-8' onClick={postEditIntroInfo}><span className='text-black font-semibold'>Save</span></button>
                            <button className='border border-black bg-white w-24 rounded h-8'><span className='text-black font-semibold'>Cancel</span></button>
                        </div>
                    </div>
                </div>
            )}
            {showModal1 && (
                <div
                    className='fixed inset-0 bg-white bg-opacity-30 z-100 backdrop-blur-sm h-full flex justify-center'
                    onClick={handleCloseModal1}
                >
                    <div
                        className='p-2 shadow-lg w-[55%] h-[450px] bg-white mt-14 rounded-[10px]'
                        onClick={(e) => e.stopPropagation()} // Prevent modal closure on modal content click
                    >
                        <div className='w-[90%] m-auto border-b border-gray-400 pb-1 mb-5'>
                            <h1 className='text-4xl'>About</h1>
                        </div>
                        <div className='w-[90%] m-auto'>
                            <textarea placeholder='write something about....' className='w-full h-64 rounded-[10px] border border-black p-2 outline-none'></textarea>
                        </div>
                        <div className='flex gap-4 w-[90%] m-auto mt-5'>
                            <button className='border border-black btn1 w-24 rounded h-8'><span className='text-black font-semibold'>Save</span></button>
                            <button className='border border-black bg-white w-24 rounded h-8'><span className='text-black font-semibold'>Cancel</span></button>
                        </div>
                    </div>
                </div>
            )}
            {showModal2 && (
                <div
                    className='fixed inset-0 bg-white bg-opacity-30 z-100 backdrop-blur-sm h-full flex justify-center'
                    onClick={handleCloseModal2}
                >
                    <div
                        className='rounded-lg p-2 shadow-lg w-[55%] h-[570px] bg-white mt-10 rounded-[8px]'
                        onClick={(e) => e.stopPropagation()} // Prevent modal closure on modal content click
                    >
                        <div className='w-[90%] m-auto border-b border-gray-400 pb-1 mb-5'>
                            <h1 className='text-4xl'>Education</h1>
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>School</label>
                            <input type="text" className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Degree</label>
                            <input type="text" className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Field of Study</label>
                            <input type="text" className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='flex justify-evenly w-[90%] m-auto mb-5'>
                            <div className='w-full m-auto'>
                                <div className='w-full bg-green-300'>
                                    {/* Month dropdown */}
                                    <div className='w-full'><label htmlFor="monthSelect" className='text-lg'>Start date:</label></div>
                                    <div className='w-full m-auto flex justify-evenly'>
                                        <div className='w-[47%]'>

                                            <select
                                                id="monthSelect"
                                                value={selectedMonth}
                                                onChange={handleMonthChange}
                                                className='border border-black rounded-[6px] w-full h-10 outline-none'
                                            >
                                                <option value="">Select Month</option>
                                                {months.map((month, index) => (
                                                    <option key={index} value={month}>{month}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {/* Year dropdown */}
                                        <div className='w-[47%] ml-auto'>
                                            <label htmlFor="yearSelect" className='text-lg'> </label>
                                            <select
                                                id="yearSelect"
                                                value={selectedYear}
                                                onChange={handleYearChange}
                                                className='border border-black rounded-[6px] w-full h-10 outline-none'
                                            >
                                                <option value="">Select Year</option>
                                                {years.map((year, index) => (
                                                    <option key={index} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-evenly w-[90%] m-auto mb-5'>
                            <div className='w-full m-auto'>
                                <div className='w-full bg-green-300'>
                                    {/* Month dropdown */}
                                    <div className='w-full'><label htmlFor="monthSelect" className='text-lg'>{'End date (or expected)'}</label></div>
                                    <div className='w-full m-auto flex justify-evenly'>
                                        <div className='w-[47%]'>

                                            <select
                                                id="monthSelect"
                                                value={selectedMonth}
                                                onChange={handleMonthChange}
                                                className='border border-black rounded-[6px] w-full h-10 outline-none'
                                            >
                                                <option value="">Select Month</option>
                                                {months.map((month, index) => (
                                                    <option key={index} value={month}>{month}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {/* Year dropdown */}
                                        <div className='w-[47%] ml-auto'>
                                            <label htmlFor="yearSelect" className='text-lg'> </label>
                                            <select
                                                id="yearSelect"
                                                value={selectedYear}
                                                onChange={handleYearChange}
                                                className='border border-black rounded-[6px] w-full h-10 outline-none'
                                            >
                                                <option value="">Select Year</option>
                                                {years.map((year, index) => (
                                                    <option key={index} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 w-[90%] m-auto'>
                            <button className='border border-black btn1 w-24 rounded h-8'><span className='text-black font-semibold'>Save</span></button>
                            <button className='border border-black bg-white w-24 rounded h-8'><span className='text-black font-semibold'>Cancel</span></button>
                        </div>
                    </div>
                </div>
            )}
            {showModal3 && (
                <div
                    className='fixed inset-0 bg-white bg-opacity-30 z-100 backdrop-blur-sm h-full flex justify-center'
                    onClick={handleCloseModal3}
                >
                    <div
                        className='rounded-lg p-2 shadow-lg w-[55%] h-[570px] bg-white mt-10 rounded-[8px]'
                        onClick={(e) => e.stopPropagation()} // Prevent modal closure on modal content click
                    >
                        <div className='w-[90%] m-auto border-b border-gray-400 pb-1 mb-5'>
                            <h1 className='text-4xl'>Edit Education</h1>
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>School</label>
                            <input type="text" className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Degree</label>
                            <input type="text" className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Field of Study</label>
                            <input type="text" className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='flex justify-evenly w-[90%] m-auto mb-5'>
                            <div className='w-full m-auto'>
                                <div className='w-full bg-green-300'>
                                    {/* Month dropdown */}
                                    <div className='w-full'><label htmlFor="monthSelect" className='text-lg'>Start date:</label></div>
                                    <div className='w-full m-auto flex justify-evenly'>
                                        <div className='w-[47%]'>

                                            <select
                                                id="monthSelect"
                                                value={selectedMonth}
                                                onChange={handleMonthChange}
                                                className='border border-black rounded-[6px] w-full h-10 outline-none'
                                            >
                                                <option value="">Select Month</option>
                                                {months.map((month, index) => (
                                                    <option key={index} value={month}>{month}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {/* Year dropdown */}
                                        <div className='w-[47%] ml-auto'>
                                            <label htmlFor="yearSelect" className='text-lg'> </label>
                                            <select
                                                id="yearSelect"
                                                value={selectedYear}
                                                onChange={handleYearChange}
                                                className='border border-black rounded-[6px] w-full h-10 outline-none'
                                            >
                                                <option value="">Select Year</option>
                                                {years.map((year, index) => (
                                                    <option key={index} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-evenly w-[90%] m-auto mb-5'>
                            <div className='w-full m-auto'>
                                <div className='w-full'>
                                    {/* Month dropdown */}
                                    <div className='w-full'><label htmlFor="monthSelect" className='text-lg'>{'End date (or expected)'}</label></div>
                                    <div className='w-full m-auto flex justify-evenly'>
                                        <div className='w-[47%]'>

                                            <select
                                                id="monthSelect"
                                                value={selectedMonth}
                                                onChange={handleMonthChange}
                                                className='border border-black rounded-[6px] w-full h-10 outline-none'
                                            >
                                                <option value="">Select Month</option>
                                                {months.map((month, index) => (
                                                    <option key={index} value={month}>{month}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {/* Year dropdown */}
                                        <div className='w-[47%] ml-auto'>
                                            <label htmlFor="yearSelect" className='text-lg'> </label>
                                            <select
                                                id="yearSelect"
                                                value={selectedYear}
                                                onChange={handleYearChange}
                                                className='border border-black rounded-[6px] w-full h-10 outline-none'
                                            >
                                                <option value="">Select Year</option>
                                                {years.map((year, index) => (
                                                    <option key={index} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 w-[90%] m-auto'>
                            <button className='border border-black btn1 w-24 rounded h-8'><span className='text-black font-semibold'>Save</span></button>
                            <button className='border border-black bg-white w-24 rounded h-8'><span className='text-black font-semibold'>Cancel</span></button>
                        </div>
                    </div>
                </div>
            )}
            {showModal4 && (
                <div
                    className='fixed inset-0 bg-white bg-opacity-30 z-100 backdrop-blur-sm h-full flex justify-center'
                    onClick={handleCloseModal4}
                >
                    <div
                        className='rounded-lg p-2 shadow-lg w-[55%] h-[570px] bg-white mt-10 rounded-[8px]'
                        onClick={(e) => e.stopPropagation()} // Prevent modal closure on modal content click
                    >
                        <div className='w-[90%] m-auto border-b border-gray-400 pb-1 mb-5'>
                            <h1 className='text-4xl'>Edit Education</h1>
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>School</label>
                            <input type="text" className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Degree</label>
                            <input type="text" className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Field of Study</label>
                            <input type="text" className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='flex justify-evenly w-[90%] m-auto mb-5'>
                            <div className='w-full m-auto'>
                                <div className='w-full bg-green-300'>
                                    {/* Month dropdown */}
                                    <div className='w-full'><label htmlFor="monthSelect" className='text-lg'>Start date:</label></div>
                                    <div className='w-full m-auto flex justify-evenly'>
                                        <div className='w-[47%]'>

                                            <select
                                                id="monthSelect"
                                                value={selectedMonth}
                                                onChange={handleMonthChange}
                                                className='border border-black rounded-[6px] w-full h-10 outline-none'
                                            >
                                                <option value="">Select Month</option>
                                                {months.map((month, index) => (
                                                    <option key={index} value={month}>{month}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {/* Year dropdown */}
                                        <div className='w-[47%] ml-auto'>
                                            <label htmlFor="yearSelect" className='text-lg'> </label>
                                            <select
                                                id="yearSelect"
                                                value={selectedYear}
                                                onChange={handleYearChange}
                                                className='border border-black rounded-[6px] w-full h-10 outline-none'
                                            >
                                                <option value="">Select Year</option>
                                                {years.map((year, index) => (
                                                    <option key={index} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-evenly w-[90%] m-auto mb-5'>
                            <div className='w-full m-auto'>
                                <div className='w-full'>
                                    {/* Month dropdown */}
                                    <div className='w-full'><label htmlFor="monthSelect" className='text-lg'>{'End date (or expected)'}</label></div>
                                    <div className='w-full m-auto flex justify-evenly'>
                                        <div className='w-[47%]'>

                                            <select
                                                id="monthSelect"
                                                value={selectedMonth}
                                                onChange={handleMonthChange}
                                                className='border border-black rounded-[6px] w-full h-10 outline-none'
                                            >
                                                <option value="">Select Month</option>
                                                {months.map((month, index) => (
                                                    <option key={index} value={month}>{month}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {/* Year dropdown */}
                                        <div className='w-[47%] ml-auto'>
                                            <label htmlFor="yearSelect" className='text-lg'> </label>
                                            <select
                                                id="yearSelect"
                                                value={selectedYear}
                                                onChange={handleYearChange}
                                                className='border border-black rounded-[6px] w-full h-10 outline-none'
                                            >
                                                <option value="">Select Year</option>
                                                {years.map((year, index) => (
                                                    <option key={index} value={year}>{year}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4 w-[90%] m-auto'>
                            <button className='border border-black btn1 w-24 rounded h-8'><span className='text-black font-semibold'>Save</span></button>
                            <button className='border border-black bg-white w-24 rounded h-8'><span className='text-black font-semibold'>Cancel</span></button>
                        </div>
                    </div>
                </div>
            )}
            {showModal5 && (
                <div
                    className='fixed inset-0 bg-white bg-opacity-30 z-100 backdrop-blur-sm h-full flex justify-center'
                    onClick={handleCloseModal5}
                >
                    <div
                        className='rounded-lg p-2 shadow-lg w-[55%] h-[570px] bg-white mt-10 rounded-[8px]'
                        onClick={(e) => e.stopPropagation()} // Prevent modal closure on modal content click
                    >
                        <div className='w-[90%] m-auto border-b border-gray-400 pb-1 mb-5'>
                            <h1 className='text-4xl'>Add Skllis</h1>
                        </div>
                        <div className='w-[90%] m-auto'>

                        <input 
                            type="text" 
                            value={newSkill} 
                            onChange={handleSkillChange}
                            className="border border-black rounded-[10px] p-2 mb-4 w-full"
                        />
                        </div>
                        <div className='flex gap-4 w-[90%] m-auto'>
                            <button className='border border-black btn1 w-24 rounded h-8'><span className='text-black font-semibold' onClick={addSkill}>Save</span></button>
                            <button className='border border-black bg-white w-24 rounded h-8'><span className='text-black font-semibold'>Cancel</span></button>
                        </div>
                    </div>
                </div>
            )}
            {showModal6 && (
                <div
                    className='fixed inset-0 bg-white bg-opacity-30 z-100 backdrop-blur-sm h-full flex justify-center'
                    onClick={handleCloseModal6}
                >
                    <div
                        className='rounded-lg p-2 shadow-lg w-[55%] h-[570px] bg-white mt-10 rounded-[8px]'
                        onClick={(e) => e.stopPropagation()} // Prevent modal closure on modal content click
                    >
                        <div className='w-[90%] m-auto border-b border-gray-400 pb-1 mb-5'>
                            <h1 className='text-4xl'>Added Skllis</h1>
                        </div>
                        <div className='w-[90%] m-auto'>
                        <ul className="mt-4">
                        {skills.map(skill => (
                            <li key={skill.id} className="flex justify-between items-center mb-2">
                                {skill.name}
                                <button className="bg-red-500 text-black py-1 px-2 rounded" onClick={() => deleteSkill(skill.id)}>Delete</button>
                            </li>
                        ))}
                        </ul>
                        </div>
                        <div className='flex gap-4 w-[90%] m-auto'>
                            <button className='border border-black btn1 w-24 rounded h-8'><span className='text-black font-semibold'>Save</span></button>
                            <button className='border border-black bg-white w-24 rounded h-8'><span className='text-black font-semibold'>Cancel</span></button>
                        </div>
                    </div>
                </div>
            )}
            {showModal7 && (
                <div
                    className='fixed inset-0 bg-white bg-opacity-30 z-100 backdrop-blur-sm h-full flex justify-center'
                    onClick={handleCloseModal7}
                >
                    <div
                        className='rounded-lg p-2 shadow-lg w-[55%] h-[570px] bg-white mt-10 rounded-[8px]'
                        onClick={(e) => e.stopPropagation()} // Prevent modal closure on modal content click
                    >
                        <div className='w-[90%] m-auto border-b border-gray-400 pb-1 mb-5'>
                            <h1 className='text-4xl'>Add experience</h1>
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Title</label>
                            <input type="text" placeholder='Ex:Retail Sales Manager' className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Employment type</label>
                            <input type="text" className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Company name</label>
                            <input type="text" placeholder='Ex:Microsoft' className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Location</label>
                            <input type="text" placeholder='Ex:London, United Kingdom' className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div className='w-[90%] m-auto mb-5'>
                            <label htmlFor="" className='mb-1 text-lg'>Location</label>
                            <input type="date"  className='w-full h-10 outline-none border border-black rounded-[6px]' />
                        </div>
                        <div>

                        </div>
                        <div className='flex gap-4 w-[90%] m-auto'>
                            <button className='border border-black btn1 w-24 rounded h-8'><span className='text-black font-semibold'>Save</span></button>
                            <button className='border border-black bg-white w-24 rounded h-8'><span className='text-black font-semibold'>Cancel</span></button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default UserProfile
