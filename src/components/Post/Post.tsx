import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { RiFilter3Line } from "react-icons/ri";
import './post.css'
import { GoTag } from "react-icons/go";
import imgs from '../image/user.png'
import { PiShareFat } from "react-icons/pi";
import { LuThumbsUp } from "react-icons/lu";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { IoChatbubbleOutline } from "react-icons/io5";
import axios from 'axios';
import logo from '../image/bugbear_logo.jpg'
import user_man from './images/user_man.jpeg'
import { BsCardImage } from "react-icons/bs";
import { toast } from 'react-toastify';
import { RegisterApi } from '../../api/RegisterApi';
import { MdClose } from "react-icons/md";
import { FaRegSmile } from "react-icons/fa";
import { PiImageDuotone } from "react-icons/pi";
import { title } from 'process';
import { Link } from 'react-router-dom';
interface PostData {
    title: string;
    content: string;
    image: string;
    // Add other fields as necessary
}

interface CommentData {
    id: number;
    post: number;
    user: number;
    body: string;
    date_added: string;
    likes: [];
    reply: null | string;
    comment_user: {
        id: number;
        first_name: string | null;
        last_name: string | null;
        profile_pic_url: string;
    };
}

const Post = () => {
    const [show, setShow] = useState(false);
    const [postNo, setPostNo] = useState<number>(0);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);
    const [hide, setHide] = useState(false);
    const [title1, setTitle] = useState<any>("")
    const [content1, setContent] = useState<any>("")
    const [image1, setImage] = useState<any>("")
    const [info, setInfo] = useState<object>({ title: "", content: "", image: "" });
    const [datastore, setdatastore] = useState<any>([])
    const [data, setData] = useState<any>([])
    const [commentSection, setCommentSection] = useState<Boolean>(false)
    const modalRef = useRef<HTMLDivElement>(null);
    const [comments, setComments] = useState<{ [key: number]: string }>({});
    const modalRef2 = useRef<HTMLDivElement>(null);
    const [activeCommentIndex, setactiveCommentIndex] = useState<number | null>(null)
    const [profile, setProfile] = useState<string | Blob>("")
    const [commentData, setCommentData] = useState<{ [key: number]: CommentData[] }>({});
    const inputRef = useRef<HTMLInputElement | null>(null);

    const handleImageClick = () => {
        inputRef.current?.click();
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {


        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setImage(file)
            console.log("from api", datastore.profile_pic)
            console.log("from component", file)
            // Create a URL for the selected file
        }
        console.log(e.target.files)
    }


    const handleChangeInfo = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        if (name === "title") {
            setTitle(value);
            console.log("Title name:", value);
        } else if (name === "content") {
            setContent(value);
            console.log("Content:", value);
        }

        setInfo(prevState => ({ ...prevState, [name]: value }));
        console.log("info:", typeof (info))
        // setCreadential(prevState => ({...prevState,   [name]: value }));    
    }
    useEffect(() => {
        let token = localStorage.getItem('token');

        if (token) {
            // Set the token in the axios default headers
            console.log("Token is come", token)
            axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            fetchProfile();
        }
    }, []);

    const fetchComments = async (postId: number) => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/posts/comments/${postId}/`);
            setCommentData(prevState => ({ ...prevState, [postId]: response.data }));
        } catch (error) {
            console.error("Error fetching comments:", error);
        }
    };

    const fetchProfile = async () => {
        try {

            const response = await axios.get("http://127.0.0.1:8000/api/posts/");
            setdatastore(response.data);
            console.log("fetch success", datastore.title);
            // if (response) {
            //     setData(response.data.profile_pic_url)
            // }
            // console.log(response.data.profile_pic)
            // const dt=response.data.profile_pic


        } catch (error) {
            console.error("Error fetching post:", error);
            toast.error("Error fetching profile.");
        }

    }
    const postLike = async (index: number) => {
        alert("ccc");
        setPostNo(index + 1);
        const postId = index + 1;
        console.log("post:", postId);
        let token = localStorage.getItem('token');
        const url = `http://127.0.0.1:8000/api/posts/${postId}/like/`;

        try {
            const response = await axios.post(url, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // Replace with your actual access token if needed
                }
            });

            console.log('Success:', response.data);
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    }
    const CommentSection = (index: number) => {
        const postId = index + 1;
        fetchComments(postId);
        setCommentSection(true)
        setactiveCommentIndex(index)
    }
    const fetchUserProfile = async () => {

        try {
            const formData = new FormData();
            formData.append("title", title1);
            formData.append("content", content1);
            formData.append("image", image1);
            const response = await axios.post("http://127.0.0.1:8000/api/posts/create-post/", formData);;
            // setSuccessMessage('Registered successfully!');
            console.log("Registered successfully!", response);
            console.log("info:", info);
            fetchProfile()
        } catch (error) {
            console.error("Error fetching user profile:", error);
        }
    }

    const handleCommentChange = (index: number, value: string) => {
        setComments(prevComments => ({
            ...prevComments,
            [index]: value
        }));
    }

    const submitComment = async (index: number) => {
        const comment = comments[index];
        if (!comment) return;

        const postId = index + 1;
        const url = `http://127.0.0.1:8000/api/posts/comments/${postId}/`;
        let token = localStorage.getItem('token');

        try {
            const response = await axios.post(url, { body: comment }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                }
            });

            console.log('Comment posted successfully:', response.data);
            setComments(prevComments => ({
                ...prevComments,
                [index]: ""
            }));
            fetchProfile(); // Refresh the post data to show the new comment
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error('Axios error:', error.response?.data);
            } else {
                console.error('Unexpected error:', error);
            }
        }
    }

    useEffect(() => {
        console.log("fetchProfile")
        fetchProfile()
    }, [])

    function setClose() {
        setShow(false)
        setShow2(true)
    }
    function Show() {
        setShow(true)
        setHide(true)

    }
    function setClose2() {
        setShow2(false)
    }
    function setClose3() {
        setHide(true)
        setShow2(false)
        alert("come")
    }

    function Show2() {
        setShow2(true)
        setHide(false)
    }

    function Show3() {
        setShow2(true)
    }
    const handleClickOutside = (event: MouseEvent) => {
        if (hide && modalRef.current && !modalRef.current.contains(event.target as Node)) {
            setClose();
        }
    };

    const handleEscKeyPress = (event: KeyboardEvent) => {
        if (hide && event.key === 'Escape') {
            setClose();
        }
    };

    const handleClickOutside2 = (event: MouseEvent) => {
        if (modalRef2.current && !modalRef2.current.contains(event.target as Node)) {
            setHide(true)
            setClose2();
        }
    };

    const handleEscKeyPress2 = (event: KeyboardEvent) => {
        if (event.key === 'Escape') {
            setHide(true)
            setClose2();

        }
    };
    useEffect(() => {

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keydown', handleEscKeyPress);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keydown', handleEscKeyPress);
        };
    }, [hide]);

    useEffect(() => {

        document.addEventListener('mousedown', handleClickOutside2);
        document.addEventListener('keydown', handleEscKeyPress2);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside2);
            document.removeEventListener('keydown', handleEscKeyPress2);
        };
    }, [hide]);

    
    var datainfo = datastore.map((d: PostData, index: number) => {
        const { title, content, image } = d;

        return (
            <>
                <div key={index + 1} className='w-full bg-white rounded mt-5'>
                    <div className='flex justify-evenly rounded px-5 py-2'>
                        <div className='flex gap-2'>
                            <div>
                                <img className='h-12 w-12 rounded-full' src={imgs}></img>
                            </div>
                            <div>
                                <p className='font-semibold text-xl'>Jane Doe</p>
                                <p className='text-gray-300 text-[10px]'>May,21 2014</p>
                            </div>
                        </div>
                        <div className='ml-auto'>
                            <PiShareFat size={35} />
                        </div>
                    </div>
                    <p className='fond-bold text-xl mt-4 px-5'>{title}</p>
                    <p className='mt-5 px-5'>{content}</p>
                    <div className='w-full'>
                        {image && <img src={`http://127.0.0.1:8000${image}`} className="h-[200px] w-full"></img>}
                    </div>
                    <div className='flex justify-evenly mt-5 px-5'>
                        <div className='flex'><img src={imgs} alt="" className='h-5 w-5 rounded-full' /><span className='text-gray-300'>144</span></div>
                        <div className=' ml-auto'>13 comments</div>
                    </div>
                    <div className='bg-gray-300 rounded-b-[4px] px-5 py-2'>
                        <div className='flex justify-evenly'>
                            <div className='flex mr-auto gap-1'><HiOutlineHandThumbUp size={30} className="cursor-pointer" onClick={() => { postLike(index) }} /><span className='text-xl font-bold' >Like</span></div>
                            <div className='flex gap-1'><IoChatbubbleOutline size={20} className="mt-1 cursor-pointer" onClick={() => {CommentSection (index)}} /><span className='text-xl font-bold'>Comments</span></div>
                        </div>
                    </div>
                    <div className={commentSection && activeCommentIndex === index ? 'flex py-2' : 'hidden'}>
                        <div className='mx-1'>
                            <div className='h-10 w-10 overflow-none'><img src={user_man} alt="" className='h-full w-full rounded-full rounded-[100%]' /></div>
                        </div>
                        <div className='rounded-full border border-black w-full flex mx-1'><input type="text" placeholder='Add a comment...' className='w-full mx-2 my-1 outline-none' value={comments[index] || ""} onChange={(e) => handleCommentChange(index, e.target.value)} /><BsCardImage className='mx-1 mt-2' size={25} /><FaRegSmile className='mx-1 mt-2' size={25} /></div>
                    </div>
                    <div className='flex justify-end'>
                        <button
                            onClick={() => submitComment(index)}
                            className='px-4 py-2 bg-blue-500 text-white rounded mt-2'
                        >
                            Submit
                        </button>
                    </div>
                    <div className={commentSection && activeCommentIndex === index ? 'py-2' : 'hidden'}>
                    {commentSection && activeCommentIndex === index && commentData[index] && commentData[index].map((comment: CommentData) => (
                                <div className='flex p-1 gap-2' key={comment.id}>
                                    <img src={comment.comment_user.profile_pic_url} className='w-8 h-8 rounded-full' alt="Profile" />
                                    <div>
                                        <p className='text-[14px] font-semibold'>{comment.comment_user.first_name || "User"}</p>
                                        <p className='text-[12px]'>{comment.body}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </>
        )
    })

    return (
        <>

            <div className='w-[600px]'>
                <div className='w-full bg-white flex justify-evenly rounded h-20 pt-5'>
                    <div className='bg_col flex max-h-6 px-3 rounded mr-auto ml-4'><RiFilter3Line className='mt-1' />Filter</div>
                    <div className='bg_col max-h-6 px-3 rounded mr-4' onClick={Show}>Create</div>
                </div>
                <div>{datainfo}</div>
            </div>
            <div className={show ? `` : 'hidden'}>
                <div className='fixed inset-0 bg-white bg-opacity-30 z-100 backdrop-blur-sm h-full flex justify-center item-center'>
                    <div ref={modalRef} className='modal w-[30%] max-h-14 mt-52 shadow rounded-full bg-gray-300 bg-blur text-center'>
                        <div className='flex w-full justify-center'><button className='text-5xl font-bold' onClick={Show2}>Post</button><span className='text-5xl font-bold'>/</span><button className='text-5xl font-bold'>Promossion</button></div>
                    </div>
                </div>
            </div>
            <div className={show2 ? `` : 'hidden'}>
                <div className='fixed inset-0 bg-white bg-opacity-30 z-100 backdrop-blur-sm h-full flex justify-center'>
                    <div ref={modalRef2} className='modal w-[45%] max-h-[550px] mt-40 rounded-[12px] bg-white p-5'>
                        <div className='flex justify-center justify-evenly mb-4'>
                            <p className='text-3xl font-semibold'>Create Post</p>
                            <MdClose className='ml-auto' size={28} color="gray" onClick={setClose3} />
                        </div>
                        <div className='title_box m-auto w-[80%]'>
                            <label htmlFor="" className='text-2xl'>Title</label><br />
                            <input type="text" name='title' className='ho_in border-2 p-2 w-[95%] h-11 border-gray-300 rounded-[11px] outline-none mt-1 mb-4' placeholder='Enter compiling title' onChange={handleChangeInfo} />
                            <label htmlFor="" className='text-2xl'>Description</label><br />
                            <textarea name='content' className='ho_in2 border-2 p-2 w-[95%] h-28 border-gray-300 rounded-[11px] outline-none mt-1 mb-4' placeholder='Enter compiling title' onChange={handleChangeInfo} />
                            <div className='w-full flex'>
                                <div className='w-[40%]'>
                                    <label htmlFor="" className='text-2xl'>Tabs</label><br />
                                    <select name="" id="" className='w-[95%] rounded-[10px] border border-gray-300 border-2 h-11 outline-none'>
                                        <option value="1">Add tags</option>
                                        <option value="1">News</option>
                                        <option value="1">Updates</option>
                                        <option value="1">Tip</option>
                                    </select>
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="" className='text-2xl'>Upload</label><br />
                                    <div onClick={handleImageClick}>
                                        <div className='w-[93%] bg-white border-gray-300 border-2 rounded-[10px] border border-gray-300 h-11 flex pt-2'><PiImageDuotone size={25} className="mx-2" /><span>Atach image or videos</span></div>
                                        <input type="file" name='image' onChange={handleChange} ref={inputRef} className="hidden text-white file:w-[60%] file:h-9 mt-3 mb-4" />
                                    </div>
                                </div>
                            </div>
                            <div className=''>
                                <button className='py-2 px-3 rounded-[11px] mt-10 bl_color' onClick={fetchUserProfile}>Publish</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Post