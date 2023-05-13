import React, {useEffect} from 'react'
import Nav from '../components/Nav'
import { getLocation } from '../redux/location/locationAction.js';
import { useDispatch, useSelector } from 'react-redux';

function AllLocations() {
  const location = useSelector(state => state?.locationState?.location?.data);
  console.log(location)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLocation());
  }, [dispatch]);



  return (
    <>
      <div className="container-fluid dashboard">
        <div className="row">
          <div className="col-lg-2 col-md-7 justify-content-center dash-position">
            <Nav />
          </div>
          <div className="col-lg-10 col-md-6 bg-white shadow-sm my-5 dash w-50 margin" style={{marginLeft:"32%"}}>
            <h1 className="text-center mt-5 fst-italic text-white bgcolor-2 py-4">All Locations</h1>
            <div className="w-100 px-0">
              {location && location.length > 0 ? (
                <table className="table table-bordered my-5">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col" className="hide">Location ID</th>
                      <th scope="col">Location Name</th>
                      <th scope="col">Location Code</th>
                    </tr>
                  </thead>
                  <tbody>
                    {location.map((u, i) => (
                      <tr key={u._id}>
                        <td>{i + 1}</td>
                        <td className="hide">{u._id}</td>
                        <td>{u.locationName}</td>
                        <td>{u.locationCode}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <p>No location found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllLocations;
