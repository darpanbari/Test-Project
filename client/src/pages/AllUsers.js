import React, {useEffect} from 'react'
import Nav from '../components/Nav'
import { getUser } from '../redux/user/userAction.js';
import { useDispatch, useSelector } from 'react-redux';

function AllUsers() {
  const user = useSelector(state => state.userState.user.data);
  console.log(user)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <>
      <div className="container-fluid dashboard">
        <div className="row">
          <div className="col-lg-2 col-md-7 justify-content-center dash-position">
            <Nav />
          </div>
          <div className="col-lg-10 col-md-6 bg-white shadow-sm my-5 dash w-75 margin" style={{marginLeft:"20%"}}>
            <h1 className="text-center mt-5 fst-italic text-white bgcolor-2 py-4">All Users</h1>
            <div className="w-100 px-0">
              {user && user.length > 0 ? (
                <table className="table table-bordered my-5">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col" className="hide">User ID</th>
                      <th scope="col">FirstName</th>
                      <th scope="col">Surname</th>
                      <th scope="col">Username</th>
                      <th scope="col">Email</th>
                      <th scope="col">Department</th>
                      <th scope="col">Designation</th>
                      {/* <th scope="col">LocationId</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((u, i) => (
                      <tr key={u._id}>
                        <td>{i + 1}</td>
                        <td className="hide">{u._id}</td>
                        <td>{u.firstName}</td>
                        <td>{u.surname}</td>
                        <td>{u.username}</td>
                        <td>{u.email}</td>
                        <td>{u.department}</td>
                        <td>{u.designation}</td>
                        {/* <td>{u.locationId}</td> */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No users found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllUsers;
