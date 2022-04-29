import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import Spinner from "../../components/Spinner";
import { getAll, reset } from '../../features/annonce/annonceSlice';
 
import { Link } from "react-router-dom";

function Annonces() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);

  const { annonces, isLoading, isError, message } =
    useSelector((state) => state.annonces);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (!user) {
      navigate("/login");
    }

    dispatch(getAll());

    return () => {
      dispatch(reset());
    };
  }, [
    user,
    navigate,
    dispatch,
  
  ]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <div className='add-btn mb-4'>
        <Link to='/addcondidat'>
          <a
            className='btn'
            style={{
              backgroundColor: "#005a81",
              color: "#FFFFFF",
              fontWeight: "bold",
            }}>
            Ajouter nouveau condidat
          </a>
        </Link>
      </div>
      <section className='content'>
        <h1>annonces</h1>
        {annonces.length > 0 ? (
          <div className='goals'>
            {annonces.map((an) => (
              <> 
                <div className='card text-center'>
                  <div className='card-header'>{an.title}</div>
                  <div className='card-body'>
                    <h5 class='card-title'>{an.salary}</h5>
                    <p className='card-text'>
                      With supporting text below as a natural lead-in to
                      additional content.
                    </p>
                    <a href='#' className='btn btn-primary'>
                      Go somewhere
                    </a>
                  </div>
                  <div className='card-footer text-muted'>  {new Date(an.createdAt).toLocaleString("en-US")}</div>
                </div>
              </>
            ))}
          </div>
        ) : (
          <h3>You have not set any annonces</h3>
        )}
      </section>
    </>
  );
}

export default Annonces;
