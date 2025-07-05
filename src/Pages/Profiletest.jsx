import React, { useState, useEffect } from 'react'
import { auth, db } from "../Components/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';
const Profiletest = () => {
    const [userDetails, setUserDetails] = useState(null);
    const navigate = useNavigate()
    const fetchUserData = async () => {
        auth.onAuthStateChanged(async (user) => {
            console.log(user);
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                setUserDetails(docSnap.data());
                console.log(docSnap.data());

            } else {
                console.log("user not found");
            }
        });
    };
    useEffect(() => {
        fetchUserData()
    }, []);

    async function handleLogout() {
        try {
            await auth.signOut();
            navigate("/Login");
        } catch (error) {
            console.error("Error Logout:", error.message)
        }
    }
        return (
            <div>
                {userDetails ? (
                    <>
                        <h1> Welcome User : {userDetails.name} 🙏🖐🖐</h1>
                        <div className="">
                            <p>Username : {userDetails.name}</p>
                            <p>Email : {userDetails.email}</p>
                        </div>
                        <button className='bg-blue-500 text-white p-2 rounded-xl cursor-pointer' onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        )
    }

    export default Profiletest