import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
 
import Spinner from '../components/Spinner'
 import { getRecruters , resetRecruter} from '../features/recruter/recruterSlice'
import RecruterItem from '../components/RecruterItem'

function Recruters() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  
  const { recruters, recrutersIsLoading, recruterIsError, recruterMessage } = useSelector(
    (state) => state.recruters
  )

  useEffect(() => {
    
    if (recruterIsError    ) {
      console.log(recruterMessage)
    }

    if (!user) {
      navigate('/login')
    }

 
    dispatch(getRecruters())

    return () => {
      dispatch(resetRecruter())
    }
  }, [user, navigate, dispatch , recruterIsError,recruterMessage,recrutersIsLoading])

  if ( recrutersIsLoading) {
    return <Spinner />
  }

  return (
    <>
     
     

      <section className='main'>
        {recruters.length > 0 ? (
          <div className='goals'>
            {recruters.map((rec) => (
              <RecruterItem key={rec._id} recruter={rec} />
            ))}
          </div>
        ) : (
          <h3>You have not set any recruters</h3>
        )}
      </section>


      
    </>
  )
}

export default Recruters
